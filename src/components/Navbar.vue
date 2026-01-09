<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);
const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};

const menuItems = [
    { name: 'Rekap Skor', to: '/' },
    // { name: 'Tentang Teknologi Informasi', to: '/tentang' },
];
</script>

<template>
    <nav
        class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">

                <RouterLink to="/" class="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                    <div>
                        <img src="/logo-DTI-border1.png" alt="Logo" class="w-6 h-6" />
                    </div>
                    <span class="font-bold text-xl text-slate-800 tracking-tight">Teknologi Informasi 2025</span>
                </RouterLink>

                <div class="hidden md:flex space-x-8 items-center">
                    <RouterLink v-for="item in menuItems" :key="item.name" :to="item.to"
                        class="navbar-links text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg transition-colors duration-200">
                        {{ item.name }}
                    </RouterLink>

                    <a href="https://its.ac.id/it" target="_blank" rel="noopener"
                        class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg shadow-indigo-200 transition-all hover:scale-105 active:scale-95">
                        Situs Departemen Teknologi Informasi
                    </a>
                </div>

                <div class="flex items-center md:hidden">
                    <button @click="toggleMenu"
                        class="text-slate-600 hover:text-indigo-600 focus:outline-none p-2 rounded-md">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <transition enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform -translate-y-2 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in" leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform -translate-y-2 opacity-0">
            <div v-show="isOpen" class="md:hidden bg-white border-t border-slate-100 shadow-xl">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <RouterLink v-for="item in menuItems" :key="item.name" :to="item.to"
                        class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50">
                        {{ item.name }}
                    </RouterLink>
                    <div class="pt-4 pb-2">
                        <a href="https://its.ac.id/it" target="_blank" rel="noopener"
                            class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg shadow-indigo-200 transition-all hover:scale-105 active:scale-95">
                            Situs Departemen Teknologi Informasi
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<style scoped>
/* Active navbar */
nav a.navbar-links.router-link-active {
    color: #4f46e5;
    background-color: #eef2ff;
}
</style>
