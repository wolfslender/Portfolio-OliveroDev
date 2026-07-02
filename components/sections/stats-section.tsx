"use client"

import { useState, useEffect, useRef } from "react"
import { useStats } from "@/hooks/use-stats"
import { cn } from "@/lib/utils"

function CountUp({
  end,
  duration = 2000,
  suffix = "",
}: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const startTime = Date.now()
    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [end, duration])

  return <>{count}{suffix}</>
}

export function StatsSection() {
  const stats = useStats()
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className={cn(
              "relative py-8 md:py-10 text-center",
              index < stats.length - 1 && "md:after:absolute md:after:right-0 md:after:top-1/4 md:after:h-1/2 md:after:w-px md:after:bg-border/40"
            )}>
              <div className="text-4xl md:text-5xl font-black text-foreground mb-1.5">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
