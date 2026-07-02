import { useTranslation } from "react-i18next"
import { useMemo } from "react"

export function useCTASection() {
  const { t } = useTranslation()
  return useMemo(() => ({
    badge: t('cta.badge', "Available for new opportunities"),
    titlePrefix: t('cta.titlePrefix', "Ready to launch your"),
    titleHighlight: t('cta.titleHighlight', "next big idea?"),
    description: t('cta.description', "Let's collaborate to build a digital experience that not only looks amazing but also drives real results for your business."),
    primaryButton: t('cta.primaryButton', "Start a Project"),
    secondaryButton: t('cta.secondaryButton', "View Portfolio")
  }), [t])
}
