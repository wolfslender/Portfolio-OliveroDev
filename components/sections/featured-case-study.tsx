import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

interface PortfolioProject {
  title: string
  image: string
  slug?: string
  industry?: string
}

interface FeaturedCaseStudyProps {
  locale?: "en" | "es"
  projects: PortfolioProject[]
}

export function FeaturedCaseStudy({ projects, locale }: FeaturedCaseStudyProps) {
  const isSpanish = locale === "es"
  const copy = isSpanish ? es.featuredCaseStudy : en.featuredCaseStudy
  const [featured, ...supporting] = projects
  const allWorkHref = isSpanish ? "/es/work/" : "/work/"

  if (!featured) return null

  const featuredCopy = copy.cards[featured.slug as keyof typeof copy.cards]

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                {copy.badge}
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl">
                {copy.titlePrefix}{" "}
                <span className="text-primary">{copy.titleHighlight}</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {copy.description}
              </p>
            </div>

            <Link
              href={allWorkHref}
              className="group inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {copy.viewAll}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <Link
            href={`/work/${featured.slug}/`}
            className="group grid overflow-hidden rounded-[2rem] bg-foreground text-background shadow-2xl shadow-black/10 lg:grid-cols-[1.45fr_0.75fr]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto lg:min-h-[32rem]">
              <ExportedImage
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/20" />
              <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
                01 · {featuredCopy.label}
              </span>
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
              <div>
                <div className="flex items-start justify-between gap-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-background/55">
                    {copy.featuredLabel}
                  </p>
                  <ArrowUpRight className="size-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="mt-8 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-background/70">
                  {featuredCopy.summary}
                </p>
              </div>

              <div className="mt-10 border-t border-background/20 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-background/50">
                  {copy.outcomeLabel}
                </span>
                <p className="mt-2 text-xl font-bold text-background">
                  {featuredCopy.result}
                </p>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {supporting.map((project, index) => {
            const projectCopy = copy.cards[project.slug as keyof typeof copy.cards]
            if (!projectCopy) return null

            return (
              <ScrollReveal key={project.slug} delay={120 + index * 80}>
                <Link
                  href={`/work/${project.slug}/`}
                  className="group grid h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-black/5 sm:grid-cols-[1.05fr_0.95fr]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted sm:aspect-auto sm:min-h-72">
                    <ExportedImage
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 28vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>

                  <div className="flex min-h-64 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                          0{index + 2} · {projectCopy.label}
                        </span>
                        <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                      <h3 className="mt-7 text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {projectCopy.summary}
                      </p>
                    </div>
                    <p className="mt-6 border-t border-border/60 pt-4 text-sm font-bold text-foreground">
                      {projectCopy.result}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
