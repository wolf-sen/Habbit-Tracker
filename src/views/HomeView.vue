<script setup>
import greetingTitle from '/src/components/greetingTitle.vue'
</script>

<template>
  <main>
    <greetingTitle />
    <section class="mx-6 mt-10">
      <span class="font-bold text-gray-500 text-lg">For Today</span>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div class="bg-gray-300 rounded-lg  min-h-24 p-2 font-semibold text-xl text-gray-800">Habit 01</div>
        <div class="bg-gray-300 rounded-lg  min-h-24 p-2 font-semibold text-xl text-gray-800">Habit 02</div>
        <div class="bg-gray-300 rounded-lg  min-h-24 p-2 font-semibold text-xl text-gray-800">Habit 03</div>
        <div class="bg-gray-300 rounded-lg  min-h-24 p-2 font-semibold text-xl text-gray-800">Habit 04</div>
      </div>
    </section>
  </main>
</template>
