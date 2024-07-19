<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { BeakerIcon } from '@heroicons/vue/24/solid'
import navigationBar from '@/components/navigationBar.vue'
import Slider from 'primevue/slider'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const router = useRouter()

import Cookies from 'js-cookie'
const setCookie = () => {
  Cookies.set('name', value.value, { expires: 1, sameSite: 'Strict' })
  console.log('Cookie set')
}
const removeLogin = () => {
  console.log(Cookies.get('user'))
  Cookies.remove('user')
  console.log('Logged Out')
  userStore.clearUserData()
  router.push({ name: 'login' })
}

const value = ref(0) // initial value for the slider
</script>

<template>
  <navigationBar />
  <div class="px-4 py-20">
    <h1>Current Theme: {{ userStore.theme }}</h1>
    <Slider v-model="value" class="m-3 w-5" />
    <button
      class="m-3 rounded-full bg-primary px-3 py-1 hover:bg-primary-hover dark:bg-indigo-600"
      @click="userStore.toggleTheme()"
    >
      Change Theme
    </button>
    <button
      class="rounded-full px-3 py-1 hover:bg-red-400 hover:text-surface-900"
      @click="removeLogin"
    >
      LogOut
    </button>
    <div 
          v-for="(habit, index) in habits"
          :key="habit.id"
          class="h-24 w-full rounded-card bg-surface-400 p-card dark:bg-surface-700"
        >
          {{ habit.name }}
        </div>
  </div>
</template>
