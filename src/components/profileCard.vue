<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';
import { useHabitsStore } from '@/stores/habits';
import { useRoutinesStore } from '@/stores/routines';
import pictureSelector from '@/components/pictureSelector.vue';
const userStore = useUserStore()
const habitsStore = useHabitsStore()
const routinesStore = useRoutinesStore()

const username = computed(() => {
  return userStore.name + ' ' + userStore.lastname;
})

const memberSince = computed(() => {
  const creationDate = new Date(userStore.creationDate)
  const options = { year: 'numeric', month: 'long' }
  return `Member since: ${creationDate.toLocaleDateString('en-US', options)}`
})

const habitCount = computed(() => {
  return habitsStore.habits ? habitsStore.habits.length : 0
})

const routineCount = computed(() => {
  return routinesStore.routines ? routinesStore.routines.length : 0
})

const profilePicture = computed(() => {
  return userStore.profilePicture;
})

</script>

<template>
  <div class="mt-4 w-full rounded-lg bg-green-500 p-4">
    <div class="mb-4 flex items-center">
      <pictureSelector :variant="profilePicture"/>
      <div class="ml-5">
        <h2 class="mb-1 text-4xl font-bold">{{ username }}</h2>
        <p class="mb-2 text-sm">{{ memberSince }}</p>
      </div>
    </div>

    <div class="flex justify-between">
      <div class="text-center">
        <h3 class="text-2xl font-bold">{{ userStore.streak }}</h3>
        <p class="text-sm">Current streak</p>
      </div>
      <div class="text-center">
        <h3 class="text-2xl font-bold">{{ habitCount }}</h3>
        <p class="text-sm">Habits</p>
      </div>
      <div class="text-center">
        <h3 class="text-2xl font-bold">{{ routineCount }}</h3>
        <p class="text-sm">Routines</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
