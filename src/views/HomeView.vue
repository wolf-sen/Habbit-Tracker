<script setup>
import greetingTitle from '/src/components/greetingTitle.vue'
import habitGrid from '/src/components/habitGrid.vue'
</script>

<template>
  <main>
    <greetingTitle />
    <section class="mx-6 mt-10">
      <span class="font-bold text-gray-500 text-lg">For Today</span>
      <habitGrid />
    </section>
  </main>
</template>
