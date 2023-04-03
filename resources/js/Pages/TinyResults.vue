<script setup>
import {reactive, ref} from 'vue'
import {Head, Link, useForm} from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

defineProps({
    posts: Object
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
                        <Link class="rounded px-4 py-2 bg-blue-500 hover:bg-blue-600 w-fit text-white" href="/tiny">Back</Link>
                    </div>

                    <div class="bg-white px-4 py-2 rounded flex flex-col gap-2">
                        
                        <div class="rounded bg-blue-200 px-8 py-4" v-for="(post, index) in posts">
                            <div class="flex flex-row justify-between">
                                <h5>{{ post.title }}</h5>
                                <div class="flex flex-row gap-2 items-center">
                                    <Link :href="`/post/${post.id}`" class="text-sm text-green-800 hover:green-900">View</Link>
                                    <Link :href="`/post/${post.id}/edit`" class="text-sm text-orange-800 hover:orange-900">Edit</Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
