<script setup>
import {reactive, ref} from 'vue'
import {Head, Link, useForm} from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

defineProps({
    post: Object
})
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

                    <div class="flex w-full justify-start items-center">
                        <Link class="rounded px-4 py-2 bg-blue-500 hover:bg-blue-600 w-fit text-white" href="/tiny-results">Back</Link>
                    </div>

                    <br>

                    <div class="block">
                        <h1 class="text-4xl text-neutral-900 font-extrabold">{{ post.title }}</h1>
                        <h6 class="text-neutral-600 px-1">April 3, 2023</h6>
                    </div>

                    <div class="bg-white px-4 py-2 rounded flex flex-col gap-2">
                        
                        <div v-html="post.content"></div>
                        
                    </div>

                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
