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
    heroTitle: t('pluginsPage.heroTitle', "Stop paying to store files"),
    heroHighlight: t('pluginsPage.heroHighlight', "nobody uses."),
    heroDescription: t('pluginsPage.heroDescription', "Your media library hides orphaned files that eat storage and slow down backups. Media Audit finds them, shows you exactly what is safe to delete, and lets you clean up in minutes."),
    heroCtaPrimary: t('pluginsPage.heroCtaPrimary', "Scan my library — free"),
    heroCtaSecondary: t('pluginsPage.heroCtaSecondary', "See PRO plans"),
    ratingLine: t('pluginsPage.ratingLine', "Rated 5.0 by verified WordPress.org reviewers"),
    trustLine: t('pluginsPage.trustLine', "Free version forever · Tested up to WordPress 7.0"),
    shotsEyebrow: t('pluginsPage.shotsEyebrow', "See it in action"),
    shotsTitle: t('pluginsPage.shotsTitle', "Know exactly what is safe to delete"),
    shotsDescription: t('pluginsPage.shotsDescription', "No blind deletions. Every file gets a used/unused status, and PRO adds risk scoring plus a Trash so nothing is lost forever."),
    shots: t('pluginsPage.shots', { returnObjects: true, defaultValue: [
      "Dashboard with total library size, files in use, and storage to recover.",
      "Unused Files tab — full list of unreferenced media ready for cleanup.",
      "Media Library tab — full library view with used/unused status.",
      "Settings — batch size, scan frequency, and file filters."
    ]}) as string[],
    comparisonTitle: t('pluginsPage.comparisonTitle', "Free vs PRO — see what unlocks"),
    comparisonSubtitle: t('pluginsPage.comparisonSubtitle', "Start free with 15 deletions. Upgrade when you need unlimited cleanup."),
    freeTitle: t('pluginsPage.freeTitle', "FREE — forever"),
    freeLimit: t('pluginsPage.freeLimit', "15 deletions included"),
    proTitle: t('pluginsPage.proTitle', "PRO — $19/year"),
    proLimit: t('pluginsPage.proLimit', "Unlimited deletions"),
    valueAnchor: t('pluginsPage.valueAnchor', "Less than $1.60/month — less than one hour of developer time, and it recovers gigabytes of hosting storage."),
    faqTitle: t('pluginsPage.faqTitle', "Common questions"),
    faq: t('pluginsPage.faq', { returnObjects: true, defaultValue: [
      { q: "Is it safe to delete files?", a: "Yes. Media Audit shows exactly where every file is used before you delete, and PRO adds a risk score (0–100) so you always know what you are removing. PRO also keeps every deletion recoverable for 30 days in the Trash." },
      { q: "Can I restore files I deleted by mistake?", a: "With PRO, yes. Every deletion goes to the PRO Trash first and can be restored before permanent removal." },
      { q: "Does it detect files used by page builders?", a: "The free version covers posts, pages, widgets, and theme mods. PRO adds deep detection for Elementor, ACF, Divi, and WooCommerce." },
      { q: "What happens after the 15 free deletions?", a: "The scanner and dashboard stay free forever. When you need more, PRO unlocks unlimited deletions, risk scoring, bulk cleanup, and automatic reports." }
    ]}) as { q: string; a: string }[],
    finalCtaTitle: t('pluginsPage.finalCtaTitle', "Clean your library today"),
    finalCtaDescription: t('pluginsPage.finalCtaDescription', "Get PRO and recover storage in the next 10 minutes."),
    finalCtaButton: t('pluginsPage.finalCtaButton', "Get PRO — $19/year"),
    finalCtaNote: t('pluginsPage.finalCtaNote', "14-day money-back guarantee · Instant activation"),
    testimonialQuote: t('pluginsPage.testimonialQuote', "Limpió archivos basura y optimizó mi sitio de WordPress rápidamente sin afectar nada importante."),
    testimonialRole: t('pluginsPage.testimonialRole', "Verified WordPress.org reviewer"),
    testimonialLink: t('pluginsPage.testimonialLink', "View verified source"),
    freeLabel: t('pluginsPage.freeLabel', "Free — Always"),
    startTrial: t('pluginsPage.startTrial', "Get PRO"),
    freeOnWp: t('pluginsPage.freeOnWp', "Free on WP.org"),
    noCreditCard: t('pluginsPage.noCreditCard', "Instant activation after checkout"),
    threeDayTrial: t('pluginsPage.threeDayTrial', "14-day money-back guarantee"),
    cancelAnytime: t('pluginsPage.cancelAnytime', "Cancel anytime"),
    getStarted: t('pluginsPage.getStarted', "Get started"),
    forAgencies: t('pluginsPage.forAgencies', "For agencies"),
    whyTitle: t('pluginsPage.whyTitle', "Why My Plugins?"),
    whyDescription: t('pluginsPage.whyDescription', "Built like production code — because these plugins run on production sites."),
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
