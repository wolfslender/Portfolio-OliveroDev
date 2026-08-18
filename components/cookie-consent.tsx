"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"

const COOKIE_CONSENT_KEY = "oliverodev-cookie-consent"

export function CookieConsent() {
  const [show, setShow] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      const showConsent = () => setShow(true)
      const idleCallback = window.requestIdleCallback?.(showConsent, { timeout: 4000 })
      const timer = idleCallback === undefined ? window.setTimeout(showConsent, 3500) : undefined

      return () => {
        if (idleCallback !== undefined) window.cancelIdleCallback?.(idleCallback)
        if (timer !== undefined) window.clearTimeout(timer)
      }
    }
  }, [])

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
    setShow(false)
  }

  const reject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-3 left-3 right-3 z-[100] animate-in slide-in-from-bottom-5 fade-in duration-500 sm:bottom-4 sm:left-auto sm:right-4 sm:w-[min(430px,calc(100vw-2rem))]">
      <div className="bg-card border border-border/60 rounded-2xl shadow-2xl backdrop-blur-xl bg-background/95 p-4 sm:p-5">
        <div className="flex-1 text-sm text-muted-foreground leading-relaxed">
          {t('cookieConsent.message')}{" "}
          <Link href="/privacy" prefetch={false} className="text-primary hover:underline font-medium">
            {t('cookieConsent.privacyLink')}
          </Link>.
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={reject} className="rounded-full">
            {t('cookieConsent.reject')}
          </Button>
          <Button size="sm" onClick={accept} className="rounded-full">
            {t('cookieConsent.accept')}
          </Button>
          <button
            onClick={reject}
            className="ml-auto p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={t('cookieConsent.reject')}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
