import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the developer portfolio. Learn how your data is handled and protected.",
  alternates: {
    canonical: `${siteConfig.url}/privacy/`,
    languages: { en: `${siteConfig.url}/privacy/`, es: `${siteConfig.url}/es/privacy/`, "x-default": `${siteConfig.url}/privacy/` },
  },
}

import PrivacyContent from "@/components/pages/privacy-content"

import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description: "How we handle your data and privacy.",
            url: `${siteConfig.url}/privacy/`,
          }),
        }}
      />
      <PrivacyContent />
    </>
  )
}
