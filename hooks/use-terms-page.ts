import { useTranslation } from "react-i18next"
import { useMemo } from "react"

export function useTermsPage() {
  const { t } = useTranslation()
  return useMemo(() => {
    const data = t('termsPage', { returnObjects: true }) as any
    return {
      title: data.title || "Terms of Service",
      description: data.description || "Rules and regulations for using this website.",
      lastUpdated: data.lastUpdated || "Last Updated:",
      sections: data.sections || {}
    }
  }, [t])
}
