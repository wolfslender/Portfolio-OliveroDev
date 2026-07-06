import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { plugins as defaultPlugins } from "@/lib/data"

export function usePlugins() {
  const { t } = useTranslation()
  return useMemo(() => {
    const pluginsData = t('pluginsData', { returnObjects: true, defaultValue: defaultPlugins }) as typeof defaultPlugins
    return {
      hero: {
        title: pluginsData.hero?.title || defaultPlugins.hero.title,
        highlight: pluginsData.hero?.highlight || defaultPlugins.hero.highlight,
        description: pluginsData.hero?.description || defaultPlugins.hero.description,
      },
      plugins: defaultPlugins.plugins.map((plugin: any, index: number) => {
        const tp = pluginsData.plugins?.[index] || {}
        return {
          ...plugin,
          title: tp.title || plugin.title,
          tagline: tp.tagline || plugin.tagline,
          description: tp.description || plugin.description,
          features: tp.features || plugin.features,
          proFeatures: tp.proFeatures || plugin.proFeatures,
          price: tp.price || plugin.price,
        }
      })
    }
  }, [t])
}

export function usePluginsPage() {
  const { t } = useTranslation()
  return useMemo(() => ({
    metaTitle: t('pluginsPage.metaTitle', "WordPress Plugins - Built to Scale"),
    metaDescription: t('pluginsPage.metaDescription', "Premium WordPress plugins designed to solve real problems. Clean code, regular updates, and dedicated support."),
    heroBadge: t('pluginsPage.heroBadge', "WordPress Plugins"),
    freeLabel: t('pluginsPage.freeLabel', "Free — Always"),
    startTrial: t('pluginsPage.startTrial', "Start Free Trial"),
    freeOnWp: t('pluginsPage.freeOnWp', "Free on WP.org"),
    noCreditCard: t('pluginsPage.noCreditCard', "No credit card for trial"),
    threeDayTrial: t('pluginsPage.threeDayTrial', "3-day free trial"),
    cancelAnytime: t('pluginsPage.cancelAnytime', "Cancel anytime"),
    getStarted: t('pluginsPage.getStarted', "Get started"),
    forAgencies: t('pluginsPage.forAgencies', "For agencies"),
    whyTitle: t('pluginsPage.whyTitle', "Why My Plugins?"),
    whyCards: t('pluginsPage.whyCards', { returnObjects: true, defaultValue: [
      { title: "Clean Code", description: "Well-documented, optimized, and following WordPress best practices." },
      { title: "Regular Updates", description: "Continuous improvements, security patches, and new features." },
      { title: "Dedicated Support", description: "Direct access to support for setup help and custom questions." }
    ]}) as { title: string; description: string }[],
    ctaTitle: t('pluginsPage.ctaTitle', "Need a Custom WordPress Solution?"),
    ctaDescription: t('pluginsPage.ctaDescription', "I also build custom WordPress plugins and themes tailored to your specific needs."),
    ctaButton: t('pluginsPage.ctaButton', "Let's Discuss Your Project")
  }), [t])
}
