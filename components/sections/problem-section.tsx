"use client"

import { useTranslation } from "react-i18next"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AlertTriangle, TrendingDown, ShieldAlert, Smartphone } from "lucide-react"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

const painIcons = [TrendingDown, ShieldAlert, AlertTriangle, Smartphone]

interface ProblemSectionProps {
  locale?: "en" | "es"
}

export function ProblemSection({ locale }: ProblemSectionProps = {}) {
  const { t } = useTranslation()
  const copy = locale === "es" ? es.problemSection : locale === "en" ? en.problemSection : undefined

  const problems = [
    { icon: painIcons[0], key: "slow" },
    { icon: painIcons[1], key: "security" },
    { icon: painIcons[2], key: "conversion" },
    { icon: painIcons[3], key: "mobile" },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              {copy?.eyebrow || t('problemSection.eyebrow', "What is costing you")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {copy?.title || t('problemSection.title', `${t('problemSection.titlePrefix')} ${t('problemSection.titleHighlight')}`)}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {copy?.description || t('problemSection.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {problems.map((problem, i) => {
            const Icon = problem.icon
            const localizedProblem = copy?.problems[i] as { title: string; description: string; negativeOutcome?: string } | undefined
            return (
              <ScrollReveal key={problem.key} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-border/60 bg-card p-6 md:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500/15 transition-colors">
                      <Icon className="w-5 h-5 text-red-500 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{localizedProblem?.title || t(`problemSection.problems.${i}.title`)}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{localizedProblem?.description || t(`problemSection.problems.${i}.description`)}</p>
                      <p className="mt-3 text-xs font-semibold text-red-600 dark:text-red-400">
                        {localizedProblem?.negativeOutcome || copy?.riskLabel || t(`problemSection.problems.${i}.negativeOutcome`, t("problemSection.riskLabel", "Risk: lost trust, slower decisions, and fewer qualified leads."))}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              {copy?.bottomCTA || t('problemSection.bottomCTA', "The goal is not more design noise. The goal is a website that feels trustworthy, loads fast, and makes the next step obvious.")}{" "}
              <span className="font-bold text-foreground">OliveroDev</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
