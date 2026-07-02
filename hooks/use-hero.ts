import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { hero as defaultHero } from "@/lib/data"

export function useHero() {
  const { t } = useTranslation()
  return useMemo(() => ({
    ...defaultHero,
    title: {
      prefix: t('hero.title.prefix', defaultHero.title.prefix),
      highlight: t('hero.title.highlight', defaultHero.title.highlight)
    },
    roles: t('hero.roles', { returnObjects: true, defaultValue: defaultHero.roles }) as string[],
    description: t('hero.description', defaultHero.description),
    proof: t('hero.proof', { returnObjects: true, defaultValue: defaultHero.proof }) as string[],
    buttons: {
      primary: t('hero.buttons.primary', defaultHero.buttons.primary),
      secondary: t('hero.buttons.secondary', defaultHero.buttons.secondary),
      downloadCv: t('hero.buttons.downloadCv', defaultHero.buttons.downloadCv)
    }
  }), [t])
}
