"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, CheckCircle2, HelpCircle, Search, Zap, Shield, AlertTriangle, RefreshCw, Settings } from "lucide-react"
import Link from "next/link"
import type { LandingPageData } from "@/lib/landing-pages"

const slugIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "website-audit": Search,
  "wordpress-speed-optimization": Zap,
  "wordpress-security": Shield,
  "hacked-wordpress-recovery": AlertTriangle,
  "website-migration": RefreshCw,
  "wordpress-maintenance": Settings,
}

interface ServiceLandingContentProps {
  data: LandingPageData
}

export default function ServiceLandingContent({ data }: ServiceLandingContentProps) {
  const { hero, problem, whatICheck, process, proof, deliverables, faq, finalCta } = data
  const Icon = slugIconMap[data.slug] || Search

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/[0.07] to-transparent -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
                <Icon className="w-4 h-4" />
                {hero.eyebrow}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                {hero.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                {hero.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-full h-12 px-7 font-bold group">
                  <Link href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-7 font-bold">
                  <Link href={hero.secondaryCta.href}>
                    {hero.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-primary/[0.03]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
              {problem.title}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {problem.symptoms.map((symptom, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="rounded-xl border border-border/40 bg-background/70 p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-foreground leading-relaxed">{symptom}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What I Check / Fix */}
      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
              {whatICheck.title}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatICheck.items.map((item, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-border/30 bg-background/50">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-secondary/[0.03]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
              {process.title}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative">
                  <span className="text-6xl font-black text-foreground/[0.03] absolute -top-4 -left-2">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
              {proof.title}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proof.items.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="rounded-xl border border-border/40 bg-background/70 p-6">
                  <h3 className="text-lg font-bold mb-2">{item.company}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-primary/[0.03]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
              {deliverables.title}
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {deliverables.items.map((item, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-border/50 bg-background/60">
                  {item}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-secondary/[0.03]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
              {faq.title}
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {faq.items.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="rounded-xl border border-border/40 bg-background/70 p-6">
                  <h3 className="text-lg font-bold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {finalCta.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-muted-foreground text-lg mb-8">
              {finalCta.description}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold group shadow-xl hover:shadow-primary/20 transition-all">
              <Link href={finalCta.primaryCta.href}>
                {finalCta.primaryCta.label}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
