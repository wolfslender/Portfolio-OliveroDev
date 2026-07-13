"use client"

import { cn } from "@/lib/utils"
import { Search, Zap, Shield, AlertTriangle, RefreshCw, Settings } from "lucide-react"
import { WebsiteHealthReport } from "./website-health-report"
import { AuditChecklist } from "./audit-checklist"
import { MetricBar } from "./metric-bar"

interface ServiceHeroVisualProps {
  slug: string
  locale?: string
  className?: string
}

function copy(locale = "en") {
  const es = locale === "es"
  return {
    whatFirst: es ? "Qué reviso primero" : "What I check first",
    priorityIssues: es ? "Problemas prioritarios" : "Priority issues",
    needsReview: es ? "Revisar" : "Needs review",
    highPriority: es ? "Alta prioridad" : "High priority",
    vitals: es ? "Core Web Vitals — Ejemplo" : "Core Web Vitals — Sample",
    example: es ? "Métricas de ejemplo para ilustración" : "Example metrics for illustration",
    securityStatus: es ? "Estado de seguridad" : "Security status",
    incident: es ? "Respuesta al incidente" : "Incident response",
    migration: es ? "Flujo de migración" : "Migration flow",
    monthly: es ? "Cuidado mensual" : "Monthly care",
    auditItems: es
      ? ["Rendimiento y velocidad", "Exposición de seguridad", "Riesgo de plugins", "Fricción de conversión"]
      : ["Performance & speed", "Security exposure", "Plugin risk", "Conversion friction"],
    priority: es
      ? ["Riesgo de confianza", "Riesgo de velocidad", "Riesgo de conversión"]
      : ["Trust risk", "Speed risk", "Conversion risk"],
    securityItems: es
      ? ["Endpoints públicos", "Plugins desactualizados", "Revisión de usuarios", "Estado de backups", "Hardening"]
      : ["Public endpoints", "Outdated plugins", "User access review", "Backup status", "Hardening"],
    recoverySteps: es ? ["Evaluar", "Limpiar", "Blindar", "Verificar"] : ["Assess", "Clean", "Harden", "Verify"],
    migrationSteps: es ? ["Plataforma actual", "Auditoría y plan", "Migrar", "Lanzar", "Monitorear"] : ["Old platform", "Audit & plan", "Migrate", "Launch", "Monitor"],
    maintenanceItems: es
      ? ["Updates", "Backups", "Uptime", "Revisión de velocidad", "Revisión de seguridad", "Ajustes pequeños"]
      : ["Updates", "Backups", "Uptime", "Speed review", "Security review", "Small fixes"],
  }
}

function AuditHeroVisual({ locale }: { locale?: string }) {
  const labels = copy(locale)
  return (
    <div className="space-y-4">
      <div className="report-card p-5">
        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
          {labels.whatFirst}
        </h4>
        <div className="space-y-2">
          {labels.auditItems.map((item) => (
            <div key={item} className="flex items-center gap-2.5 py-1.5">
              <span className="status-dot status-warn" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="report-card p-5">
        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
          {labels.priorityIssues}
        </h4>
        <div className="space-y-2">
          {labels.priority.map((label, index) => ({ label, status: index === 1 ? "bad" as const : "warn" as const })).map((item) => (
            <div key={item.label} className="flex items-center justify-between py-1.5">
              <span className="text-sm text-foreground">{item.label}</span>
              <span className={cn("text-xs font-semibold px-2 py-0.5 rounded-full",
                item.status === "warn" ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" : "bg-red-500/10 text-red-600 dark:text-red-400"
              )}>
                {item.status === "warn" ? labels.needsReview : labels.highPriority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SpeedHeroVisual({ locale }: { locale?: string }) {
  const labels = copy(locale)
  return (
    <div className="report-card p-5 space-y-4">
      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {labels.vitals}
      </h4>
      <MetricBar label="LCP" value={32} color="amber" />
      <MetricBar label="INP" value={280} max={500} color="red" />
      <MetricBar label="CLS" value={8} max={25} color="primary" />
      <p className="text-xs text-muted-foreground/60 italic">{labels.example}</p>
    </div>
  )
}

function SecurityHeroVisual({ locale }: { locale?: string }) {
  const labels = copy(locale)
  return (
    <AuditChecklist
      title={labels.securityStatus}
      items={labels.securityItems.map((label, index) => ({
        label,
        status: index === 0 ? "fail" : index === 3 ? "pass" : "warn",
      }))}
    />
  )
}

function RecoveryHeroVisual({ locale }: { locale?: string }) {
  const labels = copy(locale)
  const steps = labels.recoverySteps
  return (
    <div className="report-card p-5">
      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
        {labels.incident}
      </h4>
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <div className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
              i < 3 ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-primary/10 text-primary"
            )}>
              {i + 1}
            </div>
            <span className="text-sm text-foreground">{step}</span>
            {i < steps.length - 1 && (
              <div className="ml-auto text-xs text-muted-foreground/60">
                {i === 0 ? "24h" : i === 1 ? "48h" : "72h"}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function MigrationHeroVisual({ locale }: { locale?: string }) {
  const labels = copy(locale)
  return (
    <div className="report-card p-5">
      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
        {labels.migration}
      </h4>
      <div className="space-y-2">
        {labels.migrationSteps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <div className={cn(
              "w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold shrink-0",
              i === 0 ? "bg-red-500/10 text-red-600 dark:text-red-400" : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            )}>
              {i + 1}
            </div>
            <span className="text-sm text-foreground">{step}</span>
            {i < 4 && <span className="ml-auto text-muted-foreground/40">→</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function MaintenanceHeroVisual({ locale }: { locale?: string }) {
  const labels = copy(locale)
  return (
    <div className="report-card p-5">
      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
        {labels.monthly}
      </h4>
      <div className="grid grid-cols-2 gap-3">
        {labels.maintenanceItems.map((label, index) => ({ label, status: index === 3 ? "warn" as const : "pass" as const })).map((item) => (
          <div key={item.label} className="flex items-center gap-2 py-1.5">
            <span className={cn("status-dot", item.status === "pass" ? "status-good" : "status-warn")} />
            <span className="text-xs text-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const visuals: Record<string, React.ComponentType<{ locale?: string }>> = {
  "website-audit": AuditHeroVisual,
  "wordpress-speed-optimization": SpeedHeroVisual,
  "wordpress-security": SecurityHeroVisual,
  "hacked-wordpress-recovery": RecoveryHeroVisual,
  "website-migration": MigrationHeroVisual,
  "wordpress-maintenance": MaintenanceHeroVisual,
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "website-audit": Search,
  "wordpress-speed-optimization": Zap,
  "wordpress-security": Shield,
  "hacked-wordpress-recovery": AlertTriangle,
  "website-migration": RefreshCw,
  "wordpress-maintenance": Settings,
}

export function ServiceHeroVisual({ slug, locale = "en", className }: ServiceHeroVisualProps) {
  const Visual = visuals[slug] || AuditHeroVisual
  const Icon = iconMap[slug] || Search

  return (
    <div className={cn("relative", className)}>
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <Visual locale={locale} />
    </div>
  )
}
