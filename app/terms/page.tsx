import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the developer portfolio. Rules and regulations for using this website.",
  alternates: {
    canonical: `${siteConfig.url}/terms/`,
    languages: { en: `${siteConfig.url}/terms/`, es: `${siteConfig.url}/es/terms/`, "x-default": `${siteConfig.url}/terms/` },
  },
}

import TermsContent from "@/components/pages/terms-content"

import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service",
            description: "Rules and regulations for using this website.",
            url: `${siteConfig.url}/terms/`,
          }),
        }}
      />
      <TermsContent />
    </>
  )
}
