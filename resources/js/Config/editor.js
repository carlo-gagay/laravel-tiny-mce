import { reactive, ref } from "vue";
import useImageUploader from '@helper/image-uploader';

const { uploadImage } = useImageUploader();

const plugins = ref('lists link image table code help wordcount media')

const toolbars = ref('insertfile undo redo | styles | bold italic | formatselect fontsizeselect | alignleft aligncenter alignright alignjustify | outdent indent | link image | media')


const _handleImageUpload = (callback, value, meta) => {
    let input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.onchange = function () {
        let file = this.files[0];

        let reader = new FileReader();
        reader.onload = function () {

            const formData = new FormData()
            formData.append('file', file)

            axios.post('/api/images', formData)
            .then((response) => {
                callback(response.data.location, {title: file.name})
            })
            .catch((reason) => {
                tinymce.activeEditor.notificationManager.open({
                    text: reason,
                    type: 'error'
                });
            })
            
        };

        reader.readAsDataURL(file);
    };

    input.click();
}


const _handleMediaUpload = (callback, value, meta) => {}


const config = reactive({

    plugins: plugins.value,
    toolbar: toolbars.value,
    image_title: true,
    images_reuse_filename: true,
    images_upload_url: '/api/images',

    /* and here's our custom image picker*/
    file_picker_callback: function (callback, value, meta) {

        if (meta.filetype === 'image') {
            _handleImageUpload(callback, value, meta)
        }

        if (meta.filetype === 'media') {
            _handleMediaUpload(callback, value, meta)
        }
    },

    file_picker_types: 'image | media',

    iframe_template_callback: (data) => `<iframe title='${data.title}' width='${data.width}' height='${data.height}' src='${data.source}'></iframe>`,

    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',

})




export {
    config,
    plugins,
    toolbars,
}