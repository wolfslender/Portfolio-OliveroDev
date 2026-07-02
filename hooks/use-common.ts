import { useTranslation } from "react-i18next"
import { useMemo } from "react"

export function useCommon() {
  const { t } = useTranslation()
  return useMemo(() => ({
    viewProject: t('common.viewProject', "View Project"),
    getStarted: t('common.getStarted', "Get Started"),
    whatsIncluded: t('common.whatsIncluded', "What's included"),
    whatsappChat: t('common.whatsappChat', "Chat on WhatsApp"),
    whatsappMessage: t('common.whatsappMessage', "Hi Alexis! I saw your portfolio and would like to chat."),
    proof: t('common.proof', "Proof"),
    live: t('common.live', "Live"),
    seeWork: t('common.seeWork', "See Work"),
    users: t('common.users', "Users"),
    speed: t('common.speed', "Speed"),
    impact: t('common.impact', "Impact"),
    bestFor: t('common.bestFor', "Best For"),
    timeline: t('common.timeline', "Timeline"),
    outcome: t('common.outcome', "Outcome"),
    included: t('common.included', "Included"),
    bookCall: t('common.bookCall', "Book a Strategy Call"),
    freeAudit: t('common.freeAudit', "Get Free Website Audit"),
    viewServices: t('common.viewServices', "View Services")
  }), [t])
}
