import { defineStore } from 'pinia'
import { ref } from 'vue'

type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>('dark')

  function applyTheme() {
    document.documentElement.dataset.theme = theme.value
  }

  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      theme.value = savedTheme
    }

    applyTheme()
  }

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'

    localStorage.setItem('theme', theme.value)

    applyTheme()
  }

  return {
    theme,
    initializeTheme,
    toggleTheme,
  }
})