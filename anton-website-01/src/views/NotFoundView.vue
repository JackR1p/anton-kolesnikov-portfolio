<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import BaseButton from '../components/ui/BaseButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="section page not-found">
    <div class="container not-found__content">
      <p class="not-found__code">404</p>

      <h1 class="not-found__title">
        {{ t('notFound.title') }}
      </h1>

      <p class="not-found__description">
        {{ t('notFound.description') }}
      </p>

      <BaseButton to="/">
        {{ t('notFound.backHome') }}
      </BaseButton>
    </div>
  </section>
</template>
