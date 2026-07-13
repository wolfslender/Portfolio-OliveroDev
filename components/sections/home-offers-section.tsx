"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gauge, SearchCheck, ShieldCheck } from "lucide-react"
import { useTranslation } from "react-i18next"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Zap, Shield, RefreshCw } from "lucide-react"
import { localizePath, isSpanishPath } from "@/lib/i18n-routing"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

const offers = [
  { icon: SearchCheck, key: "audit", href: "/website-audit", painKey: "audit" },
  { icon: ShieldCheck, key: "optimize", href: "/wordpress-speed-optimization", painKey: "speed" },
  { icon: Gauge, key: "modernize", href: "/website-migration", painKey: "platform" },
] as const

const painLabels = {
  en: {
    audit: { icon: SearchCheck, label: "Diagnosis first" },
    speed: { icon: Zap, label: "Performance & speed" },
    security: { icon: Shield, label: "Security & recovery" },
    platform: { icon: RefreshCw, label: "Platform & migration" },
  },
  es: {
    audit: { icon: SearchCheck, label: "Diagnóstico primero" },
    speed: { icon: Zap, label: "Rendimiento y velocidad" },
    security: { icon: Shield, label: "Seguridad y recuperación" },
    platform: { icon: RefreshCw, label: "Plataforma y migración" },
  },
}

interface HomeOffersSectionProps {
  locale?: "en" | "es"
}

export function HomeOffersSection({ locale }: HomeOffersSectionProps = {}) {
  const { t } = useTranslation()
  const pathname = usePathname()
  const isSpanish = locale === "es" || (!locale && isSpanishPath(pathname || "/"))
  const labels = isSpanish ? painLabels.es : painLabels.en
  const copy = locale === "es" ? es.homeOffers : locale === "en" ? en.homeOffers : undefined

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              {copy?.eyebrow || t("homeOffers.eyebrow")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {copy?.title || t("homeOffers.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {copy?.description || t("homeOffers.description")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {offers.map(({ icon: Icon, key, href, painKey }, i) => {
            const pain = labels[painKey] || labels.speed
            return (
              <ScrollReveal key={key} delay={i * 100}>
                <Link href={localizePath(pathname || "/", href)} className="group block h-full">
                  <article className="h-full rounded-2xl border border-border/60 bg-card p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {pain.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                      {copy?.items[key].title || t(`homeOffers.items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {copy?.items[key].description || t(`homeOffers.items.${key}.description`)}
                    </p>
                    <div className="pt-4 border-t border-border/40">
                      <Button variant="ghost" size="sm" className="p-0 h-auto font-bold text-primary hover:bg-transparent">
                        {copy?.items[key].cta || t(`homeOffers.items.${key}.cta`)} →
                      </Button>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
