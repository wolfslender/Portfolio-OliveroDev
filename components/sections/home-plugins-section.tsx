import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, Star, Zap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { plugins } from "@/lib/data"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

interface HomePluginsSectionProps {
  locale?: "en" | "es"
}

export function HomePluginsSection({ locale }: HomePluginsSectionProps = {}) {
  const isSpanish = locale === "es"
  const copy = isSpanish ? es.homePluginsSection : en.homePluginsSection
  const plugin = plugins.plugins[0]

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              {isSpanish ? es.pluginsNav : en.pluginsNav}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {copy.title} <span className="text-primary">{copy.titleHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {copy.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-3xl border border-border/60 bg-card/40 p-8 md:p-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{plugin.icon}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">{copy.productTitle}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{copy.productTagline}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {copy.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link href={plugin.freemiusUrl} target="_blank" rel="noopener noreferrer">
                      {copy.tryFree}
                      <Zap className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                    <Link href={isSpanish ? "/es/plugins/" : "/plugins"}>
                      {copy.viewAll}
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="lg" className="rounded-full px-6 text-muted-foreground">
                    <Link href={plugin.url} target="_blank" rel="noopener noreferrer">
                      {isSpanish ? es.pluginsPage.freeOnWp : en.pluginsPage.freeOnWp}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> {isSpanish ? es.pluginsPage.threeDayTrial : en.pluginsPage.threeDayTrial}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" /> {isSpanish ? es.pluginsPage.noCreditCard : en.pluginsPage.noCreditCard}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 p-6 md:p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-bold">PRO</h4>
                  <span className="bg-white/20 rounded-full text-xs font-bold px-3 py-1">
                    {plugin.price}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {plugin.proFeatures.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Star className="w-3.5 h-3.5 text-yellow-400 shrink-0 fill-yellow-400 mt-0.5" />
                      <span className="text-white/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
