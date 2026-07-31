import { Button } from "@/components/ui/button"
import { plugins } from "@/lib/data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, CheckCircle2, Clock, Code2, ExternalLink, LifeBuoy, RefreshCcw, Shield, Star, Zap } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/config"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

const shotFiles = ["/plugins/screenshot-1.jpg", "/plugins/screenshot-2.jpg", "/plugins/screenshot-3.jpg", "/plugins/screenshot-4.jpg"]

const whyIcons = [Code2, RefreshCcw, LifeBuoy]

interface PluginsContentProps {
  locale?: "en" | "es"
}

export default function PluginsContent({ locale = "en" }: PluginsContentProps = {}) {
  const copy = locale === "es" ? es : en
  const page = copy.pluginsPage
  const plugin = plugins.plugins[0]

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Hero — pain first, then solution */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-violet-500/10 to-transparent blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <Badge variant="outline" className="px-4 py-1.5 rounded-full border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-semibold mb-6">
              {page.heroBadge}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              {page.heroTitle} <br />
              <span className="text-primary">
                {page.heroHighlight}
              </span>
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-balance">
              {page.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href={plugin.url} target="_blank" rel="noopener noreferrer">
                  {page.heroCtaPrimary}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href={plugin.freemiusUrl} target="_blank" rel="noopener noreferrer">
                  {page.heroCtaSecondary}
                  <Zap className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground pt-2">
              <span className="flex items-center gap-1.5">
                <span className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </span>
                {page.ratingLine}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {page.trustLine}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product card */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className={cn(
              "rounded-3xl border border-border/60 bg-card/40 p-8 md:p-12 backdrop-blur-sm",
              plugin.bgColor
            )}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left - Info */}
                <div className="space-y-7">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{plugin.icon}</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">{plugin.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{plugin.tagline}</p>
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {plugin.description}
                  </p>

                  {/* Free Features */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                      {page.freeLabel}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {plugin.features.map((feature: string, fIdx: number) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    <Button asChild size="lg" className="rounded-full px-8">
                      <Link href={plugin.freemiusUrl} target="_blank" rel="noopener noreferrer">
                        {page.startTrial}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                      <Link href={plugin.url} target="_blank" rel="noopener noreferrer">
                        {page.freeOnWp}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Trust badges */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                    <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> {page.noCreditCard}</span>
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> {page.threeDayTrial}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {page.cancelAnytime}</span>
                  </div>
                </div>

                {/* Right - PRO plans + features */}
                <div className="space-y-5">
                  {/* PRO Features card */}
                  <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 p-6 text-white">
                    <div className="flex items-center justify-between mb-5">
                      <h4 className="text-lg font-bold">PRO Features</h4>
                      <Badge className="bg-white/20 text-white rounded-full text-xs">
                        {plugin.price}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 gap-2.5">
                      {plugin.proFeatures.map((feature: string, pfIdx: number) => (
                        <div key={pfIdx} className="flex items-start gap-3">
                          <Star className="w-3.5 h-3.5 text-yellow-400 shrink-0 fill-yellow-400 mt-0.5" />
                          <span className="text-white/90 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing plans */}
                  {plugin.plans && (
                    <div className="grid grid-cols-2 gap-3">
                      {plugin.plans.map((plan: { name: string; price: string; period: string; checkoutUrl: string }, pIdx: number) => (
                        <Link
                          key={pIdx}
                          href={plan.checkoutUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "rounded-xl border p-4 text-center transition-all hover:shadow-md hover:-translate-y-0.5",
                            pIdx === 0
                              ? "border-violet-500/40 bg-violet-500/5 hover:border-violet-500/70"
                              : "border-border/60 bg-card/60 hover:border-violet-500/40"
                          )}
                        >
                          <p className="text-xs font-semibold text-muted-foreground mb-1">{plan.name}</p>
                          <p className="text-2xl font-bold">{plan.price}</p>
                          <p className="text-xs text-muted-foreground">{plan.period}</p>
                          <p className={cn(
                            "text-xs font-semibold mt-2",
                            pIdx === 0 ? "text-violet-600 dark:text-violet-400" : "text-muted-foreground"
                          )}>
                            {pIdx === 0 ? `${page.getStarted} →` : `${page.forAgencies} →`}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Value anchor + guarantee next to buy */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {page.valueAnchor}
                  </p>
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-400">
                    <Shield className="w-3.5 h-3.5" />
                    {page.finalCtaNote}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial + rating */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <figure className="rounded-3xl border border-border/60 bg-card/40 p-8 md:p-12 text-center backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-balance mb-6">
                “{page.testimonialQuote}”
              </blockquote>
              <figcaption className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">farahalmn</span>
                <span className="mx-2">·</span>
                {page.testimonialRole}
                <span className="mx-2">·</span>
                <Link
                  href={siteConfig.testimonials[0]?.sourceUrl ?? "https://wordpress.org/plugins/oliverodev-media-audit/#reviews"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  {page.testimonialLink}
                </Link>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      {/* Screenshots */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                {page.shotsEyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {page.shotsTitle}
              </h2>
              <p className="text-muted-foreground text-lg">
                {page.shotsDescription}
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shotFiles.map((src, idx) => (
              <ScrollReveal key={src} delay={idx * 100}>
                <figure className="rounded-2xl border border-border/60 bg-card/40 overflow-hidden backdrop-blur-sm">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={page.shots[idx] || `Media Audit screenshot ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm text-muted-foreground">
                    {page.shots[idx]}
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs PRO comparison */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {page.comparisonTitle}
              </h2>
              <p className="text-muted-foreground text-lg">
                {page.comparisonSubtitle}
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="h-full rounded-3xl border border-border/60 bg-card/40 p-8 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  {page.freeLabel}
                </p>
                <h3 className="text-2xl font-bold mb-1">{page.freeTitle}</h3>
                <p className="text-sm font-semibold text-primary mb-6">{page.freeLimit}</p>
                <div className="space-y-2.5">
                  {plugin.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href={plugin.url} target="_blank" rel="noopener noreferrer">
                      {page.freeOnWp}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="h-full rounded-3xl bg-gradient-to-br from-violet-600 to-violet-800 p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                  PRO
                </p>
                <h3 className="text-2xl font-bold mb-1">{page.proTitle}</h3>
                <p className="text-sm font-semibold text-yellow-300 mb-6">{page.proLimit}</p>
                <div className="space-y-2.5">
                  {plugin.proFeatures.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-400 shrink-0 fill-yellow-400 mt-0.5" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild size="lg" variant="secondary" className="w-full rounded-full bg-white text-violet-700 hover:bg-white/90">
                    <Link href={plugin.freemiusUrl} target="_blank" rel="noopener noreferrer">
                      {page.proTitle}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <p className="flex items-center justify-center gap-1.5 text-xs text-white/80 mt-3">
                    <Shield className="w-3.5 h-3.5" />
                    {page.finalCtaNote}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Plugins Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10 blur-[140px] -z-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              {copy.pluginsNav}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              {page.whyTitle}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-14">
              {page.whyDescription}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.whyCards.map((card, idx) => {
              const Icon = whyIcons[idx % whyIcons.length]
              return (
                <ScrollReveal key={idx} delay={idx * 120}>
                  <div className="group relative h-full rounded-3xl border border-border/60 bg-card/40 p-8 backdrop-blur-sm overflow-hidden text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10">
                    <span className="pointer-events-none absolute -top-5 -right-2 text-[7rem] md:text-[8.5rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-violet-500/25 to-transparent select-none group-hover:from-violet-500/45 transition-all duration-300">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center mb-6 shadow-lg shadow-violet-600/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="relative font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {card.title}
                    </h4>
                    <p className="relative text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {page.faqTitle}
            </h2>
            <div className="space-y-4">
              {page.faq.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm open:bg-card/60 transition-colors"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-semibold">
                    {item.q}
                    <span className="text-primary shrink-0 transition-transform duration-200 group-open:rotate-45 text-xl leading-none">+</span>
                  </summary>
                  <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA — buy, not "let's talk" */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-violet-800 p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {page.finalCtaTitle}
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                {page.finalCtaDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="rounded-full px-8 bg-white text-violet-700 hover:bg-white/90">
                  <Link href={plugin.freemiusUrl} target="_blank" rel="noopener noreferrer">
                    {page.finalCtaButton}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="rounded-full px-8 bg-white/10 hover:bg-white/20 text-white border border-white/30">
                  <Link href={plugin.url} target="_blank" rel="noopener noreferrer">
                    {page.heroCtaPrimary}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <p className="flex items-center justify-center gap-1.5 text-sm text-white/80 mt-5">
                <Shield className="w-4 h-4" />
                {page.finalCtaNote}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
