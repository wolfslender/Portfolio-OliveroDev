"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { isSpanishPath, toEnglishPath, toSpanishPath } from "@/lib/i18n-routing"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleLanguage = () => {
    const nextPath = isSpanishPath(pathname || "/")
      ? toEnglishPath(pathname || "/")
      : toSpanishPath(pathname || "/")
    router.push(nextPath)
  }

  const isSpanish = isSpanishPath(pathname || "/") || i18n.language.startsWith("es")

  return (
    <div
      className="fixed bottom-36 right-5 z-40 animate-in fade-in zoom-in duration-300"
    >
      <Button
        onClick={toggleLanguage}
        size="icon"
        variant="outline"
        className="rounded-full w-12 h-12 bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300"
        title={isSpanish ? "Switch to English" : "Cambiar a Español"}
      >
        <span className="font-bold text-sm">
          {isSpanish ? "EN" : "ES"}
        </span>
      </Button>
    </div>
  )
}
