<script setup>
import {reactive, ref} from 'vue'
import {Head, Link, useForm} from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Editor from '@tinymce/tinymce-vue'
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import {config} from '@config/editor';


// Fields

const successMessage = ref('')

const errorMessages = ref([])

const form = reactive({
    title: '',
    content: '',
})

const submit = (e) => {

    const formData = new FormData()
    formData.append('title', form.title)
    formData.append('content', form.content)

    
    Promise.resolve(axios.post('/api/posts', formData))
    .then((value) => {
        if (value.data.id) {
            successMessage.value = 'New post is created successfully!'
        }
    })
    .catch((value) => {
        errorMessages.value = value.response.data.errors
    })
}
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Tiny MCE</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="flex flex-col gap-y-4">

                    <div class="flex w-full justify-end items-center">
                        <Link class="rounded px-4 py-2 bg-blue-500 hover:bg-blue-600 w-fit text-white" href="/tiny-results">View Posts</Link>
                    </div>

                    <div @click="successMessage=''" v-if="successMessage" class="cursor-pointer px-4 py-2 bg-green-500 text-white rounded text-md my-4">
                        {{ successMessage }}
                    </div>

                    <template v-if="errorMessages">
                        <div v-for="(message, index) in errorMessages" @click="errorMessages = []" class="cursor-pointer px-4 py-2 bg-red-500 text-white rounded text-md">
                            {{ message[0] }}
                        </div>
                    </template>

                    <div>
                        <InputLabel for="title" value="Title" />

                        <TextInput
                            id="title"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.title"
                            required
                        />

                        <InputError class="mt-2"/>
                    </div>
                    
                    <div>
                        <InputLabel for="content" value="Content" />

                        <Editor
                            id="content"
                            api-key="o7z5dw17ld7gw9q0yct9rzpggu8r8vg3ieeef324mom7tcc4"
                            v-model="form.content"
                            :init="config"
                        />
                    </div>

                    <div class="flex justify-end items-center mt-4 w-full">
                        <PrimaryButton class="ml-4" @click="submit">
                            Submit
                        </PrimaryButton>
                    </div>

                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
