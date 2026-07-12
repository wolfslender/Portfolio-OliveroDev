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
import ServicesContent from "@/components/pages/services-content"
import WorkContent from "@/components/pages/work-content"
import PluginsContent from "@/components/pages/plugins-content"
import PrivacyContent from "@/components/pages/privacy-content"
import TermsContent from "@/components/pages/terms-content"
import { ContactSection } from "@/components/sections/contact-section"
import { AboutSection } from "@/components/sections/about-section"
import GlossaryPage from "@/app/glossary/page"

const routes = ["", "about", "blog", "contact", "glossary", "plugins", "privacy", "services", "terms", "work"]

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
      <HeroSection />
      <TrustedBySection />
      <ProblemSection />
      <HomeOffersSection />
      <FeaturedCaseStudy project={featuredProject} />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
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
