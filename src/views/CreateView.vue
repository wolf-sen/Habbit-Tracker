<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="mx-4 mt-16">
    <div class="flex flex-row justify-between">
      <h1 class="content-center font-soft text-2xl font-medium">Create</h1>
      <RouterLink
        to="/"
        class="rounded-full bg-surface p-2 hover:bg-surface-300 dark:bg-surface dark:hover:bg-surface-600"
      >
        <XMarkIcon class="size-6 stroke-[3px] text-surface-contrast" />
      </RouterLink>
    </div>
    <div class="mt-40 flex flex-col gap-4">
      <RouterLink
        to="/create/habit"
        class="h-16 w-full content-center rounded-card bg-surface-300 pl-4 font-bold hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600"
        >Create a new Habit</RouterLink
      >
      <RouterLink
        to="/create/routine"
        class="h-16 w-full content-center rounded-card bg-surface-300 pl-4 font-bold hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600"
        >Create a new Routine</RouterLink
      >
    </div>
  </div>
</template>

<style></style>
