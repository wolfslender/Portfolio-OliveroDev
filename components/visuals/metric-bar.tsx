"use client"

import { cn } from "@/lib/utils"

interface MetricBarProps {
  label: string
  value: number
  max?: number
  color?: "primary" | "secondary" | "emerald" | "amber" | "red"
  className?: string
}

const colorMap = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  red: "bg-red-500",
}

export function MetricBar({ label, value, max = 100, color = "primary", className }: MetricBarProps) {
  const pct = Math.min(Math.round((value / max) * 100), 100)
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="text-sm text-muted-foreground w-28 shrink-0">{label}</span>
      <div className="metric-bar flex-1">
        <div
          className={cn("metric-bar-fill", colorMap[color])}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-sm font-mono font-semibold text-foreground w-10 text-right">{value}</span>
    </div>
  )
}
