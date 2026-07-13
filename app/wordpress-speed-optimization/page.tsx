import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { getLandingPageBySlug } from "@/lib/landing-pages"
import { ServiceLandingContent } from "@/components/pages/service-landing-content"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "WordPress Speed Optimization — Alexis Olivero",
  description: "Make your WordPress site faster without rebuilding everything. Performance audit, plugin review, image optimization, cache configuration, and Core Web Vitals improvements.",
  keywords: [
    "wordpress speed optimization",
    "wordpress performance",
    "page speed",
    "core web vitals",
    "wordpress optimization",
    "slow wordpress site",
    "wordpress caching",
  ],
  openGraph: {
    title: "WordPress Speed Optimization — Alexis Olivero",
    description: "Make your WordPress site faster without rebuilding everything. Performance audit, plugin review, image optimization, and Core Web Vitals improvements.",
    url: `${siteConfig.url}/wordpress-speed-optimization/`,
  },
  twitter: {
    title: "WordPress Speed Optimization — Alexis Olivero",
    description: "Make your WordPress site faster without rebuilding everything. Performance audit, plugin review, image optimization, and Core Web Vitals improvements.",
  },
  alternates: {
    canonical: `${siteConfig.url}/wordpress-speed-optimization/`,
    languages: {
      "en": `${siteConfig.url}/wordpress-speed-optimization/`,
      "es": `${siteConfig.url}/es/wordpress-speed-optimization/`,
      "x-default": `${siteConfig.url}/wordpress-speed-optimization/`,
    },
  },
}

export default function WordPressSpeedOptimizationPage() {
  const data = getLandingPageBySlug("wordpress-speed-optimization")
  if (!data) return null

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "WordPress Speed Optimization", path: "/wordpress-speed-optimization" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "WordPress Speed Optimization",
            description: "Performance audit, plugin review, image optimization, cache configuration, and Core Web Vitals improvements for WordPress websites.",
            url: `${siteConfig.url}/wordpress-speed-optimization/`,
            provider: {
              "@type": "Person",
              name: "Alexis Olivero",
              url: siteConfig.url,
            },
            serviceType: "WordPress Speed Optimization",
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
