<script setup>
import { RouterView } from 'vue-router'
import { useUserStore } from './stores/user'
import { useHabitsStore } from './stores/habits'
import Cookies from 'js-cookie'
import { onMounted } from 'vue'

const habitsStore = useHabitsStore()
const userStore = useUserStore()

onMounted(async () => {
  if(Cookies.get('user')) {
    await userStore.fetchUserData()
    await habitsStore.fetchUserHabits()
    await habitsStore.fetchUserCompletions()
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
