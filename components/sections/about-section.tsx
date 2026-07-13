"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Code2,
  Github,
  Gauge,
  Globe2,
  GraduationCap,
  Layers3,
  Linkedin,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { useAbout, useAboutPage, useEducation, useExperience } from "@/hooks/use-about"
import { siteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"

const proofCards = [
  {
    label: "Security + recovery",
    labelEs: "Seguridad + recuperación",
    title: "I clean up risk, not just pages.",
    titleEs: "Limpio riesgos, no solo páginas.",
    description:
      "Backdoors, old users, exposed endpoints, plugin risk and post-hack SEO cleanup are part of the work I can own.",
    descriptionEs:
      "Backdoors, usuarios viejos, endpoints expuestos, riesgo de plugins y limpieza SEO post-hack son parte del trabajo que puedo asumir.",
    icon: ShieldCheck,
  },
  {
    label: "Performance",
    labelEs: "Rendimiento",
    title: "Speed is treated as business trust.",
    titleEs: "La velocidad se trabaja como confianza comercial.",
    description:
      "I look at Core Web Vitals, assets, hosting, plugins, layout stability and what is quietly hurting conversion.",
    descriptionEs:
      "Reviso Core Web Vitals, assets, hosting, plugins, estabilidad visual y lo que afecta conversión silenciosamente.",
    icon: Gauge,
  },
  {
    label: "Build + maintain",
    labelEs: "Construcción + mantenimiento",
    title: "I stay useful after launch.",
    titleEs: "Sigo siendo útil después del lanzamiento.",
    description:
      "Websites are living systems. I can build, migrate, clean, monitor and keep improving the platform over time.",
    descriptionEs:
      "Las webs son sistemas vivos. Puedo construir, migrar, limpiar, monitorear y seguir mejorando la plataforma con el tiempo.",
    icon: Wrench,
  },
]

const operatingPrinciples = [
  {
    title: "Direct senior ownership",
    titleEs: "Responsabilidad senior directa",
    description: "You work with the person doing the technical thinking and implementation.",
    descriptionEs: "Trabajas con la misma persona que piensa e implementa la solución técnica.",
  },
  {
    title: "Business-first technical decisions",
    titleEs: "Decisiones técnicas con enfoque comercial",
    description: "Every fix should protect trust, reduce friction, or make the next sale easier.",
    descriptionEs: "Cada mejora debe proteger confianza, reducir fricción o facilitar la próxima venta.",
  },
  {
    title: "Clear priorities, no mystery work",
    titleEs: "Prioridades claras, sin trabajo misterioso",
    description: "I explain what matters now, what can wait, and what is not worth paying for.",
    descriptionEs: "Explico qué importa ahora, qué puede esperar y qué no vale la pena pagar.",
  },
]

export function AboutSection() {
  const about = useAbout()
  const aboutPage = useAboutPage()
  const experience = useExperience()
  const education = useEducation()
  const [activeProof, setActiveProof] = useState(0)
  const [activeExperience, setActiveExperience] = useState(0)

  const isSpanish = aboutPage.aboutLabel.toLowerCase().includes("sobre")
  const selectedProof = proofCards[activeProof]
  const selectedExperience = experience[activeExperience]

  const careerStats = useMemo(
    () => [
      { value: "10+", label: isSpanish ? "años resolviendo problemas web" : "years solving web problems" },
      { value: "150K+", label: isSpanish ? "usuarios en una plataforma global" : "users on a global platform" },
      { value: "60", label: isSpanish ? "países tocados por trabajo real" : "countries touched by real work" },
      { value: "98", label: isSpanish ? "PageSpeed alcanzado en proyectos" : "PageSpeed reached on projects" },
    ],
    [isSpanish],
  )

  const SelectedProofIcon = selectedProof.icon

  return (
    <main className="overflow-hidden pt-24">
      <section className="relative px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_30%_10%,hsl(var(--primary)/0.18),transparent_34%),linear-gradient(to_bottom,hsl(var(--primary)/0.08),transparent)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-primary">
              {aboutPage.aboutLabel}
            </p>
            <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              {aboutPage.heroTitle}{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                {aboutPage.heroHighlight}
              </span>
            </h1>
            <p className="mb-6 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              {aboutPage.heroDescription}
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {aboutPage.heroDescription2}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href={isSpanish ? "/es/contact" : "/contact"}>
                  {isSpanish ? "Hablemos de tu web" : "Talk about your website"}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-background/60">
                <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 size-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full">
                <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 size-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="relative rounded-[2rem] border border-border/70 bg-card p-5 shadow-2xl shadow-black/5 md:p-6">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative rounded-[1.5rem] border border-border/70 bg-background/80 p-6">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Sparkles className="size-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">OliveroDev</p>
                    <p className="text-sm text-muted-foreground">
                      {isSpanish ? "Especialista web senior" : "Senior web specialist"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {careerStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-border/70 bg-card/80 p-4">
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <BadgeCheck className="size-4 text-primary" />
                    {isSpanish ? "No agencia, no handoffs" : "No agency, no handoffs"}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {isSpanish
                      ? "La persona que audita, prioriza y construye es la misma persona responsable por el resultado."
                      : "The person auditing, prioritizing and building is the same person accountable for the outcome."}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                {isSpanish ? "Por qué confiar" : "Why trust me"}
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                {isSpanish ? "Pruebas conectadas a problemas reales" : "Proof connected to real business problems"}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-3">
              {proofCards.map((card, index) => {
                const Icon = card.icon
                const active = index === activeProof
                return (
                  <button
                    key={card.label}
                    type="button"
                    onClick={() => setActiveProof(index)}
                    onMouseEnter={() => setActiveProof(index)}
                    className={cn(
                      "group rounded-3xl border p-5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      active
                        ? "border-primary/50 bg-primary text-primary-foreground shadow-xl shadow-primary/15"
                        : "border-border/70 bg-card hover:-translate-y-1 hover:border-primary/30",
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className={cn("flex size-11 items-center justify-center rounded-2xl", active ? "bg-primary-foreground/15" : "bg-primary/10 text-primary")}>
                        <Icon className="size-5" />
                      </span>
                      <span className="font-bold">{isSpanish ? card.labelEs : card.label}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            <ScrollReveal delay={100}>
              <div className="h-full rounded-[2rem] border border-border/70 bg-card p-6 md:p-8">
                <div className="mb-8 flex size-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <SelectedProofIcon className="size-8" />
                </div>
                <h3 className="mb-4 text-3xl font-bold tracking-tight">
                  {isSpanish ? selectedProof.titleEs : selectedProof.title}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {isSpanish ? selectedProof.descriptionEs : selectedProof.description}
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {operatingPrinciples.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border/70 bg-background/70 p-4">
                      <p className="font-bold text-foreground">{isSpanish ? item.titleEs : item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {isSpanish ? item.descriptionEs : item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                {about.experienceTitle}
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                {aboutPage.workedTitle} <span className="text-primary">{aboutPage.workedHighlight}</span>
              </h2>
            </div>
            <p className="max-w-xl text-muted-foreground">
              {isSpanish
                ? "Haz hover o click en una experiencia para ver el contexto técnico y comercial detrás del trabajo."
                : "Hover or click an experience to see the technical and business context behind the work."}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-3">
              {experience.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  onClick={() => setActiveExperience(index)}
                  onMouseEnter={() => setActiveExperience(index)}
                  className={cn(
                    "w-full rounded-3xl border p-5 text-left transition-all duration-300",
                    activeExperience === index
                      ? "border-primary/50 bg-primary text-primary-foreground shadow-xl shadow-primary/15"
                      : "border-border/70 bg-card hover:-translate-y-1 hover:border-primary/30",
                  )}
                >
                  <p className="text-xs font-bold uppercase tracking-widest opacity-75">{item.period}</p>
                  <h3 className="mt-2 text-lg font-bold">{item.company}</h3>
                  <p className="mt-1 text-sm opacity-80">{item.position}</p>
                </button>
              ))}
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card p-6 md:p-8">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Building2 className="size-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    {selectedExperience.period} · {selectedExperience.location}
                  </p>
                  <h3 className="mt-2 text-3xl font-bold tracking-tight">{selectedExperience.company}</h3>
                  <p className="mt-1 text-primary">{selectedExperience.position}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">{selectedExperience.description}</p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground">
                    <Code2 className="size-4 text-primary" />
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-border/70 bg-background px-3 py-1 text-sm text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground">
                    <Layers3 className="size-4 text-primary" />
                    {isSpanish ? "Impacto" : "Impact"}
                  </p>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {selectedExperience.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-border/70 bg-card p-6 md:p-8">
            <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Github className="size-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              {isSpanish ? "Código público, criterio privado" : "Public code, private judgment"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {isSpanish
                ? "GitHub no vende por sí solo, pero ayuda a demostrar que hay una práctica técnica real detrás del discurso: plugins, repos, mantenimiento y criterio de implementación."
                : "GitHub does not sell by itself, but it helps show there is real technical practice behind the positioning: plugins, repos, maintenance and implementation judgment."}
            </p>
            <Button asChild className="mt-6 rounded-full">
              <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                {isSpanish ? "Ver GitHub" : "View GitHub"}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-foreground p-6 text-background md:p-8">
            <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-background/10">
              <GraduationCap className="size-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">{about.educationTitle}</h2>
            {education.map((item) => (
              <div key={item.school} className="mt-6 rounded-2xl bg-background/10 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-background/60">{item.period}</p>
                <h3 className="mt-2 text-xl font-bold">{item.degree}</h3>
                <p className="mt-1 text-sm text-background/70">{item.school} · {item.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-background/75">{item.description}</p>
              </div>
            ))}
            <div className="mt-6 flex items-center gap-2 text-sm text-background/70">
              <Globe2 className="size-4" />
              {isSpanish ? "Disponible remoto para proyectos internacionales" : "Available remotely for international projects"}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
