"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const defaultFeatures = ["Smart detection", "Storage analysis", "Trash system", "Premium support"]

export function HomePluginsSection() {
  const { t } = useTranslation()
  const features = t('homePluginsSection.features', { returnObjects: true, defaultValue: defaultFeatures }) as string[]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-primary/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            {t('homePluginsSection.title', "Need a")} <span className="text-primary">{t('homePluginsSection.titleHighlight', "WordPress Plugin?")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t('homePluginsSection.description', "I also build premium WordPress plugins for storage optimization, media management, and more.")}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {features.map((feature, i) => (
              <span key={i} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-border/50 bg-background/60">
                {feature}
              </span>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">{t('homePluginsSection.productTitle', "Media Audit")}</h3>
            <p className="text-sm text-muted-foreground mb-6">{t('homePluginsSection.productTagline', "Clean unused media files safely")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full h-14 px-8 font-bold group shadow-xl hover:shadow-primary/20 transition-all">
                <Link href="/plugins">
                  {t('homePluginsSection.viewAll', "View All Plugins")}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 font-bold border-2">
                <Link href="https://wordpress.org/plugins/oliverodev-media-audit/" target="_blank">
                  {t('homePluginsSection.tryFree', "Try Free Version")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
