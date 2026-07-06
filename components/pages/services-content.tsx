"use client"

import { Button } from "@/components/ui/button"
import { useServices } from "@/hooks/use-services"
import { useServicesPage } from "@/hooks/use-services-page"
import { useCommon } from "@/hooks/use-common"
import { ArrowRight, Clock, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

export default function ServicesContent() {
  const services = useServices()
  const servicesPage = useServicesPage()
  const common = useCommon()
  const { t } = useTranslation()

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
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <div key={index}>
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
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
                    {service.description}
                  </p>

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
                    {service.startingPrice && (
                      <div className="rounded-xl border border-border/30 bg-background/50 p-4">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                          <Target className="w-3 h-3" />
                          {t('servicesContent.startingAt')}
                        </div>
                        <p className="text-sm font-bold text-primary leading-snug">{service.startingPrice}</p>
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

                  <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold group shadow-xl hover:shadow-primary/20 transition-all">
                    <Link href="/contact?audit=true">
                      {common.getStarted} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
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
      ))}

    </div>
  )
}
