import type { Project } from '../types/Project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Getting Hired',
    description: 'Learning Vue and improving my skills by creating Projects',
    technologies: ['Vue', 'TypeScript', 'Java', 'Spring Boot', 'JWT'],
    githubUrl: 'https://github.com/JackR1p',
    featured: true,
  },

  {
    id: 2,
    title: 'Developer Portfolio',
    description:
      'My personal developer portfolio built with Vue 3, TypeScript and Vite and deployed through Cloudflare.',
    technologies: ['Vue', 'TypeScript', 'Vite', 'Pinia', 'Cloudflare'],
    githubUrl: 'https://github.com/JackR1p/anton-kolesnikov-portfolio',
    liveUrl: 'https://antonkolesnikov.com',
    featured: true,
  },

  {
    id: 3,
    title: 'Exile next step',
    description:
      'Project using Path of Exile API to compare your character against a goal and show you the differences and what you need to reach your goal build',
    technologies: ['React', 'Java', 'Spring Boot'],
    githubUrl: 'https://github.com/JackR1p',
    featured: false,
  },
]
