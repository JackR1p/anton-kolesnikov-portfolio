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
    title: 'Project Three',
    description:
      'Placeholder for more projects to come. Check out my Github and LinkedIn for more information about my work and experience.',
    technologies: ['React', 'Java', 'Spring Boot'],
    githubUrl: 'https://github.com/JackR1p',
    featured: false,
  },
]
