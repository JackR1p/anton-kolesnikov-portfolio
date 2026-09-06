import type { Project } from '../types/Project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Polling Application',
    description:
      'A full-stack polling platform featuring authentication, role-based access control and administrative functionality.',
    technologies: [
      'Angular',
      'TypeScript',
      'Java',
      'Spring Boot',
      'JWT',
    ],
    githubUrl: 'https://github.com/YOUR-GITHUB-USERNAME',
    featured: true,
  },

  {
    id: 2,
    title: 'Developer Portfolio',
    description:
      'My personal developer portfolio built with Vue 3, TypeScript and Vite and deployed through Cloudflare.',
    technologies: [
      'Vue',
      'TypeScript',
      'Vite',
      'Pinia',
      'Cloudflare',
    ],
    githubUrl: 'https://github.com/YOUR-GITHUB-USERNAME',
    liveUrl: 'https://antonkolesnikov.com',
    featured: true,
  },

  {
    id: 3,
    title: 'Project Three',
    description:
      'A description of another application demonstrating my software development experience.',
    technologies: [
      'React',
      'Java',
      'Spring Boot',
    ],
    githubUrl: 'https://github.com/YOUR-GITHUB-USERNAME',
    featured: false,
  },
]