<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import BaseButton from '../components/ui/BaseButton.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'

const { t } = useI18n()

const githubUrl = 'https://github.com/JackR1p'
const linkedinUrl = 'YOUR_LINKEDIN_URL'
</script>

<template>
  <section class="section page">
    <div class="container contact">
      <SectionHeading
        :eyebrow="t('contact.eyebrow')"
        :title="t('contact.title')"
        :description="t('contact.description')"
      />

      <div class="contact__actions">
        <BaseButton :href="linkedinUrl">
          {{ t('contact.linkedin') }}
        </BaseButton>

        <BaseButton :href="githubUrl" variant="secondary">
          {{ t('contact.github') }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>
