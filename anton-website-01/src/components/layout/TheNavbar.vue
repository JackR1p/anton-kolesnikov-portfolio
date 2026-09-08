<script setup lang="ts">
import { ref } from 'vue'

import { useThemeStore } from '../../stores/theme'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '../../stores/language'

const menuOpen = ref(false)

const themeStore = useThemeStore()
const { t } = useI18n()
const languageStore = useLanguageStore()

function closeMenu() {
  menuOpen.value = false
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="navbar">
    <div class="navbar__inner container">
      <RouterLink to="/" class="navbar__logo" @click="closeMenu"> Anton Kolesnikov </RouterLink>

      <button
        class="navbar__menu-button"
        type="button"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        ☰
      </button>

      <nav class="navbar__navigation" :class="{ 'navbar__navigation--open': menuOpen }">
        <RouterLink to="/">
          {{ t('navigation.home') }}
        </RouterLink>

        <RouterLink to="/about">
          {{ t('navigation.about') }}
        </RouterLink>

        <RouterLink to="/projects">
          {{ t('navigation.projects') }}
        </RouterLink>

        <RouterLink to="/contact">
          {{ t('navigation.contact') }}
        </RouterLink>

        <button
          class="navbar__theme-button"
          type="button"
          aria-label="Toggle color theme"
          @click="themeStore.toggleTheme"
        >
          {{ themeStore.theme === 'dark' ? '☀️' : '🌙' }}
        </button>
        <button type="button" class="navbar__language-button" @click="languageStore.toggleLanguage">
          {{ languageStore.language === 'en' ? 'DE' : 'EN' }}
        </button>
      </nav>
    </div>
  </header>
</template>
