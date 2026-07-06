"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Search, Route, Code, Rocket } from "lucide-react"
import { useTranslation } from "react-i18next"

export function ProcessSection() {
  const { t } = useTranslation()

  const steps = [
    {
      step: 1,
      icon: Search,
      title: t('processSection.steps.0.title'),
      description: t('processSection.steps.0.description'),
      details: t('processSection.steps.0.details', { returnObjects: true }) as string[],
      duration: t('processSection.steps.0.duration'),
      deliverable: t('processSection.steps.0.deliverable'),
    },
    {
      step: 2,
      icon: Route,
      title: t('processSection.steps.1.title'),
      description: t('processSection.steps.1.description'),
      details: t('processSection.steps.1.details', { returnObjects: true }) as string[],
      duration: t('processSection.steps.1.duration'),
      deliverable: t('processSection.steps.1.deliverable'),
    },
    {
      step: 3,
      icon: Code,
      title: t('processSection.steps.2.title'),
      description: t('processSection.steps.2.description'),
      details: t('processSection.steps.2.details', { returnObjects: true }) as string[],
      duration: t('processSection.steps.2.duration'),
      deliverable: t('processSection.steps.2.deliverable'),
    },
    {
      step: 4,
      icon: Rocket,
      title: t('processSection.steps.3.title'),
      description: t('processSection.steps.3.description'),
      details: t('processSection.steps.3.details', { returnObjects: true }) as string[],
      duration: t('processSection.steps.3.duration'),
      deliverable: t('processSection.steps.3.deliverable'),
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              {t('processSection.titlePrefix')}{" "}
              <span className="text-primary">{t('processSection.titleHighlight')}</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              {t('processSection.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative group p-8 bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                      0{step.step}
                    </span>
                    <div className="p-3 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow text-sm">
                    {step.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                      <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                      {t('processSection.duration')}{step.duration}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary">
                      <span className="w-1.5 h-1.5 bg-secondary shrink-0" />
                      {t('processSection.deliverable')}{step.deliverable}
                    </div>
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground/70">
                        <div className="w-1.5 h-1.5 bg-foreground/20 shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
