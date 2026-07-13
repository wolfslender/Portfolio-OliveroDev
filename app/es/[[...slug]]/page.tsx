import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { siteConfig } from "@/lib/config"
import { projects } from "@/lib/data"
import { HeroSection } from "@/components/sections/hero-section"
import { TrustedBySection } from "@/components/sections/trusted-by-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { HomeOffersSection } from "@/components/sections/home-offers-section"
import { FeaturedCaseStudy } from "@/components/sections/featured-case-study"
import { ProcessSection } from "@/components/sections/process-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import { ServicesContent } from "@/components/pages/services-content"
import WorkContent from "@/components/pages/work-content"
import PluginsContent from "@/components/pages/plugins-content"
import PrivacyContent from "@/components/pages/privacy-content"
import TermsContent from "@/components/pages/terms-content"
import { ServiceLandingContent } from "@/components/pages/service-landing-content"
import { ContactSection } from "@/components/sections/contact-section"
import { AboutSection } from "@/components/sections/about-section"
import GlossaryPage from "@/app/glossary/page"
import { getLandingPageEsBySlug } from "@/lib/landing-pages-es"

const routes = ["", "about", "blog", "contact", "glossary", "plugins", "privacy", "services", "terms", "work", "website-audit", "wordpress-speed-optimization", "wordpress-security", "hacked-wordpress-recovery", "website-migration", "wordpress-maintenance"]

const metadataByRoute: Record<string, Metadata> = {
  "": {
    title: "Alexis Olivero - Rendimiento, seguridad y modernizacion web",
    description: "Ayudo a empresas establecidas a convertir webs lentas, vulnerables o dificiles de administrar en plataformas rapidas, seguras y confiables.",
  },
  about: {
    title: "Sobre mi",
    description: "Conoce a Alexis Olivero, especialista web senior enfocado en rendimiento, seguridad, mantenimiento y entrega digital.",
  },
  blog: {
    title: "Blog",
    description: "Guias practicas sobre desarrollo web, rendimiento, SEO tecnico, WordPress y mantenimiento web.",
  },
  contact: {
    title: "Solicita una auditoria web o consulta tecnica",
    description: "Comparte tu web, plataforma, problema principal, timeline y presupuesto para recibir el proximo paso mas claro.",
  },
  glossary: {
    title: "Glosario de desarrollo web",
    description: "Respuestas claras a preguntas comunes sobre desarrollo web, SEO, rendimiento y arquitectura frontend.",
  },
  plugins: {
    title: "Plugins WordPress",
    description: "Plugins premium de WordPress disenados para resolver problemas reales con codigo limpio y soporte dedicado.",
  },
  privacy: {
    title: "Politica de privacidad",
    description: "Como se manejan y protegen tus datos en este sitio.",
  },
  services: {
    title: "Auditoria, optimizacion, seguridad y migracion web",
    description: "Auditorias, optimizacion de rendimiento, seguridad, recuperacion, migraciones, builds y soporte tecnico continuo.",
  },
  terms: {
    title: "Terminos de servicio",
    description: "Reglas y condiciones para el uso de este sitio web.",
  },
  work: {
    title: "Portafolio y casos de estudio",
    description: "Proyectos y casos reales de desarrollo web con React, Next.js, WordPress, Webflow y enfoque en rendimiento.",
  },
  "website-audit": {
    title: "Auditoría web y plan de acción — Alexis Olivero",
    description: "Auditoría técnica y de conversión para negocios que saben que su sitio tiene problemas pero no saben qué arreglar primero.",
  },
  "wordpress-speed-optimization": {
    title: "Optimización de Velocidad WordPress — Alexis Olivero",
    description: "Haz que tu sitio WordPress sea más rápido sin reconstruir todo. Auditoría de rendimiento, revisión de plugins, optimización de imágenes y mejoras Core Web Vitals.",
  },
  "wordpress-security": {
    title: "Seguridad WordPress — Alexis Olivero",
    description: "Refuerza tu sitio WordPress antes de que un riesgo pequeño se convierta en un incidente real. Revisión de seguridad, limpieza de accesos y hardening básico.",
  },
  "hacked-wordpress-recovery": {
    title: "Recuperación WordPress Hackeado — Alexis Olivero",
    description: "Recupera tu WordPress hackeado y cierra la puerta detrás del atacante. Limpieza de malware, parcheo de vulnerabilidades y hardening post-recuperación.",
  },
  "website-migration": {
    title: "Servicios de Migración Web — Alexis Olivero",
    description: "Migra o reconstruye tu sitio web sin perder lo que importa. Estrategia de migración, transferencia de contenido, plan de redirecciones y soporte de lanzamiento.",
  },
  "wordpress-maintenance": {
    title: "Servicios de Mantenimiento WordPress — Alexis Olivero",
    description: "Mantén tu WordPress saludable sin contratar un desarrollador full-time. Mantenimiento mensual, actualizaciones, revisiones de seguridad y recomendaciones técnicas.",
  },
}

type PageProps = {
  params: Promise<{ slug?: string[] }>
}

export function generateStaticParams() {
  return routes.map((route) => ({ slug: route ? [route] : [] }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug = [] } = await params
  const route = slug[0] || ""
  const canonicalPath = route ? `/es/${route}/` : "/es/"

  return {
    ...metadataByRoute[route],
    alternates: {
      canonical: `${siteConfig.url}${canonicalPath}`,
      languages: {
        en: `${siteConfig.url}${route ? `/${route}/` : "/"}`,
        es: `${siteConfig.url}${canonicalPath}`,
        "x-default": `${siteConfig.url}${route ? `/${route}/` : "/"}`,
      },
    },
  }
}

function SpanishHome() {
  const featuredProject = projects.find((project) => project.slug === "co-active-training-institute")!

  return (
    <main className="overflow-x-hidden">
      <HeroSection locale="es" />
      <TrustedBySection locale="es" />
      <ProblemSection locale="es" />
      <HomeOffersSection locale="es" />
      <FeaturedCaseStudy project={featuredProject} locale="es" />
      <ProcessSection locale="es" />
      <TestimonialsSection locale="es" />
      <CTASection locale="es" />
    </main>
  )
}

export default async function SpanishPage({ params }: PageProps) {
  const { slug = [] } = await params
  const route = slug[0] || ""

  if (slug.length > 1 || !routes.includes(route)) notFound()

  if (route === "") return <SpanishHome />
  if (route === "about") return <AboutSection />
  if (route === "services") return <ServicesContent />
  if (route === "work") return <WorkContent />
  if (route === "plugins") return <PluginsContent />
  if (route === "privacy") return <PrivacyContent />
  if (route === "terms") return <TermsContent />
  if (route === "glossary") return <GlossaryPage />
  const landingPageEs = getLandingPageEsBySlug(route)
  if (landingPageEs) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: landingPageEs.faq.items.map((item: { question: string; answer: string }) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
        <ServiceLandingContent data={landingPageEs} locale="es" />
      </>
    )
  }
  if (route === "contact") {
    return (
      <div className="pt-24 pb-20">
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <ContactSection />
        </Suspense>
      </div>
    )
  }

  if (route === "blog") {
    const BlogPage = (await import("@/app/blog/page")).default
    return <BlogPage />
  }

  notFound()
}
