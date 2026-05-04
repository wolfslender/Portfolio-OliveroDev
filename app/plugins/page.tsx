import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import PluginsContent from "@/components/pages/plugins-content"

export const metadata: Metadata = {
  title: "WordPress Plugins - Built to Scale",
  description: "Premium WordPress plugins designed to solve real problems. Clean code, regular updates, and dedicated support.",
  alternates: { canonical: `${siteConfig.url}/plugins/` },
}

export default function PluginsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "WordPress Plugins",
            description: "Premium WordPress plugins for performance, storage optimization, and more.",
            url: `${siteConfig.url}/plugins/`,
          }),
        }}
      />
      <PluginsContent />
    </>
  )
}