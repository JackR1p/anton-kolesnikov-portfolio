import type { Project } from '../types/Project'

export const projects: Project[] = [
  {
    id: 1,
    titleKey: 'projectItems.gettingHired.title',
    descriptionKey: 'projectItems.gettingHired.description',
    technologies: ['Vue', 'TypeScript', 'Java', 'Spring Boot', 'JWT'],
    githubUrl: 'https://github.com/JackR1p',
    featured: true,
  },

  {
    id: 2,
    titleKey: 'projectItems.portfolio.title',
    descriptionKey: 'projectItems.portfolio.description',
    technologies: ['Vue', 'TypeScript', 'Vite', 'Pinia', 'Cloudflare'],
    githubUrl: 'https://github.com/JackR1p/anton-kolesnikov-portfolio',
    liveUrl: 'https://antonkolesnikov.com',
    featured: true,
  },

  {
    id: 3,
    titleKey: 'projectItems.exileNextStep.title',
    descriptionKey: 'projectItems.exileNextStep.description',
    technologies: ['React', 'Java', 'Spring Boot'],
    githubUrl: 'https://github.com/JackR1p',
    featured: false,
  },
]
