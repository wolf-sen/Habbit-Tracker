<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="mx-4 mt-16">
    <div class="flex flex-col justify-between">
      <h1 class="content-center font-soft text-3xl font-bold">Welcome!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="mt-40 flex flex-col gap-4">
      <RouterLink
        to="/create/habit"
        class="h-16 w-full content-center rounded-card bg-surface-300 pl-4 font-bold hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600"
        >Create the first Habit</RouterLink
      >
      <RouterLink
        to="/"
        class="h-16 w-full content-center rounded-card bg-surface-300 pl-4 font-bold hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600"
        >Go to Homepage</RouterLink
      >
    </div>
  </div>
</template>

<style></style>
