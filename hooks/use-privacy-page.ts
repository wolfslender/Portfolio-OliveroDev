import { useTranslation } from "react-i18next"
import { useMemo } from "react"

export function usePrivacyPage() {
  const { t } = useTranslation()
  return useMemo(() => {
    const data = t('privacyPage', { returnObjects: true }) as any
    return {
      title: data.title || "Privacy Policy",
      description: data.description || "How I handle your data and privacy.",
      lastUpdated: data.lastUpdated || "Last Updated:",
      sections: data.sections || {}
    }
  }, [t])
}
