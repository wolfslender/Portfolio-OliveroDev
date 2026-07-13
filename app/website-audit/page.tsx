import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { getLandingPageBySlug } from "@/lib/landing-pages"
import { ServiceLandingContent } from "@/components/pages/service-landing-content"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Website Audit & Action Plan — Alexis Olivero",
  description: "A focused technical and conversion audit for business owners who know their website has problems, but do not know what to fix first. I review speed, security, SEO basics, UX friction, plugins, hosting, and maintenance risks.",
  keywords: [
    "website audit",
    "technical audit",
    "website review",
    "performance audit",
    "security audit",
    "wordpress audit",
    "conversion audit",
    "website assessment",
  ],
  openGraph: {
    title: "Website Audit & Action Plan — Alexis Olivero",
    description: "A focused technical and conversion audit for business owners who know their website has problems, but do not know what to fix first.",
    url: `${siteConfig.url}/website-audit/`,
  },
  twitter: {
    title: "Website Audit & Action Plan — Alexis Olivero",
    description: "A focused technical and conversion audit for business owners who know their website has problems, but do not know what to fix first.",
  },
  alternates: {
    canonical: `${siteConfig.url}/website-audit/`,
    languages: {
      "en": `${siteConfig.url}/website-audit/`,
      "es": `${siteConfig.url}/es/website-audit/`,
      "x-default": `${siteConfig.url}/website-audit/`,
    },
  },
}

export default function WebsiteAuditPage() {
  const data = getLandingPageBySlug("website-audit")
  if (!data) return null

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Website Audit", path: "/website-audit" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Website Audit & Action Plan",
            description: "A focused technical and conversion audit covering performance, security, SEO basics, UX friction, plugins, hosting, and maintenance risks.",
            url: `${siteConfig.url}/website-audit/`,
            provider: {
              "@type": "Person",
              name: "Alexis Olivero",
              url: siteConfig.url,
            },
            serviceType: "Website Audit",
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
