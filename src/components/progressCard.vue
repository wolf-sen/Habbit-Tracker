<script setup>
import { ref, computed } from 'vue'
import { useHabitsStore } from '@/stores/habits'

const habitsStore = useHabitsStore()
const progress = computed(() => {
  const progressValue = habitsStore.habitProgress();
  return isNaN(progressValue) ? 0 : progressValue;
});
</script>

<template>
  <section class="flex w-full flex-col gap-2 rounded-card bg-primary p-card">
    <div class="flex flex-row items-end gap-2">
      <h1 class="font-soft text-2xl font-bold">{{ progress }}%</h1>
      <p v-if="progress >= 100">Amazing! Everyting is Done.</p>
      <p v-if="progress < 100 && progress >= 50">You're on a Run! Keep it up!</p>
      <p v-if="progress < 50 && progress > 0">You're Doing Great!</p>
      <p v-if="progress <= 0">Its never to late to start!</p>
    </div>
    <div class="h-3 w-full rounded-full bg-neutral-50 dark:bg-neutral-900">
      <div
        class="h-full rounded-full bg-neutral-950 dark:bg-indigo-100"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
  </section>
</template>

<style scoped></style>
