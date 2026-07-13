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
