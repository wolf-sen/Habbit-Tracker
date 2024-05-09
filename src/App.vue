<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="fixed bottom-6 left-6 right-6">
        <div class="grid grid-cols-4 bg-slate-300 rounded-full py-2 px-5 text-center">
          <RouterLink class="" to="/">Home</RouterLink>
          <RouterLink to="/stats">Statistics</RouterLink>
          <RouterLink to="/calendar">Calendar</RouterLink>
          <RouterLink to="/profile">Profile</RouterLink>
        </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
