"use client"

import { BarChart3 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useHero } from "@/hooks/use-hero"
import { SocialLinks } from "@/components/social-links"
import { InteractiveGradient } from "@/components/interactive-gradient"

export function HeroSection() {
  const hero = useHero()

  return (
    <section className="relative min-h-[92svh] flex items-center justify-center overflow-hidden bg-background antialiased">
      <InteractiveGradient />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 md:pt-40">
        <div className="space-y-8 max-w-5xl mx-auto">

          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-balance leading-[1.02]">
              {hero.title.prefix}{" "}
              <span className="text-primary">
                {hero.title.highlight}
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold transition-all hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98]"
            >
              <Link href="/contact?audit=true">
                <BarChart3 className="mr-2 h-5 w-5" />
                {hero.buttons.secondary}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-14 px-10 text-lg font-bold border-2 border-primary/30 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all active:scale-[0.98]"
            >
              <Link href="/contact">
                {hero.buttons.primary}
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2">
            {hero.proof.map((item) => (
              <span key={item} className="text-sm font-medium text-muted-foreground before:content-['✓'] before:text-primary before:mr-2">
                {item}
              </span>
            ))}
          </div>

          <div className="pt-2 flex flex-col items-center gap-3">
            <p className="text-sm text-muted-foreground font-medium">
              {hero.location}
            </p>
            <div className="flex justify-center">
              <SocialLinks iconClassName="w-5 h-5 hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
