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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="p-8 md:p-12 bg-card border border-border/60">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need a WordPress Plugin?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                I also build premium WordPress plugins for storage optimization, media management, and more.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl" role="img" aria-label="clean">🧹</span>
                  <div>
                    <h3 className="text-xl font-bold">Media Audit</h3>
                    <p className="text-sm text-muted-foreground">Clean unused media files safely</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                    <span>Smart detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                    <span>Storage analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                    <span>Trash system</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                    <span>Premium support</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="px-6 font-bold">
                  <Link href="/plugins">
                    View All Plugins
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="px-6 font-bold border-2">
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
