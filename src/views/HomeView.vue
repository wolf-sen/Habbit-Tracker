<script setup>
import navigationBar from '@/components/navigationBar.vue'
import greetingTitle from '@/components/greetingTitle.vue'
import progressCard from '@/components/progressCard.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import api from '../composables/api.config'
import { useUserStore } from '../stores/user'
import { onMounted, ref } from 'vue'

const habits = ref([])
const userStore = useUserStore()

const fetchHabits = async () => {
  try {
    const response = await api.get(`/habits?user=${userStore.id}`)
    habits.value = response.data
  } catch (error) {
    console.error('Error fetching habits:', error)
  }
}

onMounted(() => {
  fetchHabits()
})
</script>

<template>
  <div class="mx-4 mt-16 overflow-visible">
    <navigationBar />
    <section class="flex flex-col gap-4 overflow-visible">
      <div class="flex flex-row justify-between">
        <greetingTitle />
        <RouterLink to="/create" class="rounded-full bg-primary p-2 hover:bg-primary-hover">
          <PlusIcon class="size-6 stroke-[3px] text-surface" />
        </RouterLink>
      </div>
      <progressCard progress="50" />
      <p class="mb-[-0.6rem] mt-4 font-bold text-surface-600 dark:text-surface-400">Daily Habits</p>
      <div class="carousel snap-mandatory gap-4 pr-0 overflow-visible">
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
        <div
          v-for="(habit, index) in habits"
          class="h-24 w-full rounded-card bg-surface-400 p-card dark:bg-surface-700"
        >
          {{ habit.name }}
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
</style>
