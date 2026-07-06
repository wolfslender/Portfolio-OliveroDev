"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export function BlogComingSoon() {
  const { t } = useTranslation()

  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">{t('blogPage.comingSoon')}</h1>
      <p className="text-muted-foreground">{t('blogPage.settingUp')}</p>
    </div>
  )
}

export function BlogWelcome() {
  const { t } = useTranslation()

  return (
    <div className="container py-24 text-center">
      <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> {t('blogPost.backToBlog')}
      </Link>
      <h1 className="text-4xl font-bold mb-4">{t('blogWelcome.title')}</h1>
      <p className="text-muted-foreground">{t('blogWelcome.description')}</p>
    </div>
  )
}

export function BlogPageHeader() {
  const { t } = useTranslation()

  return (
    <header className="mb-20 text-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl -z-10" />

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        {t('blogPage.badge')}
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
        {t('blogPage.titlePrefix')} <span className="text-primary">{t('blogPage.titleHighlight')}</span> Blog
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        {t('blogPage.description')}
      </p>
    </header>
  )
}
