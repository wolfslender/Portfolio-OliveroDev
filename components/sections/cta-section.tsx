"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useCTASection } from "@/hooks/use-cta-section"
import { localizePath } from "@/lib/i18n-routing"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

interface CTASectionProps {
  locale?: "en" | "es"
}

export function CTASection({ locale }: CTASectionProps = {}) {
  const translatedCtaSection = useCTASection()
  const pathname = usePathname()
  const ctaSection = locale === "es" ? es.cta : locale === "en" ? en.cta : translatedCtaSection

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative bg-card border border-border/60 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="relative p-8 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
                {ctaSection.titlePrefix}{" "}
                <span className="text-primary">{ctaSection.titleHighlight}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                {ctaSection.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all hover:shadow-lg hover:shadow-primary/15 active:scale-[0.98]"
                >
                  <Link href={localizePath(pathname || "/", "/contact")}>
                    {ctaSection.primaryButton}
                    <MessageSquare className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 font-bold border-border hover:bg-muted/50 transition-all active:scale-[0.98]"
                >
                  <Link href={localizePath(pathname || "/", "/contact?audit=true")}>
                    {ctaSection.secondaryButton}
                    <ArrowRight className="ml-2 w-4 h-4" />
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
