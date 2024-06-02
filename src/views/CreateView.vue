<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="mx-4 mt-16">
    <div class="flex flex-row justify-between">
      <h1 class="font-soft text-2xl font-medium content-center">
        Create
      </h1>
      <RouterLink to="/" class="rounded-full bg-surface p-2 hover:bg-surface-300 dark:bg-surface dark:hover:bg-surface-600">
        <XMarkIcon class="size-6 text-surface-contrast stroke-[3px]" />
      </RouterLink>
    </div>
    <div class="flex flex-col gap-4 mt-40">
      <RouterLink to="/create/habit" class="w-full h-16 bg-surface-300 rounded-card content-center pl-4 font-bold hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600">Create a new Habit</RouterLink>
      <RouterLink to="/create/routine" class="w-full h-16 bg-surface-300 rounded-card content-center pl-4 font-bold hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600">Create a new Routine</RouterLink>
    </div>
  </div>
</template>

<style></style>
