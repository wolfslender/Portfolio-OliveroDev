"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, BarChart3, Smartphone } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export function ProblemSection() {
  const { t } = useTranslation()

  const problems = [
    {
      icon: Clock,
      title: t('problemSection.problems.0.title'),
      description: t('problemSection.problems.0.description'),
    },
    {
      icon: Shield,
      title: t('problemSection.problems.1.title'),
      description: t('problemSection.problems.1.description'),
    },
    {
      icon: BarChart3,
      title: t('problemSection.problems.2.title'),
      description: t('problemSection.problems.2.description'),
    },
    {
      icon: Smartphone,
      title: t('problemSection.problems.3.title'),
      description: t('problemSection.problems.3.description'),
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            {t('problemSection.titlePrefix')}{" "}
            <span className="text-primary">{t('problemSection.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            {t('problemSection.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/5 text-primary shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold">{problem.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="h-12 px-8 font-bold group">
            <Link href="/services">
              {t('problemSection.cta')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
