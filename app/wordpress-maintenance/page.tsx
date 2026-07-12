import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { getLandingPageBySlug } from "@/lib/landing-pages"
import ServiceLandingContent from "@/components/pages/service-landing-content"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "WordPress Maintenance Services — Alexis Olivero",
  description: "Keep your WordPress site healthy without hiring a full-time developer. Monthly maintenance, updates, security checks, small fixes, and technical recommendations.",
  keywords: [
    "wordpress maintenance",
    "wordpress support",
    "wordpress updates",
    "monthly wordpress maintenance",
    "wordpress security maintenance",
    "website maintenance",
    "wordpress developer for hire",
  ],
  openGraph: {
    title: "WordPress Maintenance Services — Alexis Olivero",
    description: "Keep your WordPress site healthy without hiring a full-time developer. Monthly maintenance, updates, security checks, small fixes, and technical recommendations.",
    url: `${siteConfig.url}/wordpress-maintenance/`,
  },
  twitter: {
    title: "WordPress Maintenance Services — Alexis Olivero",
    description: "Keep your WordPress site healthy without hiring a full-time developer. Monthly maintenance, updates, security checks, small fixes, and technical recommendations.",
  },
  alternates: {
    canonical: `${siteConfig.url}/wordpress-maintenance/`,
    languages: {
      "en": `${siteConfig.url}/wordpress-maintenance/`,
      "es": `${siteConfig.url}/es/wordpress-maintenance/`,
      "x-default": `${siteConfig.url}/wordpress-maintenance/`,
    },
  },
}

export default function WordPressMaintenancePage() {
  const data = getLandingPageBySlug("wordpress-maintenance")
  if (!data) return null

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "WordPress Maintenance", path: "/wordpress-maintenance" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "WordPress Maintenance Services",
            description: "Monthly maintenance, updates, security checks, small fixes, and technical recommendations for WordPress websites.",
            url: `${siteConfig.url}/wordpress-maintenance/`,
            provider: {
              "@type": "Person",
              name: "Alexis Olivero",
              url: siteConfig.url,
            },
            serviceType: "WordPress Maintenance",
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
