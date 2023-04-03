<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">

                        <div class="flex gap-2">
                            <Link href="/tiny" class="bg-neutral-400 rounded px-4 py-2 text-white hover:bg-neutral-500">Go Tiny</Link>
                            <Link href="/tiny2" class="bg-neutral-400 rounded px-4 py-2 text-white hover:bg-neutral-500">Go Tiny2</Link>
                            <Link href="/trix" class="bg-neutral-400 rounded px-4 py-2 text-white hover:bg-neutral-500">Go Trix</Link>
                            <Link href="/froala" class="bg-neutral-400 rounded px-4 py-2 text-white hover:bg-neutral-500">Froala</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
