<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue'
</script>

<template>
  <section class="hero">
    <div class="container hero__content">
      <p class="hero__eyebrow">
        Full Stack Software Developer
      </p>

      <h1 class="hero__title">
        Hi, I'm
        <span>Anton Kolesnikov.</span>
      </h1>

      <p class="hero__description">
        I build modern web applications with a focus on
        maintainable frontend and full-stack development.
      </p>

      <div class="hero__actions">
        <BaseButton to="/projects">
          View Projects
        </BaseButton>

        <BaseButton
          to="/contact"
          variant="secondary"
        >
          Contact Me
        </BaseButton>
      </div>
    </div>
  </section>
</template>