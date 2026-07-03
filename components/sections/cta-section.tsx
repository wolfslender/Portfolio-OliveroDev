"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useCTASection } from "@/hooks/use-cta-section"

export function CTASection() {
  const ctaSection = useCTASection()
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="p-12 md:p-20 bg-card border border-border/60 text-center relative overflow-hidden">
            <div className="relative space-y-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-balance">
                {ctaSection.titlePrefix}{" "}
                <span className="text-primary">{ctaSection.titleHighlight}</span>
              </h2>

              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-balance">
                {ctaSection.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button asChild className="h-14 px-10 text-lg font-bold group">
                  <Link href="/contact">
                    {ctaSection.primaryButton} <MessageSquare className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-14 px-10 text-lg font-bold border-2 group">
                  <Link href="/contact?audit=true">
                    {ctaSection.secondaryButton} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
