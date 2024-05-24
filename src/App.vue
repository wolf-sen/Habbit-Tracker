<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="fixed bottom-6 left-6 right-6">
      <div
        class="grid grid-cols-4 gap-1 rounded-full bg-gray-300 px-1 py-1 text-center"
      >
        <RouterLink
          class="rounded-full p-1 align-middle transition-all hover:bg-gray-400"
          exact-active-class="bg-gray-400 text-purple-900"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="rounded-full p-1 align-middle transition-all hover:bg-gray-400"
          exact-active-class="bg-gray-400 text-purple-900"
          to="/stats"
          >Statistics</RouterLink
        >
        <RouterLink
          class="rounded-full p-1 align-middle transition-all hover:bg-gray-400"
          exact-active-class="bg-gray-400 text-purple-900"
          to="/calendar"
          >Calendar</RouterLink
        >
        <RouterLink
          class="rounded-full p-1 align-middle transition-all hover:bg-gray-400"
          exact-active-class="bg-gray-400 text-purple-900"
          to="/profile"
          >Profile</RouterLink
        >
      </div>
    </nav>
  </header>

  <div class="flex justify-center">
    <div class="max-w-screen-md w-full">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
