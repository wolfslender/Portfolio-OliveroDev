"use client"

import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export function LanguageMeta() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language === "es" ? "es" : "en"
  }, [i18n.language])

  return null
}
