<script setup>
import { RouterView } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import Cookies from 'js-cookie';
import { onMounted } from 'vue';
const themeStore = useThemeStore()
onMounted(() => {
  themeStore.currentTheme = Cookies.get('theme')
})
</script>

<template>
  <div
    :class="themeStore.currentTheme"
    class="h-screen overflow-y-auto bg-surface text-surface-contrast transition-all"
  >
  <div class="flex justify-center">
    <div class="max-w-screen-md w-full">
      <router-view />
    </div>
  </div>
  </div>
</template>
