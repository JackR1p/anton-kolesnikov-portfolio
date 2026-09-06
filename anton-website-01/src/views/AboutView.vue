<script setup lang="ts">
import { skills } from '../data/skills'

import SectionHeading from '../components/ui/SectionHeading.vue'
</script>

<template>
  <section class="section page">
    <div class="container">
      <SectionHeading
        eyebrow="About Me"
        title="Full Stack Software Developer"
      />

      <div class="about">
        <div class="about__description">
          <p>
            I'm Anton Kolesnikov, a software developer based in Germany
            with several years of professional experience developing
            modern web applications.
          </p>

          <p>
            My professional experience includes frontend and full-stack
            development with technologies such as Angular, React,
            TypeScript, Java and Spring Boot.
          </p>

          <p>
            I enjoy building maintainable applications, learning new
            technologies and solving technical problems across the
            frontend and backend.
          </p>
        </div>

        <div class="skills">
          <section>
            <h2>Frontend</h2>

            <ul class="technology-list">
              <li
                v-for="skill in skills.frontend"
                :key="skill"
                class="technology-list__item"
              >
                {{ skill }}
              </li>
            </ul>
          </section>

          <section>
            <h2>Backend</h2>

            <ul class="technology-list">
              <li
                v-for="skill in skills.backend"
                :key="skill"
                class="technology-list__item"
              >
                {{ skill }}
              </li>
            </ul>
          </section>

          <section>
            <h2>Tools & Testing</h2>

            <ul class="technology-list">
              <li
                v-for="skill in skills.tools"
                :key="skill"
                class="technology-list__item"
              >
                {{ skill }}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>