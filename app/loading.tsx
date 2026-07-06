"use client"

import { useTranslation } from "react-i18next"

export default function Loading() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-muted-foreground text-sm">{t('loading.message')}</p>
      </div>
    </div>
  )
}
