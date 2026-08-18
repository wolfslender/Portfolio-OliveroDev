import { cn } from "@/lib/utils"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

interface HealthRow {
  label: string
  status: "good" | "warn" | "bad"
  detail: string
}

interface WebsiteHealthReportProps {
  className?: string
  locale?: "en" | "es"
}

const statusStyles = {
  good: "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
  warn: "bg-amber-500/10 text-amber-800 dark:text-amber-300",
  bad: "bg-red-500/10 text-red-800 dark:text-red-300",
}

const dotStyles = {
  good: "status-good",
  warn: "status-warn",
  bad: "status-bad",
}

export function WebsiteHealthReport({ className, locale = "en" }: WebsiteHealthReportProps) {
  const copy = (locale === "es" ? es : en).visuals.healthReport
  const sampleRows: HealthRow[] = [
    { ...copy.rows.performance, status: "warn" },
    { ...copy.rows.security, status: "bad" },
    { ...copy.rows.wordpress, status: "warn" },
    { ...copy.rows.layout, status: "warn" },
    { ...copy.rows.plan, status: "good" },
  ]

  return (
    <div className={cn("report-card p-5 md:p-6 font-mono text-sm", className)}>
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/40">
        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {copy.title}
        </span>
      </div>
      <div className="space-y-0">
        {sampleRows.map((row) => (
          <div key={row.label} className="report-row">
            <div className="flex items-center gap-3">
              <span className={cn("status-dot", dotStyles[row.status])} />
              <span className="report-label">{row.label}</span>
            </div>
            <span className={cn("text-xs font-semibold px-2 py-0.5 rounded-full", statusStyles[row.status])}>
              {row.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
