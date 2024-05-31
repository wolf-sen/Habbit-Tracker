<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { BeakerIcon } from '@heroicons/vue/24/solid'
import navigationBar from '@/components/navigationBar.vue'
import Slider from 'primevue/slider'

import { useThemeStore } from '@/stores/theme'
const themeStore = useThemeStore()
const router = useRouter();

import Cookies from 'js-cookie'
const CookieGet = ref(null)
const setCookie = () => {
  Cookies.set('name', value.value, { expires: 1, sameSite: 'Strict' })
  console.log('Cookie set')
}
const getCookie = () => {
  CookieGet.value = Cookies.get('name')
  console.log('CookieGetter.value: ' + CookieGet.value)
}
const removeCookie = () => {
  CookieGet.value = null
  Cookies.remove('name')
  console.log('CookieGetter.value: ' + CookieGet.value)
}
const removeLogin = () => {
  console.log(Cookies.get('user'))
  Cookies.remove('user')
  console.log('Logged Out')
  router.push({ name: 'login' });
}

const value = ref(0) // initial value for the slider
</script>

<template>
  <navigationBar />
  <div class="px-4 py-20">
    <h1>Current Theme: {{ themeStore.currentTheme }}</h1>
    <h1>Current Value: {{ value }}</h1>
    <Slider v-model="value" class="m-3 w-5" />
    <button
      class="m-3 rounded-full bg-primary px-3 py-1 hover:bg-primary-hover dark:bg-indigo-600"
      @click="themeStore.toggleTheme"
    >
      Change Theme
    </button>
    <BeakerIcon class="m-3 size-6 text-primary hover:text-primary-hover" />

    <div class="flex flex-col rounded-md bg-surface-300 p-2 dark:bg-surface-700">
      <button class="px-3 py-1 rounded-full hover:bg-indigo-500" @click="setCookie">Set Cookie</button>
      <button class="px-3 py-1 rounded-full hover:bg-indigo-500" @click="getCookie">Get Cookie</button>
      <button class="px-3 py-1 rounded-full hover:bg-indigo-500" @click="removeCookie">Remove Cookie</button>
      <button class="px-3 py-1 rounded-full hover:bg-red-400 hover:text-surface-900" @click="removeLogin">LogOut</button>
    </div>
  </div>
</template>
