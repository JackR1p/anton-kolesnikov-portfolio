<script setup lang="ts">
import BaseButton from '../components/ui/BaseButton.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'

const githubUrl = 'https://github.com/YOUR-GITHUB-USERNAME'
const linkedinUrl = 'https://linkedin.com/in/YOUR-LINKEDIN'
</script>

<template>
  <section class="section page">
    <div class="container contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's get in touch."
        description="I'm open to software development opportunities and interesting projects."
      />

      <div class="contact__actions">
        <BaseButton
          :href="linkedinUrl"
        >
          LinkedIn
        </BaseButton>

        <BaseButton
          :href="githubUrl"
          variant="secondary"
        >
          GitHub
        </BaseButton>
      </div>
    </div>
  </section>
</template>