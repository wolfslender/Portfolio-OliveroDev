import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { services as defaultServices } from "@/lib/data"

export function useServices() {
  const { t } = useTranslation()
  return useMemo(() => {
    const servicesData = t('services', { returnObjects: true, defaultValue: defaultServices }) as typeof defaultServices
    return defaultServices.map((service, index) => {
      const translated = servicesData.find((item) => item.id === service.id) || servicesData[index]

      return {
      ...service,
      title: translated?.title || service.title,
      description: translated?.description || service.description,
      features: translated?.features || service.features,
      bestFor: translated?.bestFor || service.bestFor,
      timeline: translated?.timeline || service.timeline,
      outcome: translated?.outcome || service.outcome,
      deliverables: translated?.deliverables || service.deliverables,
      pricingNote: translated?.pricingNote || service.pricingNote,
      quoteOptions: translated?.quoteOptions || service.quoteOptions,
      painPoint: translated?.painPoint || service.painPoint,
      evidence: translated?.evidence || service.evidence,
      }
    })
  }, [t])
}
