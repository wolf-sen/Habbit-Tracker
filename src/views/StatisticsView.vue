<script setup>
import NavigationBar from '@/components/navigationBar.vue'
import heatMap from '@/components/heatMap.vue'
import { computed } from 'vue';

const funFact = computed(() => {
  const facts = [
    "Habits can take an average of 66 days to form.",
    "Morning exercise boosts productivity and energy throughout the day.",
    "The Pomodoro Technique improves focus with 25-minute work intervals.",
    "Multitasking reduces productivity by up to 40 percent.",
    "Listening to music can enhance mood and productivity.",
    "Habits can help you stay motivated.",
    "The average person has about 6,200 thoughts per day.",
    "Nature exposure increases focus and reduces stress."
  ];

  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * facts.length);

  // Return the random string from the array
  return facts[randomIndex];
});

</script>

<template>
  <div class="mx-4 mt-16">
    <NavigationBar />
    <div class="flex flex-row justify-between">
      <h1 class="content-center font-soft text-2xl font-medium">Statistics</h1>
    </div>
    <div class="mt-10">
      <div class="mb-4 w-full p-4 rounded-full bg-surface-300 dark:bg-surface-700">
        <p class="text-center font-soft text-lg font-bold">{{ funFact }}</p>
      </div>
      <heatMap />
    </div>
  </div>
</template>

<style></style>
