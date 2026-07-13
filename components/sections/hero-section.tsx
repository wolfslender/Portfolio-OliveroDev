import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { WebsiteHealthReport } from "@/components/visuals/website-health-report"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

interface HeroSectionProps {
  locale?: "en" | "es"
}

export function HeroSection({ locale }: HeroSectionProps = {}) {
  const isSpanish = locale === "es"
  const hero = isSpanish ? es.hero : en.hero
  const contactHref = isSpanish ? "/es/contact/" : "/contact/"
  const auditHref = isSpanish ? "/es/contact/?audit=true" : "/contact/?audit=true"

  return (
    <section className="relative min-h-[92svh] flex items-center overflow-hidden bg-background antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 md:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <ScrollReveal>
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.08]">
                  {hero.title.prefix}{" "}
                  <span className="text-primary">{hero.title.highlight}</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                {hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all hover:shadow-lg hover:shadow-primary/15 active:scale-[0.98]"
                >
                  <Link href={auditHref}>
                    {hero.buttons.secondary}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 font-bold border-border bg-background/80 text-foreground hover:bg-muted/60 hover:text-foreground dark:bg-background/40 dark:hover:bg-muted/30 dark:hover:text-foreground transition-all active:scale-[0.98]"
                >
                  <Link href={contactHref}>
                    {hero.buttons.primary}
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {hero.proof.map((item) => (
                  <span key={item} className="text-sm font-medium text-muted-foreground before:content-['✓'] before:text-primary before:mr-1.5">
                    {item}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground/70 font-medium">
                {hero.location}
              </p>
            </div>
          </ScrollReveal>

          {/* Right — Diagnostic Visual */}
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl -z-10" />
              <WebsiteHealthReport />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
