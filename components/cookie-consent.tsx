"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

const COOKIE_CONSENT_KEY = "oliverodev-cookie-consent"

export function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1000)
      return () => clearTimeout(timer)
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
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="max-w-3xl mx-auto bg-card border border-border/50 rounded-2xl shadow-2xl backdrop-blur-xl bg-background/95 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-muted-foreground leading-relaxed">
          This site uses Google Analytics to understand how visitors interact with the site. By clicking &quot;Accept&quot;, you consent to the use of cookies. Learn more in our{" "}
          <Link href="/privacy" className="text-primary hover:underline font-medium">
            Privacy Policy
          </Link>.
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="outline" size="sm" onClick={reject} className="rounded-full">
            Reject
          </Button>
          <Button size="sm" onClick={accept} className="rounded-full">
            Accept
          </Button>
          <button
            onClick={reject}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
