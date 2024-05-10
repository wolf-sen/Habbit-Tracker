<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="fixed bottom-6 left-6 right-6">
        <div class="grid grid-cols-4 gap-1 bg-gray-300 rounded-full py-1 px-1 text-center">
          <RouterLink class="transition-all align-middle p-1 hover:bg-gray-400 rounded-full" exact-active-class="bg-gray-400 text-purple-900" to="/">Home</RouterLink>
          <RouterLink class="transition-all align-middle p-1 hover:bg-gray-400 rounded-full" exact-active-class="bg-gray-400 text-purple-900" to="/stats">Statistics</RouterLink>
          <RouterLink class="transition-all align-middle p-1 hover:bg-gray-400 rounded-full" exact-active-class="bg-gray-400 text-purple-900" to="/calendar">Calendar</RouterLink>
          <RouterLink class="transition-all align-middle p-1 hover:bg-gray-400 rounded-full" exact-active-class="bg-gray-400 text-purple-900" to="/profile">Profile</RouterLink>
        </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
