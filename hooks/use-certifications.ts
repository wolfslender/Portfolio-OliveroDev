import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { certifications } from "@/lib/data"

export function useCertifications() {
  return certifications
}

export function useCertificationsPage() {
  const { t } = useTranslation()
  return useMemo(() => ({
    titlePrefix: t('certificationsPage.titlePrefix', "Certifications &"),
    titleHighlight: t('certificationsPage.titleHighlight', "Education"),
    description: t('certificationsPage.description', "Continuous learning and professional development achievements"),
    issued: t('certificationsPage.issued', "Issued:"),
    id: t('certificationsPage.id', "ID:")
  }), [t])
}
