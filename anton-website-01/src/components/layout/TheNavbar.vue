<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { useThemeStore } from '../../stores/theme'
import { useLanguageStore } from '../../stores/language'

const menuOpen = ref(false)

const themeStore = useThemeStore()
const languageStore = useLanguageStore()

const { t } = useI18n()

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
      <!-- Logo / Home -->
      <RouterLink
        to="/"
        class="navbar__logo"
        aria-label="Anton Kolesnikov - Home"
        @click="closeMenu"
      >
        Anton Kolesnikov
      </RouterLink>

      <!-- Navigation -->
      <nav
        id="main-navigation"
        class="navbar__navigation"
        :class="{ 'navbar__navigation--open': menuOpen }"
        :aria-label="languageStore.language === 'en' ? 'Main navigation' : 'Hauptnavigation'"
      >
        <RouterLink to="/" @click="closeMenu">
          {{ t('navigation.home') }}
        </RouterLink>

        <RouterLink to="/about" @click="closeMenu">
          {{ t('navigation.about') }}
        </RouterLink>

        <RouterLink to="/projects" @click="closeMenu">
          {{ t('navigation.projects') }}
        </RouterLink>

        <RouterLink to="/contact" @click="closeMenu">
          {{ t('navigation.contact') }}
        </RouterLink>
      </nav>

      <!-- Navbar controls -->
      <div class="navbar__controls">
        <!-- Language switch -->
        <button
          type="button"
          class="language-switch"
          :aria-label="
            languageStore.language === 'en'
              ? 'Switch language to German'
              : 'Sprache auf Englisch wechseln'
          "
          @click="languageStore.toggleLanguage"
        >
          <span
            class="language-switch__option"
            :class="{
              'language-switch__option--active': languageStore.language === 'en',
            }"
          >
            EN
          </span>

          <span
            class="language-switch__option"
            :class="{
              'language-switch__option--active': languageStore.language === 'de',
            }"
          >
            DE
          </span>
        </button>

        <!-- Theme switch -->
        <button
          class="navbar__theme-button"
          type="button"
          :aria-label="
            themeStore.theme === 'dark'
              ? languageStore.language === 'en'
                ? 'Switch to light mode'
                : 'Zum hellen Modus wechseln'
              : languageStore.language === 'en'
                ? 'Switch to dark mode'
                : 'Zum dunklen Modus wechseln'
          "
          @click="themeStore.toggleTheme"
        >
          <span aria-hidden="true">
            {{ themeStore.theme === 'dark' ? '☀️' : '🌙' }}
          </span>
        </button>

        <!-- Mobile menu -->
        <button
          class="navbar__menu-button"
          type="button"
          aria-controls="main-navigation"
          :aria-expanded="menuOpen"
          :aria-label="
            languageStore.language === 'en'
              ? 'Toggle navigation'
              : 'Navigation öffnen oder schließen'
          "
          @click="toggleMenu"
        >
          ☰
        </button>
      </div>
    </div>
  </header>
</template>
