<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>
