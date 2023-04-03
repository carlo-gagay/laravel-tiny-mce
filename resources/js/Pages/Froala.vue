<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted } from 'vue';

const init = () => {
    var editor = new FroalaEditor('#example');
}

onMounted(init)
</script>

<template>
    <Head title="Froala" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Froala</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    
                    <div id="example"></div>

                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
