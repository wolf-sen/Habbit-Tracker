<script setup>
import { RouterView } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { useUserStore } from './stores/user'
import Cookies from 'js-cookie'
import { onMounted } from 'vue'

const userStore = useUserStore()
const themeStore = useThemeStore()

onMounted(() => {
  userStore.fetchUserData()
  themeStore.currentTheme = Cookies.get('theme')
})
</script>

<template>
  <div
    :class="themeStore.currentTheme"
    class="h-screen overflow-y-auto bg-surface text-surface-contrast transition-all"
  >
    <div class="flex justify-center">
      <div class="w-full max-w-screen-md">
        <router-view />
      </div>
    </div>
  </div>
</template>
