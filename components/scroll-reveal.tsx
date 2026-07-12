"use client"

import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
  duration?: number
}

export function ScrollReveal({ children, className, delay = 0, duration = 700 }: ScrollRevealProps) {
  return (
    <div
      className={cn(
        "animate-in fade-in slide-in-from-bottom-8 fill-mode-both ease-out motion-reduce:animate-none",
        className
      )}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  )
}
