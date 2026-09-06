<script setup lang="ts">
import BaseButton from '../components/ui/BaseButton.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'

const githubUrl = 'https://github.com/JackR1p'
const linkedinUrl = 'https://www.linkedin.com/in/anton-kolesnikov-294a6316b/'
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