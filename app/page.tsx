import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { projects } from "@/lib/data"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { HomeOffersSection } from "@/components/sections/home-offers-section"
import dynamic from 'next/dynamic'

const FeaturedCaseStudy = dynamic(() => import("@/components/sections/featured-case-study").then(mod => mod.FeaturedCaseStudy))
const ProcessSection = dynamic(() => import("@/components/sections/process-section").then(mod => mod.ProcessSection))
const TrustedBySection = dynamic(() => import("@/components/sections/trusted-by-section").then(mod => mod.TrustedBySection))
const CTASection = dynamic(() => import("@/components/sections/cta-section").then(mod => mod.CTASection))

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
  const featuredProject = projects.find(p => p.slug === "co-active-training-institute")!

  return (
    <main className="overflow-x-hidden">
      <HeroSection locale="en" />
      <TrustedBySection locale="en" />
      <ProblemSection locale="en" />
      <HomeOffersSection locale="en" />
      <FeaturedCaseStudy project={featuredProject} locale="en" />
      <ProcessSection locale="en" />
      <TestimonialsSection locale="en" />
      <CTASection locale="en" />
    </main>
  )
}
