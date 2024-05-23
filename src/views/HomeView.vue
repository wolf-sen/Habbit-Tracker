<script setup>
import greetingTitle from '../components/greetingTitle.vue'
import habitGrid from '/src/components/habitGrid.vue'
</script>

<template>
  <main>
    <div class="grid grid-cols-2 mt-10 mx-6">
      <greetingTitle />
      <button type="button" class="bg-gray-800 p-4 rounded-full place-self-end">
        <div class="w-3 h-3 bg-gray-100"></div>
      </button>
    </div>
    <section class="mx-6 mt-10">
      <span class="font-bold text-gray-500 text-lg">For Today</span>
      <habitGrid />
    </section>
  </main>
</template>
