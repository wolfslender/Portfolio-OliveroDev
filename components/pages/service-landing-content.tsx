import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ServiceHeroVisual } from "@/components/visuals/service-hero-visual"
import { localizePath } from "@/lib/i18n-routing"

interface LandingPageData {
  slug: string
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
  problem: { title: string; symptoms: string[] }
  whatICheck: { title: string; items: string[] }
  process: {
    title: string
    steps: Array<{ number: string; title: string; description: string }>
  }
  proof: {
    title: string
    items: Array<{ company: string; description: string }>
  }
  deliverables: { title: string; items: string[] }
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
    problem: isSpanish ? "El punto de partida" : "The starting point",
    scope: isSpanish ? "En qué me enfoco" : "Where I focus",
    process: isSpanish ? "Una ejecución clara" : "A clear engagement",
    deliverables: isSpanish ? "Resultado tangible" : "A tangible outcome",
    proof: isSpanish ? "Experiencia aplicada" : "Applied experience",
    faq: isSpanish ? "Lo esencial, antes de comenzar" : "The essentials, before we start",
    back: isSpanish ? "Ver todos los servicios" : "View all services",
  }
  const proofGridClass = proof.items.length === 1
    ? "grid-cols-1"
    : proof.items.length === 3
      ? "md:grid-cols-2 [&>article:last-child]:md:col-span-2"
      : "md:grid-cols-2"

  return (
    <main className="overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-2 pt-24 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href={isSpanish ? "/es/" : "/"} className="transition-colors hover:text-foreground">{labels.home}</Link>
          <span aria-hidden="true">/</span>
          <Link href={isSpanish ? "/es/services/" : "/services/"} className="transition-colors hover:text-foreground">{labels.services}</Link>
          <span aria-hidden="true">/</span>
          <span className="font-medium text-foreground">{hero.eyebrow}</span>
        </nav>
      </div>

      <section className="px-4 pb-16 pt-10 sm:px-6 md:pb-20 md:pt-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <ScrollReveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{hero.eyebrow}</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.03] tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl">{hero.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{hero.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-7 font-bold">
                  <Link href={hero.primaryCta.href} prefetch={false}>
                    {hero.primaryCta.label}<ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-7 font-bold">
                  <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-10 -z-10 rounded-full bg-primary/10 blur-3xl" />
              <ServiceHeroVisual slug={data.slug} locale={locale} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/25 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
          <ScrollReveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{labels.problem}</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] text-balance sm:text-4xl">{problem.title}</h2>
              <div className="mt-8 border-y border-border/70">
                {problem.symptoms.map((symptom, index) => (
                  <div key={symptom} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-border/70 py-4 last:border-b-0">
                    <span className="text-xs font-bold text-primary">0{index + 1}</span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{symptom}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-xl shadow-black/[0.03] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{labels.scope}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{whatICheck.title}</h2>
              <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
                {whatICheck.items.map((item) => (
                  <div key={item} className="flex gap-3 border-t border-border/60 py-4">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-foreground text-background">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{labels.process}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">{process.title}</h2>
              <div className="mt-9 grid gap-px overflow-hidden rounded-2xl bg-background/15 sm:grid-cols-2">
                {process.steps.map((step) => (
                  <article key={step.number} className="bg-foreground p-5 sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-primary">{step.number}</span>
                      <h3 className="font-bold">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-background/60">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="border-t border-background/15 bg-background/[0.04] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{labels.deliverables}</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">{deliverables.title}</h2>
              <div className="mt-8">
                {deliverables.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-t border-background/15 py-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                    <span className="text-sm font-medium text-background/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/25 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{labels.proof}</p>
                <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">{proof.title}</h2>
              </div>
              <div className={`grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 ${proofGridClass}`}>
                {proof.items.map((item) => (
                  <article key={item.company} className="bg-card p-5 sm:p-6">
                    <h3 className="font-bold">{item.company}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <ScrollReveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{labels.faq}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-balance sm:text-4xl">{faq.title}</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="border-t border-border/70">
              {faq.items.map((item) => (
                <details key={item.question} className="group border-b border-border/70">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-bold marker:content-none">
                    {item.question}
                    <ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="max-w-3xl pb-6 pr-10 text-sm leading-relaxed text-muted-foreground sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:pb-24 lg:px-8">
        <ScrollReveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-foreground px-7 py-12 text-background sm:px-10 md:px-14 md:py-14">
            <div className="pointer-events-none absolute -right-32 -top-40 size-[28rem] rounded-full bg-primary/35 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-[-0.04em] text-balance sm:text-4xl lg:text-5xl">{finalCta.title}</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-background/65">{finalCta.description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link href={finalCta.primaryCta.href} prefetch={false} className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground">
                  {finalCta.primaryCta.label}<ArrowRight className="ml-2 size-4" />
                </Link>
                <Link href={localizePath(isSpanish ? "/es/" : "/", "/services")} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-background/20 bg-background/5 px-6 text-sm font-bold text-background">
                  {labels.back}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
