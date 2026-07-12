"use client"

import Link from "next/link"
import { ArrowRight, Gauge, SearchCheck, ShieldCheck } from "lucide-react"
import { useTranslation } from "react-i18next"
import { ScrollReveal } from "@/components/scroll-reveal"

const offers = [
  { icon: SearchCheck, key: "audit", href: "/contact?audit=true" },
  { icon: ShieldCheck, key: "optimize", href: "/services" },
  { icon: Gauge, key: "modernize", href: "/services" },
] as const

export function HomeOffersSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary mb-4">
              {t("homeOffers.eyebrow")}
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-balance">
              {t("homeOffers.title")}
            </h2>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("homeOffers.description")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 border border-border/60 bg-card">
          {offers.map(({ icon: Icon, key, href }, index) => (
            <ScrollReveal key={key} delay={index * 100} className="h-full">
              <article className={`h-full p-8 md:p-10 border-border/60 flex flex-col ${index < offers.length - 1 ? "border-b md:border-b-0 md:border-r" : ""}`}>
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-8">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  0{index + 1}
                </p>
                <h3 className="text-2xl font-bold mb-4">{t(`homeOffers.items.${key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {t(`homeOffers.items.${key}.description`)}
                </p>
                <Link href={href} className="inline-flex items-center gap-2 text-sm font-bold text-primary mt-8 group">
                  {t(`homeOffers.items.${key}.cta`)}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
