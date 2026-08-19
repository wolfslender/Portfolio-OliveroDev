import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WebsiteHealthReport } from "@/components/visuals/website-health-report"
import ExportedImage from "next-image-export-optimizer"
import { ArrowUpRight } from "lucide-react"
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
  const workHref = "/work/co-active-training-institute/"

  return (
    <section className="relative overflow-hidden bg-background antialiased">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 top-20 size-[34rem] rounded-full bg-primary/[0.07] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 md:pb-24 md:pt-36 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-10 bg-primary" />
              {hero.eyebrow}
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-balance sm:text-6xl lg:text-7xl">
              {hero.title.prefix}{" "}
              <span className="text-primary">{hero.title.highlight}</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 px-7 font-bold transition-transform active:scale-[0.98]"
              >
                <Link href={auditHref} prefetch={false}>
                  {hero.buttons.secondary}
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-border bg-background/70 px-7 font-bold active:scale-[0.98]"
              >
                <Link href={contactHref} prefetch={false}>
                  {hero.buttons.primary}
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-border/70 py-5">
              {hero.proof.map((item) => (
                <div key={item.label} className="border-l border-border/70 px-4 first:border-l-0 first:pl-0 last:pr-0">
                  <span className="block text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {item.value}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm font-medium text-muted-foreground">
              {hero.location}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-2xl pb-2 sm:pb-20 lg:pb-12">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-2xl shadow-black/10">
              <div className="flex h-11 items-center justify-between border-b border-border/60 bg-card px-4">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-primary/70" />
                  <span className="size-2.5 rounded-full bg-amber-500/70" />
                  <span className="size-2.5 rounded-full bg-secondary/70" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {hero.visual.browserLabel}
                </span>
                <span className="w-10" aria-hidden="true" />
              </div>

              <Link href={workHref} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <ExportedImage
                    src="/projects/coactive.jpg"
                    alt="Co-Active Training Institute"
                    fill
                    priority
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    sizes="(max-width: 1024px) 100vw, 54vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 text-white sm:p-7">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                        {hero.visual.selectedWork}
                      </p>
                      <p className="mt-2 text-xl font-bold sm:text-2xl">Co-Active Training Institute</p>
                    </div>
                    <ArrowUpRight className="hidden size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
                  </div>
                </div>
              </Link>
            </div>

            <WebsiteHealthReport
              locale={locale}
              compact
              className="relative z-10 -mt-10 ml-4 w-[calc(100%-2rem)] bg-card/95 p-4 shadow-2xl shadow-black/15 backdrop-blur-sm sm:absolute sm:-bottom-2 sm:-left-5 sm:ml-0 sm:w-[min(21rem,calc(100%-2rem))]"
            />

            <div className="absolute -right-2 -top-5 rounded-2xl border border-border/70 bg-foreground px-4 py-3 text-background shadow-xl sm:-right-5 sm:top-10">
              <span className="block text-2xl font-bold">150K+</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-background/70">
                {hero.visual.users}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
