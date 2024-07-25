<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import navigationBar from '@/components/navigationBar.vue'
import Slider from 'primevue/slider'
import { useUserStore } from '@/stores/user'
import { useRoutinesStore } from '@/stores/routines'
import Cookies from 'js-cookie'
import { useHabitsStore } from '@/stores/habits'

const userStore = useUserStore()
const habitsStore = useHabitsStore()
const routinesStore = useRoutinesStore()
const router = useRouter()

const removeLogin = () => {
  console.log(Cookies.get('user'))
  Cookies.remove('user')
  console.log('Logged Out')
  userStore.$reset()
  habitsStore.$reset()
  routinesStore.$reset()
  router.push({ name: 'login' })
}

const value = ref(0) // initial value for the slider
</script>

<template>
  <navigationBar />
  <div class="flex flex-col px-4 py-20">
    <h1>Current Theme: {{ userStore.theme }}</h1>
    <button
      class="m-3 rounded-full bg-primary px-3 py-1 hover:bg-primary-hover dark:bg-green-500 dark:hover:bg-green-700"
      @click="userStore.toggleTheme()"
    >
      Change Theme
    </button>
    <button
      class="m-3 rounded-full px-3 py-1 bg-surface-300 dark:bg-surface-700 hover:bg-red-400 dark:hover:bg-red-400 hover:text-surface-900"
      @click="removeLogin"
    >
      LogOut
    </button>
  </div>
</template>
