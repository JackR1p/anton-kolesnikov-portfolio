<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { projects } from '../../data/projects'

import ProjectCard from '../projects/ProjectCard.vue'
import BaseButton from '../ui/BaseButton.vue'
import SectionHeading from '../ui/SectionHeading.vue'

const { t } = useI18n()

const featuredProjects = computed(() => projects.filter((project) => project.featured))
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Portfolio"
        :title="t('projects.featuredTitle')"
        :description="t('projects.featuredDescription')"
      />

      <div class="projects-grid">
        <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
      </div>

      <div class="section__actions">
        <BaseButton to="/projects" variant="secondary">
          {{ t('projects.viewAll') }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>
