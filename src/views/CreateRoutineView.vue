<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="mx-4 mt-16">
    <div class="flex flex-row justify-between">
      <h1 class="content-center font-soft text-2xl font-medium">Create New Routine</h1>
      <RouterLink
        to="/"
        class="rounded-full bg-surface p-2 hover:bg-surface-300 dark:bg-surface dark:hover:bg-surface-600"
      >
        <XMarkIcon class="size-6 stroke-[3px] text-surface-contrast" />
      </RouterLink>
    </div>
  </div>
</template>

<style></style>
