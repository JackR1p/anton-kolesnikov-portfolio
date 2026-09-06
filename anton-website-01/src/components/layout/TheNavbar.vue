<script setup lang="ts">
import { ref } from 'vue'

import { useThemeStore } from '../../stores/theme'

const menuOpen = ref(false)

const themeStore = useThemeStore()

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
      <RouterLink
        to="/"
        class="navbar__logo"
        @click="closeMenu"
      >
        Anton Kolesnikov
      </RouterLink>

      <button
        class="navbar__menu-button"
        type="button"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        ☰
      </button>

      <nav
        class="navbar__navigation"
        :class="{ 'navbar__navigation--open': menuOpen }"
      >
        <RouterLink to="/" @click="closeMenu">
          Home
        </RouterLink>

        <RouterLink to="/about" @click="closeMenu">
          About
        </RouterLink>

        <RouterLink to="/projects" @click="closeMenu">
          Projects
        </RouterLink>

        <RouterLink to="/contact" @click="closeMenu">
          Contact
        </RouterLink>

        <button
          class="navbar__theme-button"
          type="button"
          aria-label="Toggle color theme"
          @click="themeStore.toggleTheme"
        >
          {{ themeStore.theme === 'dark' ? '☀️' : '🌙' }}
        </button>
      </nav>
    </div>
  </header>
</template>