import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { projects } from "@/lib/data"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { FeaturedCaseStudy } from "@/components/sections/featured-case-study"
import { HomePluginsSection } from "@/components/sections/home-plugins-section"
import { HomeAuthoritySection } from "@/components/sections/home-authority-section"
import { TrustedBySection } from "@/components/sections/trusted-by-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Alexis Olivero — Website Performance, Security & Modernization",
  description: siteConfig.description,
  alternates: {
    canonical: `${siteConfig.url}/`,
    languages: {
      en: `${siteConfig.url}/`,
      es: `${siteConfig.url}/es/`,
      "x-default": `${siteConfig.url}/`,
    },
  },
}

export default function Home() {
  const selectedProjects = [
    projects.find(p => p.slug === "co-active-training-institute")!,
    projects.find(p => p.slug === "departamento-de-educacion-pr")!,
    projects.find(p => p.slug === "govvalue")!,
  ]

  return (
    <main className="overflow-x-hidden">
      <HeroSection locale="en" />
      <TrustedBySection locale="en" />
      <FeaturedCaseStudy projects={selectedProjects} locale="en" />
      <ProblemSection locale="en" />
      <HomePluginsSection locale="en" />
      <HomeAuthoritySection locale="en" />
      <CTASection locale="en" />
    </main>
  )
}
