import { ScrollReveal } from "@/components/scroll-reveal"
import { Star } from "lucide-react"
import { siteConfig } from "@/lib/config"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

interface TestimonialsSectionProps {
  locale?: "en" | "es"
}

export function TestimonialsSection({ locale }: TestimonialsSectionProps = {}) {
  const reviews = siteConfig.testimonials
  const copy = locale === "es" ? es.testimonialsSection : en.testimonialsSection

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              {copy.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {copy.title}{" "}
              <span className="text-primary">{copy.highlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {copy.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-3xl gap-4 md:gap-6">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.author} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 md:p-8 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 border-t border-border/40 pt-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                    {getInitials(review.author)}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{review.author}</p>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                    {"sourceUrl" in review && review.sourceUrl && (
                      <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary hover:underline">
                        {copy.verifiedSource}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
