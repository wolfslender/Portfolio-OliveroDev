import Link from "next/link"
import { ArrowRight, BadgeCheck, Linkedin, MapPin, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/config"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

interface HomeAuthoritySectionProps {
  locale?: "en" | "es"
}

export function HomeAuthoritySection({ locale }: HomeAuthoritySectionProps = {}) {
  const isSpanish = locale === "es"
  const copy = isSpanish ? es.homeAuthority : en.homeAuthority
  const aboutHref = isSpanish ? "/es/about/" : "/about/"

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <ScrollReveal>
            <div className="relative mx-auto max-w-lg overflow-hidden rounded-[2rem] bg-foreground p-7 text-background shadow-2xl shadow-black/10 sm:p-9 lg:mx-0">
              <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/35 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-secondary/20 blur-3xl" />

              <div className="relative flex min-h-[31rem] flex-col justify-between">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-background/55">
                      OliveroDev · 2017—2026
                    </p>
                    <p className="mt-3 flex items-center gap-2 text-sm text-background/70">
                      <MapPin className="size-4 text-primary" />
                      {copy.profileLocation}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-background/80">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    {copy.availability}
                  </span>
                </div>

                <div className="relative my-10">
                  <span className="block text-[9rem] font-bold leading-none tracking-[-0.1em] text-background/[0.06] sm:text-[12rem]" aria-hidden="true">
                    AO
                  </span>
                  <div className="absolute inset-x-0 bottom-4">
                    <p className="text-4xl font-bold leading-none tracking-[-0.045em] sm:text-5xl">
                      Alexis Olivero
                    </p>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                      {copy.profileRole}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[0.8fr_1.35fr_0.8fr] border-t border-background/15 pt-6">
                  {copy.stats.map((stat) => (
                    <div key={stat.label} className="min-w-0 border-l border-background/15 px-3 first:border-l-0 first:pl-0 last:pr-0 sm:px-4">
                      <span className="block text-lg font-bold sm:text-2xl">{stat.value}</span>
                      <span className="mt-1 block text-[10px] leading-snug text-background/55">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                {copy.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl">
                {copy.titlePrefix}{" "}
                <span className="text-primary">{copy.titleHighlight}</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {copy.description}
              </p>

              <div className="mt-9 border-y border-border/70">
                {copy.expectations.map((item, index) => (
                  <div key={item} className="grid grid-cols-[2.5rem_1fr] items-center border-b border-border/70 py-4 last:border-b-0">
                    <span className="text-xs font-bold text-primary">0{index + 1}</span>
                    <p className="flex items-center gap-3 text-sm font-bold text-foreground sm:text-base">
                      {index === 0 ? <BadgeCheck className="size-5 shrink-0 text-primary" /> : <ShieldCheck className="size-5 shrink-0 text-primary" />}
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link href={aboutHref} className="group inline-flex items-center gap-2 text-sm font-bold text-primary">
                  {copy.aboutCta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="size-4" />
                  LinkedIn
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
