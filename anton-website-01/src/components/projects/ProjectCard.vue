<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import type { Project } from '../../types/Project'

import BaseButton from '../ui/BaseButton.vue'
import ProjectTechnologyList from './ProjectTechnologyList.vue'

defineProps<{
  project: Project
}>()

const { t } = useI18n()
</script>

<template>
  <article class="project-card">
    <img
      v-if="project.image"
      :src="project.image"
      :alt="t(project.titleKey)"
      class="project-card__image"
    />

    <div class="project-card__content">
      <h3 class="project-card__title">
        {{ t(project.titleKey) }}
      </h3>

      <p class="project-card__description">
        {{ t(project.descriptionKey) }}
      </p>

      <ProjectTechnologyList :technologies="project.technologies" />

      <div class="project-card__actions">
        <BaseButton v-if="project.githubUrl" :href="project.githubUrl" variant="secondary">
          {{ t('projects.sourceCode') }}
        </BaseButton>

        <BaseButton v-if="project.liveUrl" :href="project.liveUrl">
          {{ t('projects.liveDemo') }}
        </BaseButton>
      </div>
    </div>
  </article>
</template>
