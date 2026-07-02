export interface Project {
  title: string
  slug: string
  description: string
  image: string
  tags: string[]
  category: "fullstack" | "frontend"
  github: string
  demo: string
  featured: boolean
  size: "small" | "medium" | "large"
  industry?: string
  projectType?: string
  metrics?: ProjectMetrics
  challenge?: string
  solution?: string
  impactStatement?: string
}

export interface ProjectMetrics {
  users?: string
  performance?: string
  impact?: string
}

export interface Service {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  technologies: string[]
  caseStudyTitle: string
  color: string
  bgColor: string
  bestFor: string
  timeline: string
  outcome: string
  deliverables: string[]
}

export interface Skill {
  icon: React.ComponentType<{ className?: string }>
  title: string
  color: string
  bgColor: string
  skills: string[]
}

export interface Experience {
  company: string
  position: string
  period: string
  location: string
  description: string
  technologies: string[]
  achievements: string[]
}

export interface Education {
  school: string
  degree: string
  period: string
  location: string
  description: string
}

export interface Certification {
  title: string
  issuer: string
  date: string
  credentialId: string
  credentialUrl: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
}

export interface Stat {
  icon: React.ComponentType<{ className?: string }>
  value: number
  label: string
  suffix: string
  prefix: string
}

export interface Plugin {
  title: string
  tagline: string
  description: string
  features: string[]
  proFeatures: string[]
  price: string
  plans: PluginPlan[]
  url: string
  freemiusUrl: string
  icon: string
  color: string
  bgColor: string
  stats: PluginStat[]
}

export interface PluginPlan {
  name: string
  price: string
  period: string
  checkoutUrl: string
}

export interface PluginStat {
  label: string
  value: string
  icon: string
}

export interface BreadcrumbItem {
  name: string
  path: string
}
