"use client"

import React, { useEffect } from "react"
import i18next from "i18next"
import { I18nextProvider, initReactI18next } from "react-i18next"
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
  useEffect(() => {
    const isSupported = (lng: string | null): lng is "en" | "es" => lng === "en" || lng === "es"

    const storage = (globalThis as any).localStorage
    const canUseStorage =
      storage &&
      typeof storage.getItem === "function" &&
      typeof storage.setItem === "function"

    if (canUseStorage) {
      const savedLng = storage.getItem("i18nextLng")
      if (isSupported(savedLng) && savedLng !== i18next.language) {
        i18next.changeLanguage(savedLng)
      }
    }

    const onLanguageChanged = (lng: string) => {
      if (!canUseStorage) return
      if (lng === "en" || lng === "es") storage.setItem("i18nextLng", lng)
    }

    i18next.on("languageChanged", onLanguageChanged)
    return () => {
      i18next.off("languageChanged", onLanguageChanged)
    }
  }, [])

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}
