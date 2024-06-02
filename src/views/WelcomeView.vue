<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="mx-4 mt-16">
    <div class="flex flex-col justify-between">
      <h1 class="font-soft text-3xl font-bold content-center">
        Welcome!
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="flex flex-col gap-4 mt-40">
      <RouterLink to="/create/habit" class="w-full h-16 bg-surface-300 rounded-card content-center pl-4 font-bold hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600">Create the first Habit</RouterLink>
      <RouterLink to="/" class="w-full h-16 bg-surface-300 rounded-card content-center pl-4 font-bold hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600">Go to Homepage</RouterLink>
    </div>
  </div>
</template>

<style></style>
