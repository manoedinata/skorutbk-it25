<script setup>
import { RouterView } from 'vue-router'
import { Analytics } from '@vercel/analytics/vue'

import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />

  <main class="py-10">
    <RouterView />
  </main>

  <footer class="text-center text-slate-400 text-sm py-6">
    &copy; Teknologi Informasi 2025 ITS. Sorry if the website isn't pretty, but the data is all that matters.
  </footer>

  <Analytics />
</template>
