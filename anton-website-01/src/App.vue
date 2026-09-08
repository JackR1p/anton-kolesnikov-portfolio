<script setup lang="ts">
import { onMounted } from 'vue'

import TheNavbar from './components/layout/TheNavbar.vue'
import TheFooter from './components/layout/TheFooter.vue'

import { useThemeStore } from './stores/theme'
import { useLanguageStore } from './stores/language'

const themeStore = useThemeStore()
const languageStore = useLanguageStore()

onMounted(() => {
  themeStore.initializeTheme()
  languageStore.initializeLanguage()
})
</script>

<template>
  <div class="app">
    <TheNavbar />

    <main>
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>
