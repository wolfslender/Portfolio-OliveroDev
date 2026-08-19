import Link from "next/link"
import { ArrowRight, Check, RefreshCw, SearchCheck, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

const paths = [
  { key: "audit", icon: SearchCheck, href: "/website-audit/" },
  { key: "optimize", icon: ShieldCheck, href: "/wordpress-speed-optimization/" },
  { key: "modernize", icon: RefreshCw, href: "/website-migration/" },
] as const

interface ProblemSectionProps {
  locale?: "en" | "es"
}

export function ProblemSection({ locale }: ProblemSectionProps = {}) {
  const isSpanish = locale === "es"
  const copy = isSpanish ? es.problemSection : en.problemSection

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                {copy.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl">
                {copy.titlePrefix}{" "}
                <span className="text-primary">{copy.titleHighlight}</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:pb-1">
              {copy.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border/70 bg-card">
          <div className="hidden grid-cols-[5rem_1fr_1fr_0.9fr_3rem] border-b border-border/70 bg-muted/40 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground lg:grid">
            <span>{copy.columns.path}</span>
            <span>{copy.columns.constraint}</span>
            <span>{copy.columns.intervention}</span>
            <span>{copy.columns.outcome}</span>
            <span />
          </div>

          {paths.map(({ key, icon: Icon, href }, index) => {
            const item = copy.paths[key]
            const localizedHref = isSpanish ? `/es${href}` : href

            return (
              <ScrollReveal key={key} delay={index * 70}>
                <Link
                  href={localizedHref}
                  className="group relative grid gap-6 border-b border-border/70 p-6 transition-colors last:border-b-0 hover:bg-primary/[0.045] md:p-8 lg:grid-cols-[5rem_1fr_1fr_0.9fr_3rem] lg:items-center lg:gap-0 lg:px-6 lg:py-8"
                >
                  <div className="flex items-center justify-between lg:block">
                    <span className="text-3xl font-bold tracking-[-0.05em] text-muted-foreground transition-colors group-hover:text-primary">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                      {copy.columns.path}
                    </span>
                  </div>

                  <div className="lg:pr-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      {item.context}
                    </p>
                    <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl">
                      {item.problem}
                    </h3>
                  </div>

                  <div className="relative border-l-2 border-primary/25 pl-5 lg:border-l lg:border-border/70 lg:px-8">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="text-lg font-bold text-foreground">
                        {item.service}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:ml-[3.25rem]">
                      {item.action}
                    </p>
                  </div>

                  <div className="flex items-start gap-3 lg:px-6">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                      <Check className="size-3.5" />
                    </span>
                    <p className="text-sm font-bold leading-relaxed text-foreground">
                      {item.outcome}
                    </p>
                  </div>

                  <ArrowRight className="hidden size-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary lg:block" />
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-border/70 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {copy.bottomNote}
          </p>
          <Link
            href={isSpanish ? "/es/contact/?audit=true" : "/contact/?audit=true"}
            prefetch={false}
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-primary"
          >
            {copy.bottomCta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
