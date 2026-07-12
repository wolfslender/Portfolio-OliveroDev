"use client"

import React, { useEffect } from "react"
import i18next from "i18next"
import { I18nextProvider, initReactI18next } from "react-i18next"
import { usePathname } from "next/navigation"
import { isSpanishPath } from "@/lib/i18n-routing"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: "en", // Force initial language to match server (SSG/SSR)
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    interpolation: {
      escapeValue: false,
    },
  })

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    const routeLanguage = isSpanishPath(pathname || "/") ? "es" : "en"
    if (i18next.language !== routeLanguage) {
      i18next.changeLanguage(routeLanguage)
    }
  }, [pathname])

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

    i18next.on("languageChanged", onLanguageChanged)
    return () => {
      i18next.off("languageChanged", onLanguageChanged)
    }
  }, [pathname])

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}
