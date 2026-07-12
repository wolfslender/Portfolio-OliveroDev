"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useServices } from "@/hooks/use-services"
import { useServicesPage } from "@/hooks/use-services-page"
import { useCommon } from "@/hooks/use-common"
import { AlertTriangle, ArrowRight, CheckCircle2, Clock, MessageSquare, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { localizePath } from "@/lib/i18n-routing"
import { useTranslation } from "react-i18next"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import type { Service } from "@/lib/types"

export default function ServicesContent() {
  const services = useServices()
  const servicesPage = useServicesPage()
  const common = useCommon()
  const { t, i18n } = useTranslation()
  const pathname = usePathname()

  const [region, setRegion] = useState<"latam" | "usa">("latam")
  const [mounted, setMounted] = useState(false)
  const [quoteService, setQuoteService] = useState<Service | null>(null)
  const [selectedOption, setSelectedOption] = useState<string>("")

  useEffect(() => {
    setMounted(true)
    setRegion(i18n.language?.startsWith("es") ? "latam" : "usa")
  }, [i18n.language])

  const getPrices = (service: Service) => {
    if (!service.regionPrices) return null
    return service.regionPrices[region]
  }

  return (
    <div className="pt-24">
      <section className="px-4 sm:px-6 lg:px-8 mb-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/[0.07] to-transparent -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              {servicesPage.hero.title}
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
              {servicesPage.hero.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7 font-bold group">
                <Link href="/contact?audit=true">
                  {t('servicesContent.primaryCta')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-7 font-bold">
                <Link href="/work">
                  {common.seeWork}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {mounted && (
        <div className="flex justify-center mb-12 px-4">
          <div className="inline-flex items-center gap-1 p-1 bg-muted rounded-full border border-border/50">
            <button
              onClick={() => setRegion("latam")}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
                region === "latam"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t('servicesContent.latam')}
            </button>
            <button
              onClick={() => setRegion("usa")}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
                region === "usa"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t('servicesContent.usa')}
            </button>
          </div>
        </div>
      )}

      {services.map((service, index) => {
        const prices = getPrices(service)
        const isQuote = !!service.quoteOptions || !!service.pricingNote
        const isQuoteWithOptions = !!service.quoteOptions

        return (
          <div key={service.id}>
            <section className={cn(
              "px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative overflow-hidden",
              index % 2 === 0 ? "bg-primary/[0.03]" : "bg-secondary/[0.03]"
            )}>
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none select-none">
                <span className="text-[22vw] md:text-[18vw] font-black text-foreground/[0.02] leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-20">
                  <div className="lg:col-span-3">
                    <div className="lg:sticky lg:top-32">
                      <div className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
                        index % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"
                      )}>
                        <service.icon className={cn(
                          "w-7 h-7",
                          index % 2 === 0 ? "text-primary" : "text-secondary"
                        )} />
                      </div>
                      <span className={cn(
                        "text-xs font-bold tracking-[0.3em] uppercase",
                        index % 2 === 0 ? "text-primary" : "text-secondary"
                      )}>
                        {t('servicesContent.serviceLabel', { number: String(index + 1).padStart(2, "0") })}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                      {service.title}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-5xl">
                      <div className="rounded-xl border border-border/40 bg-background/70 p-5">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                          <AlertTriangle className="w-4 h-4 text-primary" />
                          {t('servicesContent.problemSolved')}
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-foreground">
                          {service.painPoint}
                        </p>
                      </div>
                      <div className="rounded-xl border border-border/40 bg-background/70 p-5">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {t('servicesContent.proofPoint')}
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                          {service.evidence}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {service.features.map((feature, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-border/50 bg-background/60"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                      {isQuoteWithOptions && service.quoteOptions && (
                        <div className="sm:col-span-2 lg:col-span-2 rounded-xl border border-border/30 bg-background/50 p-4 space-y-3">
                          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            <Target className="w-3 h-3" />
                            {t('servicesContent.customQuote')}
                          </div>
                          {service.quoteOptions.map((opt) => (
                            <div key={opt.id} className="rounded-lg border border-border/20 bg-background/30 p-3">
                              <p className="text-sm font-semibold text-foreground mb-1">{opt.name}</p>
                              <p className="text-xs text-muted-foreground leading-relaxed">{opt.description}</p>
                            </div>
                          ))}
                          <button
                            onClick={() => { setQuoteService(service); setSelectedOption("") }}
                            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
                          >
                            {t('servicesContent.requestQuote')} →
                          </button>
                        </div>
                      )}

                      {!isQuoteWithOptions && service.pricingNote && (
                        <div className="rounded-xl border border-border/30 bg-background/50 p-4">
                          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                            <Target className="w-3 h-3" />
                            {t('servicesContent.customQuote')}
                          </div>
                          <p className="text-sm text-muted-foreground leading-snug mb-3">
                            {service.pricingNote}
                          </p>
                          <button
                            onClick={() => { setQuoteService(service); setSelectedOption("") }}
                            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
                          >
                            {t('servicesContent.requestQuote')} →
                          </button>
                        </div>
                      )}

                      {prices && prices.length === 1 && (
                        <div className="rounded-xl border border-border/30 bg-background/50 p-4">
                          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                            <Target className="w-3 h-3" />
                            {t('servicesContent.startingAt')}
                          </div>
                          <p className="text-sm font-bold text-primary leading-snug">
                            ${prices[0].min}–${prices[0].max} USD
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">{prices[0].label}</p>
                        </div>
                      )}

                      {prices && prices.length > 1 && (
                        <div className="sm:col-span-2 rounded-xl border border-border/30 bg-background/50 p-4">
                          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                            <Target className="w-3 h-3" />
                            {t('servicesContent.startingAt')}
                          </div>
                          <div className="space-y-1.5">
                            {prices.map((tier) => (
                              <div key={tier.label} className="flex items-center justify-between py-1.5 border-b border-border/10 last:border-b-0">
                                <span className="text-xs text-muted-foreground">{tier.label}</span>
                                <span className="text-sm font-bold text-primary">${tier.min}–${tier.max} USD</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="rounded-xl border border-border/30 bg-background/50 p-4">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                          <Target className="w-3 h-3" />
                          {common.bestFor}
                        </div>
                        <p className="text-sm font-medium leading-snug">{service.bestFor}</p>
                      </div>

                      <div className="rounded-xl border border-border/30 bg-background/50 p-4">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                          <Clock className="w-3 h-3" />
                          {common.timeline}
                        </div>
                        <p className="text-sm font-medium leading-snug">{service.timeline}</p>
                      </div>

                      <div className="rounded-xl border border-border/30 bg-background/50 p-4">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                          <TrendingUp className="w-3 h-3" />
                          {common.outcome}
                        </div>
                        <p className="text-sm font-medium leading-snug">{service.outcome}</p>
                      </div>
                    </div>

                    {service.deliverables?.length > 0 && (
                      <div className="mb-10">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3">
                          {common.included}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.deliverables.map((item: string) => (
                            <span
                              key={item}
                              className="inline-flex items-center px-2.5 py-1 text-xs text-muted-foreground bg-muted/40 rounded-md"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {isQuote ? (
                      <div className="flex flex-col sm:flex-row gap-3">
                        {service.landingPageHref && (
                          <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-bold group">
                            <Link href={localizePath(pathname || "/", service.landingPageHref)}>
                              {t('servicesContent.exploreService')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        )}
                        <Button
                          size="lg"
                          className="rounded-full h-14 px-8 text-lg font-bold group shadow-xl hover:shadow-primary/20 transition-all cursor-pointer"
                          onClick={() => { setQuoteService(service); setSelectedOption("") }}
                        >
                          {t('servicesContent.requestQuote')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    ) : (
                      <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold group shadow-xl hover:shadow-primary/20 transition-all">
                        <Link href={localizePath(pathname || "/", service.landingPageHref || "/contact?audit=true")}>
                          {common.getStarted} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {index < services.length - 1 && (
              <div className="relative flex items-center justify-center py-10 md:py-14">
                <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-border/60 to-transparent" />
                <div className="absolute w-2.5 h-2.5 rotate-45 border border-border/50 bg-background" />
              </div>
            )}
          </div>
        )
      })}

      <div className="text-center px-4 py-8">
        <p className="text-xs text-muted-foreground/60 max-w-xl mx-auto leading-relaxed">
          {t('servicesContent.taxNote')}
        </p>
      </div>

      <Dialog open={!!quoteService} onOpenChange={(open) => { if (!open) setQuoteService(null) }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {t('servicesContent.requestQuote')} — {quoteService?.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground pt-2">
              {t('servicesContent.everyProjectIsDifferent')}
            </DialogDescription>
          </DialogHeader>

          {quoteService?.quoteOptions && (
            <div className="space-y-3 py-2">
              <p className="text-sm font-medium">{t('servicesContent.selectOption')}</p>
              {quoteService.quoteOptions.map((opt) => (
                <label
                  key={opt.id}
                  className={cn(
                    "flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                    selectedOption === opt.id
                      ? "border-primary bg-primary/5"
                      : "border-border/30 hover:border-border/60"
                  )}
                >
                  <input
                    type="radio"
                    name="quoteOption"
                    value={opt.id}
                    checked={selectedOption === opt.id}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="mt-0.5"
                  />
                  <div>
                    <p className="text-sm font-medium">{opt.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{opt.description}</p>
                  </div>
                </label>
              ))}
            </div>
          )}

          {quoteService?.pricingNote && !quoteService.quoteOptions && (
            <div className="py-2">
              <p className="text-sm text-muted-foreground">{quoteService.pricingNote}</p>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              className="flex-1 cursor-pointer"
              onClick={() => setQuoteService(null)}
            >
              {t('servicesContent.cancel')}
            </Button>
            <Button
              asChild
              className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white cursor-pointer"
            >
              <Link
                href={
                  `/contact?service=${encodeURIComponent(quoteService?.title || "")}` +
                  (selectedOption ? `&option=${encodeURIComponent(selectedOption)}` : "")
                }
              >
                <MessageSquare className="w-4 h-4" />
                {t('servicesContent.continueToContact')}
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
