import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { softSkills, experience, education } from "@/lib/data"

export function useAbout() {
  const { t } = useTranslation()
  return useMemo(() => ({
    title: t('about.title', "About Me"),
    description: t('about.description', "Passionate developer with 10+ years of experience building modern web applications. I love turning complex problems into simple, beautiful solutions."),
    experienceTitle: t('about.experience', "Experience"),
    educationTitle: t('about.education', "Education"),
    softSkillsTitle: t('about.softSkills', "Soft Skills")
  }), [t])
}

export function useAboutPage() {
  const { t } = useTranslation()
  return useMemo(() => ({
    aboutLabel: t('aboutPage.aboutLabel', "About"),
    heroTitle: t('aboutPage.heroTitle', "Building websites and tools"),
    heroHighlight: t('aboutPage.heroHighlight', "that actually work"),
    heroDescription: t('aboutPage.heroDescription', "10+ years building for government, enterprise, and global platforms. I focus on speed, security, and making sure the site does what it's supposed to do — bring in results."),
    heroDescription2: t('aboutPage.heroDescription2', "No project managers, no junior devs, no handoffs. From discovery to deployment, I handle your project end-to-end. Government portals, global EdTech platforms, healthcare systems — I've shipped across industries and I know what works."),
    workedTitle: t('aboutPage.workedTitle', "Where"),
    workedHighlight: t('aboutPage.workedHighlight', "I've worked")
  }), [t])
}

export function useExperience() {
  const { t } = useTranslation()
  return useMemo(() => {
    const experienceData = t('experience', { returnObjects: true, defaultValue: experience }) as typeof experience
    return experience.map((item, index) => ({
      ...item,
      description: experienceData[index]?.description || item.description
    }))
  }, [t])
}

export function useEducation() {
  const { t } = useTranslation()
  return useMemo(() => {
    const educationData = t('education', { returnObjects: true, defaultValue: education }) as typeof education
    return education.map((item, index) => ({
      ...item,
      description: educationData[index]?.description || item.description
    }))
  }, [t])
}

export function useSoftSkills() {
  return softSkills
}
