<script setup lang="ts">
import type { Project } from '../../types/Project'

import BaseButton from '../ui/BaseButton.vue'
import ProjectTechnologyList from './ProjectTechnologyList.vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card">
    <img
      v-if="project.image"
      :src="project.image"
      :alt="`${project.title} screenshot`"
      class="project-card__image"
    />

    <div class="project-card__content">
      <h3 class="project-card__title">
        {{ project.title }}
      </h3>

      <p class="project-card__description">
        {{ project.description }}
      </p>

      <ProjectTechnologyList
        :technologies="project.technologies"
      />

      <div class="project-card__actions">
        <BaseButton
          v-if="project.githubUrl"
          :href="project.githubUrl"
          variant="secondary"
        >
          GitHub
        </BaseButton>

        <BaseButton
          v-if="project.liveUrl"
          :href="project.liveUrl"
        >
          Live Demo
        </BaseButton>
      </div>
    </div>
  </article>
</template>