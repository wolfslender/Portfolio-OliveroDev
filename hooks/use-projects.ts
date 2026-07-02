import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { projects } from "@/lib/data"

export function useProjects() {
  const { t } = useTranslation()
  return useMemo(() => {
    const projectsData = t('projects', { returnObjects: true, defaultValue: projects }) as typeof projects
    return projects.map((project, index) => ({
      ...project,
      description: projectsData[index]?.description || project.description
    }))
  }, [t])
}

export function useFeaturedProjectsSection() {
  const { t } = useTranslation()
  return useMemo(() => ({
    badge: t('featuredProjects.badge', "Selected Work"),
    titlePrefix: t('featuredProjects.titlePrefix', "Featured"),
    titleHighlight: t('featuredProjects.titleHighlight', "Projects"),
    description: t('featuredProjects.description', "A selection of my most recent and significant work, showcasing my expertise in building scalable web applications."),
    viewAll: t('featuredProjects.viewAll', "View All Projects")
  }), [t])
}
