import { defineStore } from 'pinia'
import { ref } from 'vue'

import { i18n } from '../i18n'

export type Language = 'en' | 'de'

export const useLanguageStore = defineStore('language', () => {
  const language = ref<Language>('en')

  function applyLanguage() {
    i18n.global.locale.value = language.value

    document.documentElement.lang = language.value
  }

  function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage === 'en' || savedLanguage === 'de') {
      language.value = savedLanguage
    }

    applyLanguage()
  }

  function setLanguage(newLanguage: Language) {
    language.value = newLanguage

    localStorage.setItem('language', newLanguage)

    applyLanguage()
  }

  function toggleLanguage() {
    setLanguage(language.value === 'en' ? 'de' : 'en')
  }

  return {
    language,
    initializeLanguage,
    setLanguage,
    toggleLanguage,
  }
})
