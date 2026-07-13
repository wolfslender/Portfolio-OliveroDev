"use client"

import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

interface HealthRow {
  label: string
  status: "good" | "warn" | "bad"
  detail: string
}

interface WebsiteHealthReportProps {
  className?: string
}

const statusStyles = {
  good: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  warn: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  bad: "bg-red-500/10 text-red-600 dark:text-red-400",
}

const dotStyles = {
  good: "status-good",
  warn: "status-warn",
  bad: "status-bad",
}

export function WebsiteHealthReport({ className }: WebsiteHealthReportProps) {
  const { t } = useTranslation()
  const sampleRows: HealthRow[] = [
    { label: t("visuals.healthReport.rows.performance.label", "Performance"), status: "warn", detail: t("visuals.healthReport.rows.performance.detail", "Needs attention") },
    { label: t("visuals.healthReport.rows.security.label", "Security"), status: "bad", detail: t("visuals.healthReport.rows.security.detail", "Public endpoints found") },
    { label: t("visuals.healthReport.rows.wordpress.label", "WordPress"), status: "warn", detail: t("visuals.healthReport.rows.wordpress.detail", "Outdated plugins") },
    { label: t("visuals.healthReport.rows.layout.label", "Layout"), status: "warn", detail: t("visuals.healthReport.rows.layout.detail", "Visual issues found") },
    { label: t("visuals.healthReport.rows.plan.label", "Action Plan"), status: "good", detail: t("visuals.healthReport.rows.plan.detail", "Ready") },
  ]

  return (
    <div className={cn("report-card p-5 md:p-6 font-mono text-sm", className)}>
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/40">
        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {t("visuals.healthReport.title", "Website Health Report")}
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
