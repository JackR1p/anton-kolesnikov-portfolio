<script setup lang="ts">
import { computed } from 'vue'

import { projects } from '../../data/projects'

import ProjectCard from '../projects/ProjectCard.vue'
import BaseButton from '../ui/BaseButton.vue'
import SectionHeading from '../ui/SectionHeading.vue'

const featuredProjects = computed(() =>
  projects.filter((project) => project.featured),
)
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        description="A selection of applications and projects I've worked on."
      />

      <div class="projects-grid">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <div class="section__actions">
        <BaseButton
          to="/projects"
          variant="secondary"
        >
          View All Projects
        </BaseButton>
      </div>
    </div>
  </section>
</template>