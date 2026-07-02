import { useTranslation } from "react-i18next"
import { useMemo } from "react"

export function useServicesPage() {
  const { t } = useTranslation()
  return useMemo(() => ({
    hero: {
      title: t('servicesPage.hero.title', "Professional Services"),
      description: t('servicesPage.hero.description', "Expert solutions tailored to your business needs. From rapid MVP development to enterprise-grade architecture, I deliver scalable and secure digital products.")
    },
    methodology: {
      title: t('servicesPage.methodology.title', "How I Work"),
      description: t('servicesPage.methodology.description', "My engineering approach is built on three pillars: performance, security, and scalability."),
      pillars: {
        cleanArch: {
          title: t('servicesPage.methodology.pillars.cleanArch.title', "Clean Architecture"),
          description: t('servicesPage.methodology.pillars.cleanArch.description', "Writing maintainable, self-documenting code that scales with your business needs and reduces technical debt.")
        },
        performance: {
          title: t('servicesPage.methodology.pillars.performance.title', "Performance First"),
          description: t('servicesPage.methodology.pillars.performance.description', "Optimizing for Core Web Vitals and user experience. Fast load times equal better conversion rates.")
        },
        security: {
          title: t('servicesPage.methodology.pillars.security.title', "Security by Design"),
          description: t('servicesPage.methodology.pillars.security.description', "Implementing industry-standard security protocols from day one to protect your data and users.")
        }
      }
    },
    cta: {
      title: t('servicesPage.cta.title', "Ready to transform your vision?"),
      description: t('servicesPage.cta.description', "Let's discuss your project requirements and build a strategy that works for your specific needs. No commitment required."),
      button: t('servicesPage.cta.button', "Start Project")
    }
  }), [t])
}
