"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const updateProgress = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const nextProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
        setProgress(Math.min(1, Math.max(0, nextProgress)))
      })
    }

    window.addEventListener("scroll", updateProgress, { passive: true })
    updateProgress()

    return () => {
      window.removeEventListener("scroll", updateProgress)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/20" aria-hidden="true">
      <div
        className="h-full origin-left bg-primary will-change-transform"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
