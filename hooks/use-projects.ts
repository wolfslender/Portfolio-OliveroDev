import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { projects } from "@/lib/data"

export function useProjects() {
  const { t } = useTranslation()
  return useMemo(() => {
    const projectsData = t('projects', { returnObjects: true, defaultValue: [] }) as Array<{
      slug: string
      description: string
    }>
    const translationsBySlug = new Map(projectsData.map((project) => [project.slug, project]))

    return projects.map((project) => ({
      ...project,
      description: translationsBySlug.get(project.slug)?.description || project.description
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
