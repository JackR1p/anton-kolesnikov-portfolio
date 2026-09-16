export interface Project {
  id: number
  titleKey: string
  descriptionKey: string
  technologies: string[]
  image?: string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}
