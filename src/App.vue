<script setup>
import { RouterLink, RouterView } from "vue-router";
import navigationBar from './components/navigationBar.vue';
</script>

<template>
  <header>
    <navigationBar />
  </header>

  <div class="flex justify-center">
    <div class="max-w-screen-md w-full">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
