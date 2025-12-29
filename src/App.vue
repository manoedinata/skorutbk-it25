<script setup>
import { RouterView } from 'vue-router'

import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />

  <main class="py-10">
    <RouterView />
  </main>
</template>
