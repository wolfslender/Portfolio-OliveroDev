"use client"

import { cn } from "@/lib/utils"
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react"

interface AuditItem {
  label: string
  status: "pass" | "warn" | "fail"
}

interface AuditChecklistProps {
  title?: string
  items: AuditItem[]
  className?: string
}

const statusConfig = {
  pass: { icon: CheckCircle2, color: "text-emerald-500" },
  warn: { icon: AlertCircle, color: "text-amber-500" },
  fail: { icon: XCircle, color: "text-red-500" },
}

export function AuditChecklist({ title, items, className }: AuditChecklistProps) {
  return (
    <div className={cn("report-card p-5", className)}>
      {title && (
        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 pb-3 border-b border-border/40">
          {title}
        </h4>
      )}
      <div className="space-y-0">
        {items.map((item) => {
          const { icon: Icon, color } = statusConfig[item.status]
          return (
            <div key={item.label} className="checklist-item">
              <Icon className={cn("w-4 h-4 mt-0.5 shrink-0", color)} />
              <span className="text-sm text-foreground">{item.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
