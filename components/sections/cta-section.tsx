import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

interface CTASectionProps {
  locale?: "en" | "es"
}

export function CTASection({ locale }: CTASectionProps = {}) {
  const isSpanish = locale === "es"
  const copy = isSpanish ? es.cta : en.cta
  const contactHref = isSpanish ? "/es/contact/" : "/contact/"
  const auditHref = isSpanish ? "/es/contact/?audit=true" : "/contact/?audit=true"

  return (
    <section className="bg-background px-4 pb-20 sm:px-6 md:pb-24 lg:px-8">
      <ScrollReveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-foreground px-6 py-12 text-background shadow-2xl shadow-black/10 sm:px-10 md:px-14 md:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-28 -top-40 size-[30rem] rounded-full bg-primary/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 left-1/3 size-96 rounded-full bg-secondary/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                {copy.badge}
              </p>
              <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl">
                {copy.titlePrefix}{" "}
                <span className="text-primary">{copy.titleHighlight}</span>
              </h2>
            </div>

            <div>
              <p className="text-base leading-relaxed text-background/65 sm:text-lg">
                {copy.description}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href={auditHref}
                  prefetch={false}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition-transform active:scale-[0.98]"
                >
                  {copy.primaryButton}
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href={contactHref}
                  prefetch={false}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-background/20 bg-background/5 px-6 text-sm font-bold text-background transition-colors hover:bg-background/10"
                >
                  {copy.secondaryButton}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mt-12 grid grid-cols-2 border-l border-t border-background/15 sm:grid-cols-4">
            {copy.trust.map((item) => (
              <div key={item} className="border-b border-r border-background/15 px-4 py-4 text-xs font-bold text-background/65 sm:py-5">
                {item}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
