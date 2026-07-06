import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { projects } from "@/lib/data"
import { HeroSection } from "@/components/sections/hero-section"
import { TechMarquee } from "@/components/sections/tech-marquee"
import { ProblemSection } from "@/components/sections/problem-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { HomePluginsSection } from "@/components/sections/home-plugins-section"
import dynamic from 'next/dynamic'

const FeaturedCaseStudy = dynamic(() => import("@/components/sections/featured-case-study").then(mod => mod.FeaturedCaseStudy))
const ProcessSection = dynamic(() => import("@/components/sections/process-section").then(mod => mod.ProcessSection))
const StatsSection = dynamic(() => import("@/components/sections/stats-section").then(mod => mod.StatsSection))
const FeaturedProjects = dynamic(() => import("@/components/sections/featured-projects").then(mod => mod.FeaturedProjects))
const TrustedBySection = dynamic(() => import("@/components/sections/trusted-by-section").then(mod => mod.TrustedBySection))
const CTASection = dynamic(() => import("@/components/sections/cta-section").then(mod => mod.CTASection))

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
}

export default function Home() {
  const featuredProject = projects.find(p => p.slug === "co-active-training-institute")!

  return (
    <main className="overflow-x-hidden">
      {/* Act 1: The Hook */}
      <HeroSection />

      <TechMarquee />

      {/* Act 2: The Problem */}
      <ProblemSection />

      {/* Act 3: The Proof */}
      <FeaturedCaseStudy project={featuredProject} />

      {/* Act 4: The Method */}
      <ProcessSection />

      {/* Act 5: The Evidence */}
      <StatsSection />

      <FeaturedProjects />

      <TrustedBySection />

      {/* Act 6: Social Proof */}
      <TestimonialsSection />

      <HomePluginsSection />

      {/* Final Act: The Call */}
      <CTASection />
    </main>
  )
}
