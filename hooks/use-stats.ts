import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { stats as defaultStats } from "@/lib/data"

export function useStats() {
  const { t } = useTranslation()
  return useMemo(() => {
    const statsData = t('stats', { returnObjects: true, defaultValue: defaultStats }) as typeof defaultStats
    return defaultStats.map((stat, index) => ({
      ...stat,
      label: statsData[index]?.label || stat.label
    }))
  }, [t])
}

export function useTrustedBy() {
  const { t } = useTranslation()
  return useMemo(() => ({
    title: t('trustedBy.title', "Trusted by innovative companies")
  }), [t])
}
