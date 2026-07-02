import { useMemo } from "react"
import { plugins as defaultPlugins } from "@/lib/data"

export function usePlugins() {
  return useMemo(() => ({
    hero: defaultPlugins.hero,
    plugins: defaultPlugins.plugins.map((plugin: any) => ({
      ...plugin,
      title: plugin.title,
      tagline: plugin.tagline,
      description: plugin.description,
      features: plugin.features,
      proFeatures: plugin.proFeatures,
      price: plugin.price,
      url: plugin.url,
      freemiusUrl: plugin.freemiusUrl,
      icon: plugin.icon,
      color: plugin.color,
      bgColor: plugin.bgColor,
    }))
  }), [])
}
