import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { services as defaultServices } from "@/lib/data"

export function useServices() {
  const { t } = useTranslation()
  return useMemo(() => {
    const servicesData = t('services', { returnObjects: true, defaultValue: defaultServices }) as typeof defaultServices
    return defaultServices.map((service, index) => ({
      ...service,
      title: servicesData[index]?.title || service.title,
      description: servicesData[index]?.description || service.description,
      features: servicesData[index]?.features || service.features,
      bestFor: servicesData[index]?.bestFor || service.bestFor,
      timeline: servicesData[index]?.timeline || service.timeline,
      outcome: servicesData[index]?.outcome || service.outcome,
      deliverables: servicesData[index]?.deliverables || service.deliverables
    }))
  }, [t])
}
