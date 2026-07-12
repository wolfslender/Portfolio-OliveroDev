import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { getLandingPageBySlug } from "@/lib/landing-pages"
import ServiceLandingContent from "@/components/pages/service-landing-content"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Website Migration Services — Alexis Olivero",
  description: "Migrate or rebuild your website without losing the things that matter. Migration strategy, content transfer, redirect planning, SEO preservation, and launch support.",
  keywords: [
    "website migration",
    "wordpress migration",
    "webflow migration",
    "cms migration",
    "website rebuild",
    "platform migration",
    "seo preservation",
    "redirect planning",
  ],
  openGraph: {
    title: "Website Migration Services — Alexis Olivero",
    description: "Migrate or rebuild your website without losing the things that matter. Migration strategy, content transfer, redirect planning, SEO preservation, and launch support.",
    url: `${siteConfig.url}/website-migration/`,
  },
  twitter: {
    title: "Website Migration Services — Alexis Olivero",
    description: "Migrate or rebuild your website without losing the things that matter. Migration strategy, content transfer, redirect planning, SEO preservation, and launch support.",
  },
  alternates: {
    canonical: `${siteConfig.url}/website-migration/`,
    languages: {
      "en": `${siteConfig.url}/website-migration/`,
      "es": `${siteConfig.url}/es/website-migration/`,
      "x-default": `${siteConfig.url}/website-migration/`,
    },
  },
}

export default function WebsiteMigrationPage() {
  const data = getLandingPageBySlug("website-migration")
  if (!data) return null

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Website Migration", path: "/website-migration" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Website Migration Services",
            description: "Migration strategy, content transfer, redirect planning, SEO preservation, and launch support for website migrations.",
            url: `${siteConfig.url}/website-migration/`,
            provider: {
              "@type": "Person",
              name: "Alexis Olivero",
              url: siteConfig.url,
            },
            serviceType: "Website Migration",
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
