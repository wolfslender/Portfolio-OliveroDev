import { useTranslation } from "react-i18next"
import { useMemo } from "react"

export function useNav() {
  const { t } = useTranslation()
  return useMemo(() => ([
    { label: t('nav.home', "Home"), href: "/" },
    { label: t('nav.services', "Services"), href: "/services" },
    { label: t('nav.work', "Work"), href: "/work" },
    { label: t('nav.blog', "Blog"), href: "/blog" },
    { label: t('nav.about', "About"), href: "/about" },
    { label: t('nav.contact', "Contact"), href: "/contact" },
  ]), [t])
}
