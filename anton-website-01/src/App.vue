<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

import TheNavbar from './components/layout/TheNavbar.vue'
import TheFooter from './components/layout/TheFooter.vue'

import { useThemeStore } from './stores/theme'
import { useLanguageStore } from './stores/language'

const themeStore = useThemeStore()
const languageStore = useLanguageStore()

const { t } = useI18n()

onMounted(() => {
  themeStore.initializeTheme()
  languageStore.initializeLanguage()
})
</script>

<template>
  <div class="app">
    <a href="#main-content" class="skip-link">
      {{ t('accessibility.skipToContent') }}
    </a>

    <TheNavbar />

    <main id="main-content">
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>
