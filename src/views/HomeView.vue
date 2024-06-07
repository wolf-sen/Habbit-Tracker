<script setup>
import navigationBar from '@/components/navigationBar.vue'
import greetingTitle from '@/components/greetingTitle.vue'
import progressCard from '@/components/progressCard.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="mx-4 mt-16">
    <navigationBar />
    <section class="flex flex-col gap-4">
      <div class="flex flex-row justify-between">
        <greetingTitle />
        <RouterLink to="/create" class="rounded-full bg-primary p-2 hover:bg-primary-hover">
          <PlusIcon class="size-6 stroke-[3px] text-surface" />
        </RouterLink>
      </div>
      <progressCard progress="50" />
      <p class="mb-[-0.6rem] mt-4 font-bold text-surface-600 dark:text-surface-400">Daily Habits</p>
      <div class="carousel mr-[-1rem] snap-mandatory gap-4 pr-24">
        <div class="carousel-item h-48 w-36 rounded-card bg-surface-400 p-card dark:bg-surface-700">
          Daily Habit 01
        </div>
        <div class="carousel-item h-48 w-36 rounded-card bg-surface-400 p-card dark:bg-surface-700">
          Daily Habit 02
        </div>
        <div class="carousel-item h-48 w-36 rounded-card bg-surface-400 p-card dark:bg-surface-700">
          Daily Habit 03
        </div>
        <div class="carousel-item h-48 w-36 rounded-card bg-surface-400 p-card dark:bg-surface-700">
          Daily Habit 04
        </div>
      </div>
      <p class="mb-[-0.6rem] mt-4 font-bold text-surface-600 dark:text-surface-400">
        Todays Habits
      </p>
      <div class="flex flex-col gap-4">
        <div class="h-24 w-full rounded-card bg-surface-400 p-card dark:bg-surface-700">
          Habit 01
        </div>
        <div class="h-24 w-full rounded-card bg-surface-400 p-card dark:bg-surface-700">
          Habit 02
        </div>
        <div class="h-24 w-full rounded-card bg-surface-400 p-card dark:bg-surface-700">
          Habit 03
        </div>
        <div class="h-24 w-full rounded-card bg-surface-400 p-card dark:bg-surface-700">
          Habit 04
        </div>
        <div class="h-24 w-full rounded-card bg-surface-400 p-card dark:bg-surface-700">
          Habit 05
        </div>
      </div>
      <div class="h-48 w-full"></div>
    </section>
  </div>
</template>

<style>
.carousel {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.carousel::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.carousel-item {
  scroll-snap-align: start;
  flex: 0 0 auto;
}

.carousel-item:first-child {
  margin-left: 1rem;
}
</style>
