import { useTranslation } from "react-i18next"
import { useMemo } from "react"

export function useWorkPage() {
  const { t } = useTranslation()
  return useMemo(() => ({
    title: t('workPage.title', "Selected Work"),
    description: t('workPage.description', "A showcase of digital products engineered for performance, scalability, and user experience."),
    proofBadge: t('workPage.proofBadge', "Proof of Execution"),
    gridTitle: t('workPage.gridTitle', "More Winning Builds"),
    gridDescription: t('workPage.gridDescription', "Projects built to improve credibility, performance, and conversions across high-stakes industries."),
    filters: {
      all: t('workPage.filters.all', "All Work"),
      fullstack: t('workPage.filters.fullstack', "Full Stack"),
      frontend: t('workPage.filters.frontend', "Frontend")
    },
    cta: {
      title: t('workPage.cta.title', "Have a vision?"),
      highlight: t('workPage.cta.highlight', "Let's engineer it."),
      description: t('workPage.cta.description', "From technical architecture to pixel-perfect implementation, I help companies build software that matters."),
      button: t('workPage.cta.button', "Start a Project")
    }
  }), [t])
}
