import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

type Locale = "en" | "es"

const content = {
  en: {
    eyebrow: "About Alexis Olivero",
    title: "Technical depth for websites that are",
    highlight: "too important to improvise.",
    intro: "I work directly with businesses and teams when a website is slow, vulnerable, difficult to maintain, or ready for its next stage.",
    supporting: "My role can begin with an audit, a difficult fix, or a migration. The principle stays the same: understand the real problem, make the priorities visible, and implement without adding unnecessary complexity.",
    primaryCta: "See selected work",
    secondaryCta: "Discuss your website",
    cv: "Download CV",
    role: "Senior Frontend Developer",
    location: "Santo Domingo · Working remotely",
    directTitle: "Direct senior involvement",
    directDescription: "The person diagnosing the problem is also responsible for the technical decisions and delivery.",
    stats: [
      { value: "Since 2017", label: "Professional web work" },
      { value: "150K+", label: "Users on a platform I support" },
      { value: "Security+", label: "Certified security foundation" },
    ],
    focusLabel: "Current focus",
    focus: ["Website audits", "WordPress performance and security", "Migrations and ongoing care"],
    valueEyebrow: "Where I add value",
    valueTitle: "Diagnosis, implementation, and continuity in one relationship.",
    valueDescription: "The work is most useful when technical decisions remain connected to the business reason behind them.",
    capabilities: [
      {
        number: "01",
        title: "Find the real constraint",
        description: "I inspect performance, security, hosting, plugins, content structure, and user friction before recommending a rebuild.",
        icon: Search,
      },
      {
        number: "02",
        title: "Work across the stack",
        description: "WordPress, frontend code, integrations, servers, SEO foundations, and content workflows are treated as one system.",
        icon: Wrench,
      },
      {
        number: "03",
        title: "Protect what happens next",
        description: "Launch is not the finish line. Documentation, monitoring, maintenance, and measured improvements keep the platform dependable.",
        icon: ShieldCheck,
      },
    ],
    experienceEyebrow: "Selected experience",
    experienceTitle: "The work behind the point of view.",
    experienceDescription: "Each role added a different layer: public-sector responsibility, healthcare usability, enterprise delivery, and long-term WordPress ownership.",
    experiences: [
      {
        period: "2025 — Present",
        company: "Co-Active Training Institute",
        role: "Frontend Web Developer · Part-time contractor",
        description: "Ongoing support for a global WordPress training platform with a reported community of 150K+ users across 60+ countries.",
        scope: ["Performance and stability", "Security and access reviews", "WordPress, PHP, SEO, and platform coordination"],
      },
      {
        period: "2022 — 2025",
        company: "TRUENORTH Corp.",
        role: "Frontend Web Developer · Employee",
        description: "Three years delivering and maintaining WordPress and Webflow projects, including public-sector work and Azure-hosted environments.",
        scope: ["Responsive implementation", "CMS and migration work", "SEO, maintenance, and delivery support"],
      },
      {
        period: "2021 — 2022",
        company: "Dmed health care",
        role: "Frontend Developer · Remote",
        description: "Built responsive clinical interfaces and content experiences for a healthcare organization, with an emphasis on clearer user journeys.",
        scope: ["Frontend implementation", "WordPress and dynamic forms", "Healthcare usability"],
      },
      {
        period: "2017 — 2018",
        company: "CYBERNETIPS",
        role: "Full-stack Web Developer · Remote",
        description: "Early professional work across web development, hosting environments, maintenance, and server administration.",
        scope: ["Web development", "Hosting and server operations", "Maintenance and technical support"],
      },
    ],
    foundationEyebrow: "Foundation",
    foundationTitle: "Technical roots, practical judgment.",
    educationLabel: "Education",
    educationTitle: "Technical studies in Computer Science",
    educationSchool: "Liceo Minerva Mirabal · Santo Domingo",
    educationDescription: "A foundation in programming and information systems, followed by continuous learning through production work.",
    certificationLabel: "Security discipline",
    certificationTitle: "CompTIA Security+ certified",
    certificationDescription: "Security is considered during access reviews, maintenance, recovery, infrastructure decisions, and everyday implementation.",
    principlesLabel: "Working principles",
    principles: [
      "Explain what matters now and what can wait.",
      "Prefer the smallest responsible solution.",
      "Keep progress and tradeoffs visible.",
    ],
    closingEyebrow: "A practical first step",
    closingTitle: "You do not need to know which service you need.",
    closingDescription: "Share the website and the problem you are seeing. I will help you identify the clearest next step before you commit to unnecessary work.",
    closingCta: "Request a website review",
  },
  es: {
    eyebrow: "Sobre Alexis Olivero",
    title: "Profundidad técnica para webs que son",
    highlight: "demasiado importantes para improvisar.",
    intro: "Trabajo directamente con empresas y equipos cuando una web es lenta, vulnerable, difícil de mantener o está lista para su próxima etapa.",
    supporting: "Mi participación puede comenzar con una auditoría, una corrección compleja o una migración. El principio es el mismo: entender el problema real, hacer visibles las prioridades e implementar sin añadir complejidad innecesaria.",
    primaryCta: "Ver trabajos seleccionados",
    secondaryCta: "Hablemos de tu web",
    cv: "Descargar CV",
    role: "Desarrollador frontend senior",
    location: "Santo Domingo · Trabajo remoto",
    directTitle: "Atención senior directa",
    directDescription: "La persona que diagnostica el problema también responde por las decisiones técnicas y la entrega.",
    stats: [
      { value: "Desde 2017", label: "Trabajo web profesional" },
      { value: "150K+", label: "Usuarios en una plataforma que apoyo" },
      { value: "Security+", label: "Base de seguridad certificada" },
    ],
    focusLabel: "Enfoque actual",
    focus: ["Auditorías web", "Rendimiento y seguridad WordPress", "Migraciones y mantenimiento continuo"],
    valueEyebrow: "Dónde aporto valor",
    valueTitle: "Diagnóstico, implementación y continuidad en una sola relación.",
    valueDescription: "El trabajo aporta más valor cuando las decisiones técnicas permanecen conectadas con la razón comercial que las origina.",
    capabilities: [
      {
        number: "01",
        title: "Encontrar la limitación real",
        description: "Reviso rendimiento, seguridad, alojamiento, plugins, estructura de contenido y fricción de uso antes de recomendar una reconstrucción.",
        icon: Search,
      },
      {
        number: "02",
        title: "Trabajar el sistema completo",
        description: "WordPress, frontend, integraciones, servidores, bases de SEO y flujos de contenido se consideran como un mismo sistema.",
        icon: Wrench,
      },
      {
        number: "03",
        title: "Proteger lo que sigue",
        description: "El lanzamiento no es la meta final. Documentación, seguimiento, mantenimiento y mejoras medidas mantienen la plataforma confiable.",
        icon: ShieldCheck,
      },
    ],
    experienceEyebrow: "Experiencia seleccionada",
    experienceTitle: "El trabajo que sustenta mi forma de pensar.",
    experienceDescription: "Cada etapa añadió una capa diferente: responsabilidad en el sector público, usabilidad en salud, entrega empresarial y gestión continua de WordPress.",
    experiences: [
      {
        period: "2025 — Actualidad",
        company: "Co-Active Training Institute",
        role: "Desarrollador web frontend · Contratista a tiempo parcial",
        description: "Soporte continuo para una plataforma global de formación en WordPress con una comunidad reportada de más de 150K usuarios en más de 60 países.",
        scope: ["Rendimiento y estabilidad", "Revisiones de seguridad y acceso", "WordPress, PHP, SEO y coordinación de plataforma"],
      },
      {
        period: "2022 — 2025",
        company: "TRUENORTH Corp.",
        role: "Desarrollador web frontend · Empleado",
        description: "Tres años creando y manteniendo proyectos en WordPress y Webflow, incluidos trabajos para el sector público y entornos alojados en Azure.",
        scope: ["Implementación adaptable", "CMS y migraciones", "SEO, mantenimiento y soporte de entrega"],
      },
      {
        period: "2021 — 2022",
        company: "Dmed health care",
        role: "Desarrollador frontend · Remoto",
        description: "Desarrollé interfaces clínicas adaptables y experiencias de contenido para una organización de salud, con énfasis en recorridos más claros.",
        scope: ["Implementación frontend", "WordPress y formularios dinámicos", "Usabilidad en salud"],
      },
      {
        period: "2017 — 2018",
        company: "CYBERNETIPS",
        role: "Desarrollador web full stack · Remoto",
        description: "Primera experiencia profesional en desarrollo web, entornos de alojamiento, mantenimiento y administración de servidores.",
        scope: ["Desarrollo web", "Alojamiento y operación de servidores", "Mantenimiento y soporte técnico"],
      },
    ],
    foundationEyebrow: "Fundamentos",
    foundationTitle: "Raíces técnicas, criterio práctico.",
    educationLabel: "Educación",
    educationTitle: "Estudios técnicos en Informática",
    educationSchool: "Liceo Minerva Mirabal · Santo Domingo",
    educationDescription: "Una base en programación y sistemas de información, seguida de aprendizaje continuo mediante trabajo en producción.",
    certificationLabel: "Disciplina de seguridad",
    certificationTitle: "Certificación CompTIA Security+",
    certificationDescription: "La seguridad se considera en revisiones de acceso, mantenimiento, recuperación, decisiones de infraestructura e implementación cotidiana.",
    principlesLabel: "Principios de trabajo",
    principles: [
      "Explicar qué importa ahora y qué puede esperar.",
      "Preferir la solución responsable más pequeña.",
      "Mantener visibles el progreso y las decisiones.",
    ],
    closingEyebrow: "Un primer paso práctico",
    closingTitle: "No necesitas saber qué servicio necesitas.",
    closingDescription: "Comparte la web y el problema que estás viendo. Te ayudaré a identificar el próximo paso más claro antes de que inviertas en trabajo innecesario.",
    closingCta: "Solicitar una revisión web",
  },
} as const

export function AboutSection({ locale = "en" }: { locale?: Locale }) {
  const copy = content[locale]
  const isSpanish = locale === "es"
  const routes = {
    work: isSpanish ? "/es/work/" : "/work/",
    contact: isSpanish ? "/es/contact/" : "/contact/",
  }

  return (
    <main className="overflow-hidden pt-24">
      <section className="relative border-b border-border/60 px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_82%_18%,hsl(var(--primary)/0.16),transparent_30%),linear-gradient(to_bottom,hsl(var(--primary)/0.06),transparent)]" />
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-primary">{copy.eyebrow}</p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              {copy.title} <span className="text-primary">{copy.highlight}</span>
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-foreground/80 md:text-2xl">{copy.intro}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{copy.supporting}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href={routes.work}>{copy.primaryCta}<ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-background/70">
                <Link href={routes.contact}>{copy.secondaryCta}</Link>
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <Link className="inline-flex items-center gap-2 transition-colors hover:text-foreground" href={siteConfig.links.github} target="_blank" rel="noopener noreferrer"><Github className="size-4" /> GitHub</Link>
              <Link className="inline-flex items-center gap-2 transition-colors hover:text-foreground" href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="size-4" /> LinkedIn</Link>
              <Link className="inline-flex items-center gap-2 transition-colors hover:text-foreground" href="/Alexis_Olivero_Senior_Frontend_CV.pdf" target="_blank" rel="noopener noreferrer"><Download className="size-4" /> {copy.cv}</Link>
            </div>
          </div>

          <aside className="relative lg:pt-3">
            <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-2xl shadow-black/5">
              <div className="relative border-b border-border/70 bg-foreground px-6 py-7 text-background">
                <div className="absolute right-5 top-1/2 -translate-y-1/2 font-mono text-[6.5rem] font-black leading-none tracking-[-0.12em] text-background/5" aria-hidden="true">AO</div>
                <div className="relative">
                  <p className="text-xl font-bold">Alexis Olivero</p>
                  <p className="mt-1 text-sm text-background/65">{copy.role}</p>
                  <p className="mt-5 flex items-center gap-2 text-sm text-background/75"><MapPin className="size-4" />{copy.location}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 border-b border-border/70">
                {copy.stats.map((stat) => (
                  <div key={stat.value} className="border-r border-border/70 p-4 last:border-r-0 md:p-5">
                    <p className="text-lg font-bold tracking-tight md:text-xl">{stat.value}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="p-6">
                <p className="flex items-center gap-2 font-semibold"><BadgeCheck className="size-5 text-primary" />{copy.directTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy.directDescription}</p>
                <div className="mt-6 border-t border-border/70 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{copy.focusLabel}</p>
                  <ul className="mt-4 space-y-3">
                    {copy.focus.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-foreground/80"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-border/70 pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">{copy.valueEyebrow}</p>
              <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.035em] md:text-5xl">{copy.valueTitle}</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">{copy.valueDescription}</p>
          </div>
          <div className="divide-y divide-border/70">
            {copy.capabilities.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.number} className="grid gap-5 py-9 md:grid-cols-[5rem_1fr_1.2fr] md:items-start md:py-11">
                  <p className="font-mono text-sm text-primary">{item.number}</p>
                  <h3 className="flex items-center gap-3 text-2xl font-bold tracking-tight"><Icon className="size-5 text-primary" />{item.title}</h3>
                  <p className="max-w-2xl leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/35 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">{copy.experienceEyebrow}</p>
            <h2 className="max-w-xl text-4xl font-bold tracking-[-0.035em] md:text-5xl">{copy.experienceTitle}</h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{copy.experienceDescription}</p>
          </div>
          <div className="border-t border-border/70">
            {copy.experiences.map((item) => (
              <article key={item.company} className="grid gap-5 border-b border-border/70 py-8 md:grid-cols-[9rem_1fr] md:py-10">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">{item.period}</p>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">{item.company}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{item.role}</p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{item.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.scope.map((scope) => <li key={scope} className="rounded-full border border-border/80 bg-background px-3 py-1.5 text-xs text-foreground/70">{scope}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">{copy.foundationEyebrow}</p>
            <h2 className="text-4xl font-bold tracking-[-0.035em] md:text-5xl">{copy.foundationTitle}</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border/70 bg-border/70 lg:grid-cols-3">
            <article className="bg-card p-7 md:p-8">
              <GraduationCap className="size-6 text-primary" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{copy.educationLabel}</p>
              <h3 className="mt-3 text-2xl font-bold">{copy.educationTitle}</h3>
              <p className="mt-2 text-sm text-primary">{copy.educationSchool}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{copy.educationDescription}</p>
            </article>
            <article className="bg-card p-7 md:p-8">
              <ShieldCheck className="size-6 text-primary" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{copy.certificationLabel}</p>
              <h3 className="mt-3 text-2xl font-bold">{copy.certificationTitle}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{copy.certificationDescription}</p>
            </article>
            <article className="bg-foreground p-7 text-background md:p-8">
              <BadgeCheck className="size-6 text-primary" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-background/55">{copy.principlesLabel}</p>
              <ul className="mt-5 space-y-4">
                {copy.principles.map((principle) => <li key={principle} className="flex gap-3 leading-relaxed text-background/80"><Check className="mt-1 size-4 shrink-0 text-primary" />{principle}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] bg-primary px-6 py-10 text-primary-foreground md:px-10 md:py-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground/65">{copy.closingEyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.03em] md:text-5xl">{copy.closingTitle}</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-primary-foreground/75">{copy.closingDescription}</p>
          </div>
          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <Link href={routes.contact}>{copy.closingCta}<ArrowRight className="ml-2 size-4" /></Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
