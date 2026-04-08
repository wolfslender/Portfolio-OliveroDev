"use client"

import { Button } from "@/components/ui/button"
import { useSiteData } from "@/hooks/use-site-data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ProcessSection } from "@/components/sections/process-section"
import { ArrowRight, CheckCircle2, ExternalLink, Rocket, ShieldCheck, Users2, Zap } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import ExportedImage from "next-image-export-optimizer"

export default function ServicesContent() {
  const { services, servicesPage, projects, common } = useSiteData()

  const getMiniCaseStudy = (service: any) => {
    const directTitle = typeof service?.caseStudyTitle === "string" ? service.caseStudyTitle : null
    if (directTitle) {
      const match = projects.find(p => p.title === directTitle) || projects.find(p => p.title.includes(directTitle))
      if (match) return match
    }

    const serviceTitle = typeof service?.title === "string" ? service.title : ""
    const sTitle = serviceTitle.toLowerCase()

    if (sTitle.includes("escalado") || sTitle.includes("corporate") || sTitle.includes("web development")) return projects.find(p => p.title.includes("Co-Active"))
    if (sTitle.includes("mvp") || sTitle.includes("lanzamiento")) return projects.find(p => p.title.includes("Cybernetips"))
    if (sTitle.includes("webflow") || sTitle.includes("migración")) return projects.find(p => p.title.includes("Truenorth"))
    if (sTitle.includes("partnership") || sTitle.includes("socio")) return projects.find(p => p.title.includes("GovValue"))
    if (sTitle.includes("security") || sTitle.includes("seguridad") || sTitle.includes("cloud")) return projects.find(p => p.title.includes("Departamento de Educación"))

    return projects.find(p => p.title.includes("Co-Active")) || projects[0]
  }

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Immersive Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-500/10 to-transparent blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <Badge variant="outline" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6">
              {servicesPage.methodology.title}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              {servicesPage.hero.title}
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-balance">
              {servicesPage.hero.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Method Section - High Authority */}
      <ProcessSection />

      {/* Immersive Service Sections (Z-Pattern) */}
      <section className="py-24 space-y-32">
        {services.map((service, index) => {
          const isEven = index % 2 === 0
          const caseStudy = getMiniCaseStudy(service)

          return (
            <div key={index} className="px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content Side */}
                <ScrollReveal delay={isEven ? 0 : 200}>
                  <div className={cn("space-y-8", !isEven && "lg:order-2")}>
                    <div className="space-y-4">
                      <div className={cn("p-4 inline-flex rounded-2xl shadow-lg", service.bgColor)}>
                        <service.icon className={cn("w-10 h-10", service.color)} />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 group">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="font-medium text-foreground/80 leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="rounded-2xl border border-border/60 bg-card/40 p-4 backdrop-blur-sm">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2">{common.bestFor}</p>
                        <p className="text-sm leading-relaxed text-foreground/80">{service.bestFor}</p>
                      </div>
                      <div className="rounded-2xl border border-border/60 bg-card/40 p-4 backdrop-blur-sm">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2">{common.timeline}</p>
                        <p className="text-sm leading-relaxed text-foreground/80">{service.timeline}</p>
                      </div>
                      <div className="rounded-2xl border border-border/60 bg-card/40 p-4 backdrop-blur-sm">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2">{common.outcome}</p>
                        <p className="text-sm leading-relaxed text-foreground/80">{service.outcome}</p>
                      </div>
                    </div>

                    {service.deliverables?.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-muted-foreground">
                          {common.included}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((item: string) => (
                            <Badge
                              key={item}
                              variant="secondary"
                              className="rounded-full bg-primary/10 text-primary border-primary/10 px-4 py-2 text-xs font-semibold"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-2 flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold group shadow-xl hover:shadow-primary/20 transition-all">
                        <Link href="/contact?audit=true">
                          {common.getStarted} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-bold group">
                        <Link href="/contact">
                          {common.bookCall}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Visual/Social Proof Side */}
                <ScrollReveal delay={isEven ? 200 : 0}>
                  <div className={cn(
                    "relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden border border-border/50 group shadow-2xl bg-card/30 backdrop-blur-sm",
                    !isEven && "lg:order-1"
                  )}>
                    {caseStudy?.image ? (
                      <>
                        <ExportedImage
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover scale-[1.02] opacity-80 transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent z-10" />
                        <div className={cn("absolute inset-0 opacity-25 mix-blend-overlay z-10", service.bgColor)} />
                      </>
                    ) : (
                      <>
                        <div className={cn("absolute inset-0 opacity-20", service.bgColor)} />
                        <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10" />
                      </>
                    )}

                    <div className="absolute inset-0 z-20 p-8 flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-2xl bg-background/75 backdrop-blur-md border border-white/10 px-4 py-3 shadow-xl shadow-black/10">
                          <h4 className="text-xl md:text-2xl font-black leading-tight text-foreground">
                            {caseStudy?.title ?? "Recent Work"}
                          </h4>
                          <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2 max-w-[46ch]">
                            {caseStudy?.description ?? ""}
                          </p>
                        </div>

                        {caseStudy?.demo && (
                          <Button
                            asChild
                            size="sm"
                            variant="secondary"
                            className="rounded-full bg-background/60 backdrop-blur-md border border-white/10 hover:bg-background/80"
                          >
                            <Link href={caseStudy.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${caseStudy.title} live site`}>
                              {common.live} <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>

                      <div className="mt-auto space-y-5">
                        {caseStudy?.metrics && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {caseStudy.metrics.users && (
                              <div className="rounded-2xl bg-background/60 backdrop-blur-md border border-white/10 px-4 py-3">
                                <div className="flex items-center gap-2 text-primary mb-1">
                                  <Users2 className="h-4 w-4" />
                                  <span className="text-[10px] font-bold uppercase tracking-widest">{common.users}</span>
                                </div>
                                <div className="text-sm font-extrabold leading-snug">{caseStudy.metrics.users}</div>
                              </div>
                            )}
                            {caseStudy.metrics.performance && (
                              <div className="rounded-2xl bg-background/60 backdrop-blur-md border border-white/10 px-4 py-3">
                                <div className="flex items-center gap-2 text-primary mb-1">
                                  <Zap className="h-4 w-4" />
                                  <span className="text-[10px] font-bold uppercase tracking-widest">{common.speed}</span>
                                </div>
                                <div className="text-sm font-extrabold leading-snug">{caseStudy.metrics.performance}</div>
                              </div>
                            )}
                            {caseStudy.metrics.impact && (
                              <div className="rounded-2xl bg-background/60 backdrop-blur-md border border-white/10 px-4 py-3">
                                <div className="flex items-center gap-2 text-primary mb-1">
                                  <ShieldCheck className="h-4 w-4" />
                                  <span className="text-[10px] font-bold uppercase tracking-widest">{common.impact}</span>
                                </div>
                                <div className="text-sm font-extrabold leading-snug line-clamp-2">{caseStudy.metrics.impact}</div>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap gap-2">
                            {service.technologies?.slice(0, 6).map((tech: string) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-background/55 backdrop-blur-md border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-2">
                            <Button asChild size="sm" className="rounded-full h-10 px-4 font-bold">
                              <Link href="/work">
                                {common.seeWork} <Rocket className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                            <Button asChild size="sm" variant="secondary" className="rounded-full h-10 px-4 font-bold bg-background/60 backdrop-blur-md border border-white/10">
                              <Link href="/contact?audit=true">
                                {common.freeAudit}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          )
        })}
      </section>

      {/* Enhanced CTA Section - Final Strategic Close */}
      <section className="px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 border border-white/5 p-12 md:p-24 text-center text-white shadow-3xl">
            {/* Animated background element */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />

            <div className="relative z-10 space-y-10">
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
                  {servicesPage.cta.title}
                </h2>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  {servicesPage.cta.description}
                </p>

                <div className="pt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-slate-950 hover:bg-slate-200 shadow-2xl shadow-white/10 border-0 rounded-full h-16 px-12 text-xl font-black transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                  >
                    <Link href="/contact">
                      {servicesPage.cta.button}
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
