import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, Shield, Star, Zap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { plugins } from "@/lib/data"
import { siteConfig } from "@/lib/config"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

interface HomePluginsSectionProps {
  locale?: "en" | "es"
}

export function HomePluginsSection({ locale }: HomePluginsSectionProps = {}) {
  const isSpanish = locale === "es"
  const copy = isSpanish ? es.homePluginsSection : en.homePluginsSection
  const pp = isSpanish ? es.pluginsPage : en.pluginsPage
  const reviewUrl = siteConfig.testimonials[0]?.sourceUrl ?? "https://wordpress.org/plugins/oliverodev-media-audit/#reviews"
  const plugin = plugins.plugins[0]

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-950 via-zinc-950 to-zinc-950 px-6 py-14 md:px-14 md:py-20 text-white">
            {/* Glows */}
            <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-violet-600/30 blur-[130px] animate-pulse-slow" />
            <div className="pointer-events-none absolute -bottom-44 -left-28 w-[420px] h-[420px] rounded-full bg-fuchsia-600/20 blur-[120px]" />

            <div className="relative grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">
              {/* Left — Copy */}
              <div className="space-y-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-300">
                  <span className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </span>
                  {copy.badge}
                </span>

                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance leading-[1.1]">
                  {copy.headline}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400">
                    {copy.headlineHighlight}
                  </span>
                </h2>

                <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                  {copy.subheadline}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {copy.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-white/85">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400 text-white font-bold shadow-lg shadow-violet-600/30 transition-all hover:shadow-violet-500/40 active:scale-[0.98]"
                  >
                    <Link href={plugin.freemiusUrl} target="_blank" rel="noopener noreferrer">
                      {pp.finalCtaButton}
                      <Zap className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-8 border-white/20 bg-white/5 backdrop-blur text-white hover:bg-white/10 font-bold transition-all active:scale-[0.98]"
                  >
                    <Link href={plugin.url} target="_blank" rel="noopener noreferrer">
                      {pp.freeOnWp}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <p className="flex items-center gap-2 text-sm text-white/60">
                  <Shield className="w-4 h-4 text-violet-300" />
                  {pp.finalCtaNote}
                </p>
              </div>

              {/* Right — Product mockup */}
              <div className="relative">
                <div className="pointer-events-none absolute -inset-10 bg-violet-600/20 blur-[90px] rounded-full" />

                {/* Browser frame */}
                <div className="relative rounded-2xl border border-white/10 bg-zinc-900/90 shadow-2xl shadow-black/60 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-zinc-900">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="flex-1 mx-3 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 text-xs text-white/50 font-mono truncate">
                      {copy.mockupUrl}
                    </span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/plugins/screenshot-1.jpg"
                    alt={copy.productTitle}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>

                {/* Floating: rating */}
                <div className="absolute -top-5 -right-2 md:-right-6 animate-float rounded-2xl bg-white text-zinc-900 shadow-xl shadow-black/30 px-4 py-3">
                  <div className="flex items-center gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-[11px] font-bold leading-tight">{pp.ratingLine}</p>
                </div>

                {/* Floating: risk chip */}
                <div className="absolute -top-6 left-4 md:-left-8 animate-float-delayed rounded-2xl border border-white/15 bg-white/10 backdrop-blur px-4 py-2.5 flex items-center gap-2 shadow-lg shadow-black/20">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xs font-semibold text-white/90">{copy.riskChip}</p>
                </div>

                {/* Floating: 15 deletions */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 md:-bottom-6 animate-float rounded-2xl bg-white text-zinc-900 shadow-xl shadow-black/30 px-5 py-3 text-center">
                  <p className="text-[11px] uppercase tracking-widest text-violet-600 font-bold">{copy.floatingFree}</p>
                  <p className="text-sm font-bold text-zinc-900">{copy.floatingPro}</p>
                </div>
              </div>
            </div>

            {/* Bottom strip — review + PRO chips */}
            <div className="relative mt-16 grid lg:grid-cols-2 gap-8 items-center border-t border-white/10 pt-8">
              <figure className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-bold text-white">
                  F
                </div>
                <div>
                  <div className="flex items-center gap-0.5 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-white/80 leading-relaxed">
                    &ldquo;{pp.testimonialQuote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 text-xs text-white/60">
                    <span className="font-bold text-white">farahalmn</span>
                    <span className="mx-1.5">·</span>
                    {pp.testimonialRole}
                    <span className="mx-1.5">·</span>
                    <a href={reviewUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-violet-300 hover:underline">
                      {pp.testimonialLink}
                    </a>
                  </figcaption>
                </div>
              </figure>

              <div className="flex flex-wrap gap-2.5 lg:justify-end">
                {copy.proChips.map((chip: string, idx: number) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/80">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
