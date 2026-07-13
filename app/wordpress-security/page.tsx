import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { getLandingPageBySlug } from "@/lib/landing-pages"
import { ServiceLandingContent } from "@/components/pages/service-landing-content"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "WordPress Security Review & Hardening — Alexis Olivero",
  description: "Harden your WordPress site before a small risk becomes a real incident. Security review, user access cleanup, plugin risk assessment, and basic hardening.",
  keywords: [
    "wordpress security",
    "wordpress hardening",
    "security review",
    "wordpress security audit",
    "plugin security",
    "user access review",
    "website security",
  ],
  openGraph: {
    title: "WordPress Security Review & Hardening — Alexis Olivero",
    description: "Harden your WordPress site before a small risk becomes a real incident. Security review, user access cleanup, plugin risk assessment, and basic hardening.",
    url: `${siteConfig.url}/wordpress-security/`,
  },
  twitter: {
    title: "WordPress Security Review & Hardening — Alexis Olivero",
    description: "Harden your WordPress site before a small risk becomes a real incident. Security review, user access cleanup, plugin risk assessment, and basic hardening.",
  },
  alternates: {
    canonical: `${siteConfig.url}/wordpress-security/`,
    languages: {
      "en": `${siteConfig.url}/wordpress-security/`,
      "es": `${siteConfig.url}/es/wordpress-security/`,
      "x-default": `${siteConfig.url}/wordpress-security/`,
    },
  },
}

export default function WordPressSecurityPage() {
  const data = getLandingPageBySlug("wordpress-security")
  if (!data) return null

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "WordPress Security", path: "/wordpress-security" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "WordPress Security Review & Hardening",
            description: "Security review, user access cleanup, plugin risk assessment, and basic hardening for WordPress websites.",
            url: `${siteConfig.url}/wordpress-security/`,
            provider: {
              "@type": "Person",
              name: "Alexis Olivero",
              url: siteConfig.url,
            },
            serviceType: "WordPress Security",
            areaServed: "Worldwide",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faq.items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <ServiceLandingContent data={data} />
    </>
  )
}
