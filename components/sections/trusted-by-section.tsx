"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { useTranslation } from "react-i18next"
import { ArrowRight, Building2, Gauge, ShieldCheck, Wrench } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

const partners = [
  {
    name: "Co-Active",
    industry: "Global EdTech",
    type: "Contractor",
    work: "Performance, WordPress maintenance, security, SEO, PHP and server support for a global training platform.",
    workEs: "Rendimiento, mantenimiento WordPress, seguridad, SEO, PHP y soporte de servidores para una plataforma global de formación.",
    proof: "150K+ users · 60 countries",
    proofEs: "150K+ usuarios · 60 países",
    href: "/work/co-active-training-institute",
    icon: Gauge,
  },
  {
    name: "Truenorth",
    industry: "Digital delivery",
    type: "Employee",
    work: "WordPress security, Azure operations, custom development and Webflow migration work across corporate and public-sector projects.",
    workEs: "Seguridad WordPress, operaciones en Azure, desarrollo personalizado y migraciones a Webflow en proyectos corporativos y públicos.",
    proof: "3 years · public-sector delivery",
    proofEs: "3 años · proyectos públicos",
    href: "/work/truenorth-corporation",
    icon: Building2,
  },
  {
    name: "DE Puerto Rico",
    industry: "Government education",
    type: "Public sector",
    work: "From-scratch WordPress build with custom PHP, JavaScript, HTML/CSS and government file-management API integrations.",
    workEs: "Construcción WordPress desde cero con PHP, JavaScript, HTML/CSS e integraciones API para archivos gubernamentales.",
    proof: "Government platform",
    proofEs: "Plataforma gubernamental",
    href: "/work/departamento-de-educacion-pr",
    icon: Wrench,
  },
  {
    name: "CST Puerto Rico",
    industry: "Traffic safety",
    type: "Public sector",
    work: "Traffic-safety website work with accident-statistics API integrations and later migration from WordPress to Webflow.",
    workEs: "Trabajo en plataforma de seguridad vial con APIs de estadísticas de accidentes y posterior migración de WordPress a Webflow.",
    proof: "API integrations · migration",
    proofEs: "APIs · migración",
    href: "/work/cst-puerto-rico-website",
    icon: Building2,
  },
  {
    name: "GovValue",
    industry: "Government services",
    type: "Recovery",
    work: "WordPress recovery after a database backdoor injected spam pages and external redirects, including SEO cleanup through Search Console.",
    workEs: "Recuperación WordPress después de un backdoor en base de datos con páginas spam y redirecciones externas, incluyendo limpieza SEO en Search Console.",
    proof: "Backdoor cleanup · SEO recovery",
    proofEs: "Backdoor · recuperación SEO",
    href: "/work/govvalue",
    icon: ShieldCheck,
  },
  {
    name: "Cybernetips",
    industry: "Cybersecurity",
    type: "Security",
    work: "Cybersecurity-focused web work connected to incident response, digital recovery and protection services.",
    workEs: "Trabajo web enfocado en ciberseguridad, respuesta a incidentes, recuperación digital y servicios de protección.",
    proof: "Incident response focus",
    proofEs: "Respuesta a incidentes",
    href: "/work/cybernetips",
    icon: ShieldCheck,
  },
]

interface TrustedBySectionProps {
  locale?: "en" | "es"
}

export function TrustedBySection({ locale }: TrustedBySectionProps = {}) {
  const { t } = useTranslation()
  const copy = locale === "es" ? es.trustedBy : locale === "en" ? en.trustedBy : undefined
  const [activeIndex, setActiveIndex] = useState(0)
  const activePartner = partners[activeIndex]
  const isSpanish = locale === "es"
  const ActiveIcon = activePartner.icon

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              {copy?.eyebrow || t('trustedBy.eyebrow', "Selected work")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {copy?.title || t('trustedBy.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {copy?.description || t('trustedBy.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] items-stretch">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {partners.map((brand, i) => {
                const Icon = brand.icon
                const isActive = i === activeIndex

                return (
                  <button
                    key={brand.name}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`group relative min-h-32 overflow-hidden rounded-3xl border p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${
                      isActive
                        ? "border-primary/50 bg-primary text-primary-foreground shadow-2xl shadow-primary/20"
                        : "border-border/60 bg-card/80 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
                    }`}
                    aria-pressed={isActive}
                  >
                    <div className={`mb-4 inline-flex size-10 items-center justify-center rounded-2xl transition-colors ${
                      isActive ? "bg-primary-foreground/15" : "bg-primary/10 text-primary"
                    }`}>
                      <Icon className="size-5" />
                    </div>
                    <span className="block text-base font-bold leading-tight">
                      {brand.name}
                    </span>
                    <span className={`mt-1 block text-xs leading-relaxed ${
                      isActive ? "text-primary-foreground/75" : "text-muted-foreground"
                    }`}>
                      {brand.industry}
                    </span>
                    <span className={`mt-4 block h-1 rounded-full transition-all duration-300 ${
                      isActive ? "w-16 bg-primary-foreground/80" : "w-8 bg-primary/25 group-hover:w-12"
                    }`} />
                  </button>
                )
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-2xl shadow-black/5 md:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <div className="mb-8 flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-primary">
                      {isSpanish ? "Prueba real" : "Real proof"}
                    </p>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                      {activePartner.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {activePartner.type} · {activePartner.industry}
                    </p>
                  </div>
                  <div className="hidden size-16 shrink-0 items-center justify-center rounded-3xl bg-primary text-primary-foreground sm:flex">
                    <ActiveIcon className="size-7" />
                  </div>
                </div>

                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {isSpanish ? activePartner.workEs : activePartner.work}
                </p>
              </div>

              <div className="relative mt-10 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="rounded-3xl border border-border/70 bg-background/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {isSpanish ? "Resultado / contexto" : "Outcome / context"}
                  </p>
                  <p className="mt-2 text-xl font-bold text-foreground">
                    {isSpanish ? activePartner.proofEs : activePartner.proof}
                  </p>
                </div>

                <Link
                  href={activePartner.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-bold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  {isSpanish ? "Ver caso" : "View case"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
