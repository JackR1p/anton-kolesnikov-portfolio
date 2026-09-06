<script setup lang="ts">
import { projects } from '../data/projects'

import ProjectCard from '../components/projects/ProjectCard.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'
</script>

<template>
  <section class="section page">
    <div class="container">
      <SectionHeading
        eyebrow="My Work"
        title="Projects"
        description="Some of the applications and technical projects I've built."
      />

      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>