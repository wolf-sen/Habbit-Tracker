<script setup>
import NavigationBar from '@/components/navigationBar.vue'
import { PlusIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="mx-4 mt-16">
    <NavigationBar />
    <div class="flex flex-row justify-between">
      <h1 class="font-soft text-2xl font-medium content-center">
        Routines
      </h1>
      <RouterLink to="/create/routine" class="rounded-full bg-primary p-2 hover:bg-primary-hover">
        <PlusIcon class="size-6 text-surface stroke-[3px]" />
      </RouterLink>
    </div>
  </div>
</template>

<style></style>
