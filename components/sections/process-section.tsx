"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { useTranslation } from "react-i18next"
import { Search, Route, Code, Rocket } from "lucide-react"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

interface ProcessSectionProps {
  locale?: "en" | "es"
}

export function ProcessSection({ locale }: ProcessSectionProps = {}) {
  const { t } = useTranslation()
  const copy = locale === "es" ? es.processSection : locale === "en" ? en.processSection : undefined

  const steps = [
    {
      step: 1,
      icon: Search,
      title: copy?.steps[0].title || t('processSection.steps.0.title'),
      description: copy?.steps[0].description || t('processSection.steps.0.description'),
      duration: copy?.steps[0].duration || t('processSection.steps.0.duration'),
      deliverable: copy?.steps[0].deliverable || t('processSection.steps.0.deliverable'),
    },
    {
      step: 2,
      icon: Route,
      title: copy?.steps[1].title || t('processSection.steps.1.title'),
      description: copy?.steps[1].description || t('processSection.steps.1.description'),
      duration: copy?.steps[1].duration || t('processSection.steps.1.duration'),
      deliverable: copy?.steps[1].deliverable || t('processSection.steps.1.deliverable'),
    },
    {
      step: 3,
      icon: Code,
      title: copy?.steps[2].title || t('processSection.steps.2.title'),
      description: copy?.steps[2].description || t('processSection.steps.2.description'),
      duration: copy?.steps[2].duration || t('processSection.steps.2.duration'),
      deliverable: copy?.steps[2].deliverable || t('processSection.steps.2.deliverable'),
    },
    {
      step: 4,
      icon: Rocket,
      title: copy?.steps[3].title || t('processSection.steps.3.title'),
      description: copy?.steps[3].description || t('processSection.steps.3.description'),
      duration: copy?.steps[3].duration || t('processSection.steps.3.duration'),
      deliverable: copy?.steps[3].deliverable || t('processSection.steps.3.deliverable'),
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              {copy?.eyebrow || t('processSection.eyebrow', "How it works")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {copy?.title || t('processSection.title', `${t('processSection.titlePrefix')} ${t('processSection.titleHighlight')}`)}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {copy?.description || t('processSection.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/60" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100}>
                <div className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                          {step.step}
                        </span>
                        <h3 className="text-lg font-bold">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      <div className="mt-5 space-y-2 border-t border-border/40 pt-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary">
                          {copy?.duration || t("processSection.duration")}{step.duration}
                        </p>
                        <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                          {copy?.deliverable || t("processSection.deliverable")}{step.deliverable}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
