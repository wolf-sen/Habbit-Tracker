<script setup>
import { RouterView } from 'vue-router'
import { useUserStore } from './stores/user'
import { useHabitsStore } from './stores/habits'
import { useRoutinesStore } from './stores/routines'
import Cookies from 'js-cookie'
import { onMounted } from 'vue'

const habitsStore = useHabitsStore()
const userStore = useUserStore()
const routinesStore = useRoutinesStore()

onMounted(async () => {
  if(Cookies.get('user')) {
    await userStore.fetchUserData()
    await userStore.fetchUserMood()
    await habitsStore.fetchUserHabits()
    await habitsStore.fetchUserCompletions()
    await routinesStore.fetchRoutineData()
  }
})
</script>

<template>
  <div
    :class="userStore.theme"
    class="h-screen overflow-y-auto bg-surface text-surface-contrast transition-all"
  >
    <div class="flex justify-center">
      <div class="w-full max-w-screen-md">
        <router-view />
      </div>
    </div>
  </div>
</template>
