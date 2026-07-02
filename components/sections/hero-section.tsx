"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useHero } from "@/hooks/use-hero"
import { SocialLinks } from "@/components/social-links"
import { InteractiveGradient } from "@/components/interactive-gradient"

export function HeroSection() {
  const hero = useHero()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background antialiased">
      <InteractiveGradient />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 md:pt-40">
        <div className="space-y-10 max-w-4xl mx-auto">

          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-balance leading-[1]">
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
                {hero.buttons.primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-14 px-10 text-lg font-bold border-2 hover:bg-muted/50 transition-all active:scale-[0.98]"
            >
              <Link href="/work">
                {hero.buttons.secondary}
              </Link>
            </Button>
          </div>

          <div className="pt-8 flex justify-center">
            <SocialLinks iconClassName="w-5 h-5 hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </section>
  )
}
