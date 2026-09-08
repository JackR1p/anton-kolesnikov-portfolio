<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import BaseButton from '../ui/BaseButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="container hero__content">
      <p class="hero__eyebrow">
        {{ t('hero.role') }}
      </p>

      <h1 class="hero__title">
        {{ t('hero.greeting') }}
      </h1>

      <p class="hero__description">
        {{ t('hero.description') }}
      </p>

      <div class="hero__actions">
        <BaseButton to="/projects">
          {{ t('hero.projectsButton') }}
        </BaseButton>

        <BaseButton to="/contact" variant="secondary">
          {{ t('hero.contactButton') }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>
