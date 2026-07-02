"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

const COOKIE_CONSENT_KEY = "oliverodev-cookie-consent"

export function GoogleAnalytics() {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (consent === "accepted") {
      setConsented(true)
    }
  }, [])

  if (!consented) return null

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WZCLD4H3QT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WZCLD4H3QT');
        `}
      </Script>
    </>
  )
}
