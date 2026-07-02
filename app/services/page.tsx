import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Services",
  description: "Expert web development services: React, Next.js, Webflow, performance and security.",
  alternates: { canonical: `${siteConfig.url}/services/` },
}

import ServicesContent from "@/components/pages/services-content"

import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What technologies do you use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "React, Next.js, WordPress, Webflow, TypeScript, Tailwind CSS.",
                },
              },
              {
                "@type": "Question",
                name: "Do you include technical SEO?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Sitemap, robots, structured data, Core Web Vitals, canonical and internal linking.",
                },
              },
              {
                "@type": "Question",
                name: "Typical delivery time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "From 2 to 6 weeks depending on scope and integrations.",
                },
              },
            ],
          }),
        }}
      />
      <ServicesContent />
    </>
  )
}
