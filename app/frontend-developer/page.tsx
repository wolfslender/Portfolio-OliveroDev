import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Download, ExternalLink, Github } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Senior Frontend Developer",
  description: "Frontend developer profile for Alexis Olivero: React, Next.js, TypeScript, accessible UI, performance, CMS integrations, and production web delivery.",
  alternates: {
    canonical: `${siteConfig.url}/frontend-developer/`,
    languages: {
      en: `${siteConfig.url}/frontend-developer/`,
      es: `${siteConfig.url}/es/frontend-developer/`,
      "x-default": `${siteConfig.url}/frontend-developer/`,
    },
  },
  openGraph: {
    title: "Alexis Olivero — Senior Frontend Developer",
    description: "React, Next.js, TypeScript, accessible UI, web performance, and production delivery.",
    url: `${siteConfig.url}/frontend-developer/`,
  },
}

const strengths = [
  ["React & Next.js", "Component architecture, App Router, server/client boundaries, data-driven UI, and reusable design systems."],
  ["TypeScript & JavaScript", "Maintainable frontend code, API integrations, forms, stateful interfaces, and progressive enhancement."],
  ["Accessibility & UX", "Semantic HTML, keyboard-friendly interactions, responsive layouts, clear hierarchy, and WCAG-aware implementation."],
  ["Performance", "Core Web Vitals, image delivery, rendering strategy, bundle awareness, caching, and practical frontend profiling."],
  ["CMS & platforms", "Production experience with WordPress, Webflow, Sanity, PHP templates, content workflows, and migrations."],
  ["Cross-functional delivery", "Remote collaboration with design, marketing, content, backend, learning-platform, and infrastructure teams."],
]

const strengthsEs = [
  ["React y Next.js", "Arquitectura de componentes, App Router, límites entre servidor y cliente, interfaces basadas en datos y sistemas de diseño reutilizables."],
  ["TypeScript y JavaScript", "Código frontend mantenible, integraciones con APIs, formularios, interfaces con estado y mejora progresiva."],
  ["Accesibilidad y UX", "HTML semántico, interacciones por teclado, layouts responsivos, jerarquía clara e implementación consciente de WCAG."],
  ["Rendimiento", "Core Web Vitals, entrega de imágenes, estrategias de renderizado, optimización de bundles, caché y análisis práctico del frontend."],
  ["CMS y plataformas", "Experiencia en producción con WordPress, Webflow, Sanity, templates PHP, flujos de contenido y migraciones."],
  ["Trabajo multidisciplinario", "Colaboración remota con diseño, marketing, contenido, backend, plataformas educativas e infraestructura."],
]

const selectedWork = [
  {
    title: "Departamento de Educación de Puerto Rico",
    type: "Government website administration",
    description: "For three years, I administered Puerto Rico's Department of Education website: creating landing pages, publishing government documents and daily content updates, maintaining and updating plugins, and implementing website security measures as requirements evolved.",
    href: "/work/departamento-de-educacion-pr/",
    label: "View project context",
    icon: ExternalLink,
  },
  {
    title: "Media Audit",
    type: "WordPress product",
    description: "An independently designed and maintained plugin with batch scanning, AJAX workflows, filtering, CSV exports, page-builder integrations, risk scoring, and a recoverable cleanup workflow.",
    href: "https://github.com/oliverodev/media-audit",
    label: "View source",
    icon: Github,
  },
  {
    title: "Co-Active Training Institute",
    type: "Global production platform",
    description: "Ongoing frontend and WordPress work across responsive UI, navigation, performance, accessibility, SEO, maintenance, and coordination with connected platform teams.",
    href: "/work/co-active-training-institute/",
    label: "View project context",
    icon: ExternalLink,
  },
]

const selectedWorkEs = [
  {
    title: "Departamento de Educación de Puerto Rico",
    type: "Administración de sitio gubernamental",
    description: "Durante tres años administré el sitio del Departamento de Educación de Puerto Rico: creaba páginas de destino, publicaba documentos gubernamentales y actualizaciones diarias, mantenía plugins e implementaba medidas de seguridad según evolucionaban los requisitos.",
    href: "/es/work/",
    label: "Ver contexto del proyecto",
    icon: ExternalLink,
  },
  {
    title: "Media Audit",
    type: "Producto WordPress",
    description: "Plugin diseñado y mantenido de forma independiente con escaneo por lotes, flujos AJAX, filtros, exportación CSV, integraciones con constructores visuales, puntuación de riesgo y un sistema de limpieza recuperable.",
    href: "https://github.com/oliverodev/media-audit",
    label: "Ver código fuente",
    icon: Github,
  },
  {
    title: "Co-Active Training Institute",
    type: "Plataforma global en producción",
    description: "Trabajo continuo de frontend y WordPress en interfaces responsivas, navegación, rendimiento, accesibilidad, SEO, mantenimiento y coordinación con equipos de plataformas conectadas.",
    href: "/work/co-active-training-institute/",
    label: "Ver contexto del proyecto",
    icon: ExternalLink,
  },
]

export function FrontendDeveloperContent({ locale = "en" }: { locale?: "en" | "es" }) {
  const isSpanish = locale === "es"
  const content = isSpanish ? {
    eyebrow: "Disponible para oportunidades frontend",
    title: "Desarrollador frontend senior que entrega",
    highlight: "interfaces listas para producción.",
    intro: "Construyo experiencias web responsivas y accesibles con React, Next.js, TypeScript, WordPress y Webflow. Desde 2017 he trabajado en plataformas gubernamentales, de salud, empresariales y de formación global.",
    download: "Descargar CV",
    linkedin: "Ver LinkedIn",
    discuss: "Hablar sobre una posición",
    summary: "Resumen profesional",
    experience: "Experiencia",
    experienceValue: "8+ años profesionales",
    location: "Ubicación",
    languages: "Idiomas",
    languagesValue: "Español · Inglés profesional",
    focus: "Enfoque",
    focusValue: "Frontend, rendimiento y accesibilidad",
    availability: "Disponible para posiciones frontend senior, full-stack con enfoque frontend y plataformas web, en remoto o con reubicación.",
    strengthsEyebrow: "Lo que aporto",
    strengthsTitle: "Profundidad frontend con experiencia real en plataformas",
    evidenceEyebrow: "Evidencia seleccionada",
    evidenceTitle: "Código, productos y trabajo en producción",
    hiring: "¿Estás contratando?",
    hiringTitle: "Hablemos del equipo y de los problemas que necesitas resolver.",
    contact: "Contactar a Alexis",
  } : {
    eyebrow: "Open to frontend opportunities",
    title: "Senior frontend developer who ships",
    highlight: "production-ready interfaces.",
    intro: "I build responsive, accessible web experiences with React, Next.js, TypeScript, WordPress, and Webflow. Since 2017, I have delivered work across government, healthcare, enterprise, and global training platforms.",
    download: "Download résumé",
    linkedin: "View LinkedIn",
    discuss: "Discuss a role",
    summary: "Candidate summary",
    experience: "Experience",
    experienceValue: "8+ years professionally",
    location: "Location",
    languages: "Languages",
    languagesValue: "Spanish · Professional English",
    focus: "Focus",
    focusValue: "Frontend delivery, performance, accessibility",
    availability: "Available for senior frontend, frontend-focused full-stack, and web platform roles with remote or relocation options.",
    strengthsEyebrow: "What I bring",
    strengthsTitle: "Frontend depth with real platform context",
    evidenceEyebrow: "Selected evidence",
    evidenceTitle: "Code, products, and production work",
    hiring: "Hiring?",
    hiringTitle: "Let’s talk about the team and the problems you need solved.",
    contact: "Contact Alexis",
  }
  const localizedStrengths = isSpanish ? strengthsEs : strengths
  const localizedWork = isSpanish ? selectedWorkEs : selectedWork
  const basePath = isSpanish ? "/es/frontend-developer/" : "/frontend-developer/"

  return (
    <main className="overflow-hidden pt-24">
      <BreadcrumbSchema items={[{ name: isSpanish ? "Inicio" : "Home", path: isSpanish ? "/es/" : "/" }, { name: isSpanish ? "Desarrollador Frontend" : "Frontend Developer", path: basePath }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            url: `${siteConfig.url}${basePath}`,
            mainEntity: {
              "@type": "Person",
              name: siteConfig.author,
              jobTitle: isSpanish ? "Desarrollador Frontend Senior" : "Senior Frontend Developer",
              sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
              knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Web Accessibility", "Web Performance", "WordPress", "Webflow"],
            },
          }),
        }}
      />

      <section className="relative px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_25%_10%,hsl(var(--primary)/0.16),transparent_36%),linear-gradient(to_bottom,hsl(var(--primary)/0.06),transparent)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <p className="eyebrow mb-5">{content.eyebrow}</p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              {content.title} <span className="text-primary">{content.highlight}</span>
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              {content.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/Alexis_Olivero_Senior_Frontend_CV.pdf" target="_blank" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90">
                <Download className="mr-2 size-4" /> {content.download}
              </Link>
              <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 font-bold hover:border-primary/40">
                {content.linkedin} <ExternalLink className="ml-2 size-4" />
              </Link>
              <Link href="mailto:olivero_canario@hotmail.com?subject=Frontend%20opportunity" className="inline-flex h-12 items-center justify-center rounded-full px-6 font-bold text-primary hover:bg-primary/5">
                {content.discuss} <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-2xl shadow-black/5 md:p-8" aria-label={content.summary}>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">{content.summary}</p>
            <dl className="mt-6 space-y-5">
              <div><dt className="text-sm text-muted-foreground">{content.experience}</dt><dd className="mt-1 text-xl font-bold">{content.experienceValue}</dd></div>
              <div><dt className="text-sm text-muted-foreground">{content.location}</dt><dd className="mt-1 text-xl font-bold">Santo Domingo · Remote</dd></div>
              <div><dt className="text-sm text-muted-foreground">{content.languages}</dt><dd className="mt-1 text-xl font-bold">{content.languagesValue}</dd></div>
              <div><dt className="text-sm text-muted-foreground">{content.focus}</dt><dd className="mt-1 text-xl font-bold">{content.focusValue}</dd></div>
            </dl>
            <div className="mt-7 border-t border-border/60 pt-6 text-sm leading-relaxed text-muted-foreground">
              {content.availability}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">{content.strengthsEyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{content.strengthsTitle}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {localizedStrengths.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-border/60 bg-card p-6">
                <CheckCircle2 className="size-5 text-primary" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">{content.evidenceEyebrow}</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{content.evidenceTitle}</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {localizedWork.map((project) => {
              const Icon = project.icon
              return (
                <article key={project.title} className="flex flex-col rounded-3xl border border-border/70 bg-card p-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{project.type}</p>
                  <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>
                  <Link href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-7 inline-flex items-center font-bold text-primary">
                    {project.label} <Icon className="ml-2 size-4" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-foreground p-8 text-background md:flex-row md:items-center md:p-12">
          <div><p className="text-sm font-bold uppercase tracking-widest opacity-70">{content.hiring}</p><h2 className="mt-3 text-3xl font-bold">{content.hiringTitle}</h2></div>
          <Link href="mailto:olivero_canario@hotmail.com?subject=Frontend%20opportunity" className="inline-flex h-12 shrink-0 items-center rounded-full bg-background px-6 font-bold text-foreground">{content.contact} <ArrowRight className="ml-2 size-4" /></Link>
        </div>
      </section>
    </main>
  )
}

export default function FrontendDeveloperPage() {
  return <FrontendDeveloperContent locale="en" />
}
