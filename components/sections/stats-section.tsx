"use client"

import { useState, useEffect, useRef } from "react"
import { useStats } from "@/hooks/use-stats"
import { ScrollReveal } from "@/components/scroll-reveal"

function CountUp({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const startTime = Date.now()
    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
      setCount(currentCount)
      countRef.current = currentCount
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, duration])

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const stats = useStats()
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group relative p-6 bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 text-center">
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-black mb-2 text-foreground">
                    <CountUp end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
