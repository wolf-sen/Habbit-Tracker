<script setup>
import greetingTitle from '../components/greetingTitle.vue'
import habitGrid from '/src/components/habitGrid.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <main>
    <div class="grid grid-cols-2 mt-10 mx-6">
      <greetingTitle />
      <button type="button" class="bg-indigo-900 p-1 rounded-full place-self-end">
        <PlusIcon class="size-8 text-neutral-50 [&>path]:stroke-[3]" />
      </button>
    </div>
    <section class="mx-6 mt-10">
      <span class="font-bold text-gray-500 text-lg">For Today</span>
      <habitGrid />
    </section>
  </main>
</template>
