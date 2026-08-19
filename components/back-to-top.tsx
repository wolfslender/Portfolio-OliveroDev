"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const label = pathname?.startsWith("/es") ? "Volver arriba" : "Back to top"

  useEffect(() => {
    let frame = 0
    const toggleVisibility = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        const nextVisible = window.scrollY > 300
        setIsVisible((current) => current === nextVisible ? current : nextVisible)
      })
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-40 rounded-full bg-primary p-3 text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 motion-reduce:transition-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      aria-label={label}
      title={label}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  )
}
