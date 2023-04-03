import { reactive, ref } from "vue";

const plugins = ref('lists link image table code help wordcount media')

const toolbars = ref('undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | media')

const config = reactive({
    plugins: plugins.value,
    toolbar: toolbars.value,
    image_title: true,
    automatic_uploads: true,

    file_picker_callback: (callback, value, meta) => {
        // Provide file and text for the link dialog
        if (meta.filetype == 'file') {
            callback('mypage.html', { text: 'My text' });
        }

        // Provide image and alt text for the image dialog
        if (meta.filetype == 'image') {
            callback('myimage.jpg', { alt: 'My alt text' });
        }

        // Provide alternative source and posted for the media dialog
        if (meta.filetype == 'media') {
            callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
        }
    },

    file_picker_types: 'image',

    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',

    iframe_template_callback: (data) => `<iframe title='${data.title}' width='${data.width}' height='${data.height}' src='${data.source}'></iframe>`,

})


export {
    config,
    plugins,
    toolbars,
}