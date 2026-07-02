import { useTranslation } from "react-i18next"
import { useMemo } from "react"

export function useFooter() {
  const { t } = useTranslation()
  return useMemo(() => ({
    description: t('footer.description', "Full Stack Developer crafting beautiful digital experiences with modern technologies."),
    quickLinks: t('footer.quickLinks', "Quick Links"),
    services: t('footer.services', "Services"),
    builtWith: t('footer.builtWith', "Built with Next.js & Tailwind CSS."),
    privacy: t('footer.privacy', "Privacy Policy"),
    terms: t('footer.terms', "Terms of Service"),
    disclaimer: t('footer.disclaimer', "All trademarks, logos, and brand names are property of their respective owners. Used for portfolio purposes only.")
  }), [t])
}
