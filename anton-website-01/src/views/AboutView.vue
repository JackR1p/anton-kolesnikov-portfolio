<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { skills } from '../data/skills'

import SectionHeading from '../components/ui/SectionHeading.vue'

const { t, tm } = useI18n()
</script>

<template>
  <section class="section page">
    <div class="container">
      <SectionHeading :eyebrow="t('about.eyebrow')" :title="t('about.title')" />
      <div class="about">
        <div class="about__description">
          <p v-for="(paragraph, index) in tm('about.paragraphs')" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <div class="skills">
          <section>
            <h2>{{ t('about.frontend') }}</h2>

            <ul class="technology-list">
              <li v-for="skill in skills.frontend" :key="skill" class="technology-list__item">
                {{ skill }}
              </li>
            </ul>
          </section>

          <section>
            <h2>{{ t('about.backend') }}</h2>

            <ul class="technology-list">
              <li v-for="skill in skills.backend" :key="skill" class="technology-list__item">
                {{ skill }}
              </li>
            </ul>
          </section>

          <section>
            <h2>{{ t('about.tools') }}</h2>

            <ul class="technology-list">
              <li v-for="skill in skills.tools" :key="skill" class="technology-list__item">
                {{ skill }}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
