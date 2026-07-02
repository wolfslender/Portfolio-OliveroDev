import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { contact } from "@/lib/data"

export function useContact() {
  return contact
}

export function useContactPage() {
  const { t } = useTranslation()
  return useMemo(() => ({
    title: t('contactPage.title', "Let's Work Together"),
    description: t('contactPage.description', "Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities."),
    emailMe: t('contactPage.emailMe', "Email Me"),
    whatsappMe: t('contactPage.whatsappMe', "WhatsApp Me"),
    socialConnect: t('contactPage.socialConnect', "Or connect with me on social media")
  }), [t])
}
