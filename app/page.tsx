import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { projects } from "@/lib/data"
import { HeroSection } from "@/components/sections/hero-section"
import { TechMarquee } from "@/components/sections/tech-marquee"
import { ProblemSection } from "@/components/sections/problem-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
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

      {/* Plugins Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-primary/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Need a <span className="text-primary">WordPress Plugin?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              I also build premium WordPress plugins for storage optimization, media management, and more.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-border/50 bg-background/60">
                Smart detection
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-border/50 bg-background/60">
                Storage analysis
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-border/50 bg-background/60">
                Trash system
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-border/50 bg-background/60">
                Premium support
              </span>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Media Audit</h3>
              <p className="text-sm text-muted-foreground mb-6">Clean unused media files safely</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full h-14 px-8 font-bold group shadow-xl hover:shadow-primary/20 transition-all">
                  <Link href="/plugins">
                    View All Plugins
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 font-bold border-2">
                  <Link href="https://wordpress.org/plugins/oliverodev-media-audit/" target="_blank">
                    Try Free Version
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Act: The Call */}
      <CTASection />
    </main>
  )
}
