<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { projects } from '../data/projects'

import ProjectCard from '../components/projects/ProjectCard.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'

const { t } = useI18n()
</script>

<template>
  <section class="section page">
    <div class="container">
      <SectionHeading
        :eyebrow="t('projects.eyebrow')"
        :title="t('projects.title')"
        :description="t('projects.description')"
      />

      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>
