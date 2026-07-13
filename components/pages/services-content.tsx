"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import { ScrollReveal } from "@/components/scroll-reveal"
import { localizePath, isSpanishPath } from "@/lib/i18n-routing"
import { landingPages } from "@/lib/landing-pages"
import { landingPagesEs } from "@/lib/landing-pages-es"
import { Search, Zap, Shield, AlertTriangle, RefreshCw, Settings } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "website-audit": Search,
  "wordpress-speed-optimization": Zap,
  "wordpress-security": Shield,
  "hacked-wordpress-recovery": AlertTriangle,
  "website-migration": RefreshCw,
  "wordpress-maintenance": Settings,
}

const painGroups = {
  en: [
    { key: "speed", label: "Performance & diagnosis", note: "For sites that feel slow, messy, or unclear.", slugs: ["website-audit", "wordpress-speed-optimization"] },
    { key: "security", label: "Security & recovery", note: "For WordPress risks, suspicious behavior, or compromised sites.", slugs: ["wordpress-security", "hacked-wordpress-recovery"] },
    { key: "platform", label: "Platform & maintenance", note: "For migrations, rebuilds, updates, and long-term technical ownership.", slugs: ["website-migration", "wordpress-maintenance"] },
  ],
  es: [
    { key: "speed", label: "Rendimiento y diagnóstico", note: "Para webs lentas, desordenadas o sin un rumbo claro.", slugs: ["website-audit", "wordpress-speed-optimization"] },
    { key: "security", label: "Seguridad y recuperación", note: "Para riesgos en WordPress, comportamiento sospechoso o sitios comprometidos.", slugs: ["wordpress-security", "hacked-wordpress-recovery"] },
    { key: "platform", label: "Plataforma y mantenimiento", note: "Para migraciones, reconstrucciones, actualizaciones y soporte técnico continuo.", slugs: ["website-migration", "wordpress-maintenance"] },
  ],
}

export function ServicesContent() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const isSpanish = isSpanishPath(pathname || "/")
  const pages = isSpanish ? landingPagesEs : landingPages
  const pagesBySlug = Object.fromEntries(pages.map((page) => [page.slug, page]))
  const groups = isSpanish ? painGroups.es : painGroups.en

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end mb-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary mb-4">
                {t("nav.services", "Services")}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                {t("servicesPage.hero.title")}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl lg:pb-2">
              {t("servicesPage.hero.description")}
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {groups.map((group, gi) => (
            <ScrollReveal key={group.key} delay={gi * 100}>
              <div>
                <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-3">
                      <span className="w-2 h-8 bg-primary rounded-full" />
                      {group.label}
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                      {group.note}
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {group.slugs.map((slug) => {
                    const service = pagesBySlug[slug]
                    if (!service) return null
                    const Icon = iconMap[slug] || Search
                    return (
                      <Link key={slug} href={localizePath(pathname || "/", `/${slug}`)} className="group block h-full">
                        <article className="h-full p-6 md:p-8 bg-card border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 rounded-2xl">
                          <div className="flex items-start gap-4 mb-5">
                            <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-1">
                                {service.hero.eyebrow}
                              </p>
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-balance">
                                {service.problem.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                            {service.hero.description}
                          </p>
                          <div className="pt-4 border-t border-border/40">
                            <p className="text-xs font-semibold text-secondary mb-3">
                              {isSpanish ? "Resultado:" : "Result:"} {service.deliverables.items[0]}
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all">
                              {isSpanish ? "Ver servicio" : "Explore service"} →
                            </span>
                          </div>
                        </article>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={150}>
          <div className="mt-20 rounded-2xl border border-border/60 bg-card p-8 md:p-10 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                {t("servicesPage.cta.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {t("servicesPage.cta.description")}
              </p>
            </div>
            <Link
              href={localizePath(pathname || "/", "/contact?audit=true")}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t("servicesPage.cta.button")}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
