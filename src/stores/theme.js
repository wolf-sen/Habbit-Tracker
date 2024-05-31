import { ref } from 'vue'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref('light')
  function toggleTheme() {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
    Cookies.set('theme', currentTheme.value)
  }

  return { currentTheme, toggleTheme }
})
