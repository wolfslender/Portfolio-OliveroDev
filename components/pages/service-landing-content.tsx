"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AuditChecklist } from "@/components/visuals/audit-checklist"
import { ServiceHeroVisual } from "@/components/visuals/service-hero-visual"
import { localizePath } from "@/lib/i18n-routing"
import { ArrowRight, CheckCircle2 } from "lucide-react"

interface LandingPageData {
  slug: string
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
  problem: {
    title: string
    symptoms: string[]
  }
  whatICheck: {
    title: string
    items: string[]
  }
  process: {
    title: string
    steps: Array<{ number: string; title: string; description: string }>
  }
  proof: {
    title: string
    items: Array<{ company: string; description: string }>
  }
  deliverables: {
    title: string
    items: string[]
  }
  faq: {
    title: string
    items: Array<{ question: string; answer: string }>
  }
  finalCta: {
    title: string
    description: string
    primaryCta: { label: string; href: string }
  }
}

interface ServiceLandingContentProps {
  data: LandingPageData
  locale?: string
}

export function ServiceLandingContent({ data, locale = "en" }: ServiceLandingContentProps) {
  const { hero, problem, whatICheck, process, proof, deliverables, faq, finalCta } = data
  const isSpanish = locale === "es"
  const labels = {
    home: isSpanish ? "Inicio" : "Home",
    services: isSpanish ? "Servicios" : "Services",
    covers: isSpanish ? "Qué cubre este servicio" : "What this service covers",
    checklist: isSpanish ? "Checklist técnico" : "Technical checklist",
    back: isSpanish ? "Volver a servicios" : "Back to services",
  }

  return (
    <div className="bg-background">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href={localizePath(isSpanish ? "/es/" : "/", "/")} className="hover:text-foreground transition-colors">{labels.home}</Link>
          <span>/</span>
          <Link href={localizePath(isSpanish ? "/es/" : "/", "/services")} className="hover:text-foreground transition-colors">{labels.services}</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{hero.eyebrow}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  {hero.eyebrow}
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.08]">
                  {hero.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all hover:shadow-lg hover:shadow-primary/15 active:scale-[0.98]">
                    <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 px-8 font-bold border-border hover:bg-muted/50 transition-all active:scale-[0.98]">
                    <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
                  </Button>
                </div>
              </div>
              <ScrollReveal delay={200}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl -z-10" />
                  <ServiceHeroVisual slug={data.slug} locale={locale} />
                  <div className="report-card p-6 mt-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                      {labels.covers}
                    </h4>
                    <div className="space-y-2">
                      {whatICheck.items.slice(0, 5).map((item) => (
                        <div key={item} className="flex items-center gap-2.5 py-1.5">
                          <span className="status-dot status-warn" />
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
                {problem.title}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {problem.symptoms.map((symptom, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-card border border-border/60 p-6 h-full flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{symptom}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What I Check */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
                {whatICheck.title}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="max-w-2xl mx-auto">
              <AuditChecklist
                title={labels.checklist}
                items={whatICheck.items.map((item) => ({
                  label: item,
                  status: "warn" as const,
                }))}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
                {process.title}
              </h2>
            </div>
          </ScrollReveal>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/60" />
            <div className="space-y-12 md:space-y-16">
              {process.steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 100}>
                  <div className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="bg-card border border-border/60 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                            {step.number}
                          </span>
                          <h3 className="text-lg font-bold">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
                {proof.title}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {proof.items.map((item) => (
                <div key={item.company} className="bg-card border border-border/60 p-6 rounded-xl">
                  <p className="text-sm font-bold mb-2">{item.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
                {deliverables.title}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border/60 p-8 rounded-xl">
                <div className="space-y-4">
                  {deliverables.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
                {faq.title}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="max-w-2xl mx-auto space-y-4">
              {faq.items.map((item) => (
                <div key={item.question} className="bg-card border border-border/60 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative bg-card border border-border/60 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              <div className="relative p-8 md:p-16 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
                  {finalCta.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                  {finalCta.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all hover:shadow-lg hover:shadow-primary/15 active:scale-[0.98]">
                    <Link href={finalCta.primaryCta.href}>
                      {finalCta.primaryCta.label}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 px-8 font-bold border-border hover:bg-muted/50 transition-all active:scale-[0.98]">
                    <Link href={localizePath(isSpanish ? "/es/" : "/", "/services")}>
                      {labels.back}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
