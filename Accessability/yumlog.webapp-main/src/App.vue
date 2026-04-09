<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
  
  <header>
    <TheNavbar />
    <TheHeader />
  </header>

  <main id="main-content" tabindex="-1">
    <RouterView />
  </main>
</template>