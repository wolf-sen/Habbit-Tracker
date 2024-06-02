<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import TestView from '@/views/TestView.vue';
</script>

<template>
  <div class="mx-4 mt-16">
    <div class="flex flex-row justify-between">
      <h1 class="font-soft text-2xl font-medium content-center">
        Settings
      </h1>
      <RouterLink to="/profile" class="rounded-full bg-surface p-2 hover:bg-surface-300 dark:bg-surface dark:hover:bg-surface-600">
        <XMarkIcon class="size-6 text-surface-contrast stroke-[3px]" />
      </RouterLink>
    </div>
  </div>
  <TestView />
</template>

<style></style>
