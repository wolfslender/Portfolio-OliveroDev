"use client"

import React, { useEffect, useMemo } from "react"
import { createInstance } from "i18next"
import { I18nextProvider, initReactI18next } from "react-i18next"
import { usePathname } from "next/navigation"
import { isSpanishPath } from "@/lib/i18n-routing"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const routeLanguage = isSpanishPath(pathname || "/") ? "es" : "en"
  const i18n = useMemo(() => {
    const instance = createInstance()
    instance.use(initReactI18next).init({
      resources: { en: { translation: en }, es: { translation: es } },
      lng: routeLanguage,
      fallbackLng: "en",
      supportedLngs: ["en", "es"],
      interpolation: { escapeValue: false },
      initImmediate: false,
    })
    return instance
  }, [routeLanguage])

  useEffect(() => {
    if (i18n.language !== routeLanguage) {
      i18n.changeLanguage(routeLanguage)
    }
  }, [i18n, routeLanguage])

  useEffect(() => {
    const storage = (globalThis as any).localStorage
    const canUseStorage =
      storage &&
      typeof storage.getItem === "function" &&
      typeof storage.setItem === "function"

    const onLanguageChanged = (lng: string) => {
      if (!canUseStorage) return
      if (lng === "en" || lng === "es") storage.setItem("i18nextLng", lng)
    }

    i18n.on("languageChanged", onLanguageChanged)
    return () => {
      i18n.off("languageChanged", onLanguageChanged)
    }
  }, [i18n])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
