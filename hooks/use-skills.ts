import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { skills } from "@/lib/data"

export function useSkills() {
  const { t } = useTranslation()
  return useMemo(() => {
    return skills.map(category => {
      let title = category.title
      if (category.title === "Frontend") title = t('skills.categories.frontend', "Frontend")
      else if (category.title === "CMS & Platforms") title = t('skills.categories.cms', "CMS & Platforms")
      else if (category.title === "Performance") title = t('skills.categories.performance', "Performance")
      else if (category.title === "Tools & DevOps") title = t('skills.categories.tools', "Tools & DevOps")
      else if (category.title === "Design") title = t('skills.categories.design', "Design")
      else if (category.title === "Security") title = t('skills.categories.security', "Security")
      
      return { ...category, title }
    })
  }, [t])
}

export function useSkillsSection() {
  const { t } = useTranslation()
  return useMemo(() => ({
    title: t('skills.title', "Skills & Expertise"),
    description: t('skills.description', "A comprehensive toolkit for building modern, scalable applications")
  }), [t])
}
