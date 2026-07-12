import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description: "Featured web development projects and case studies. React, Next.js, WordPress, Webflow — performance-focused builds for real businesses.",
  alternates: {
    canonical: `${siteConfig.url}/work/`,
    languages: { en: `${siteConfig.url}/work/`, es: `${siteConfig.url}/es/work/`, "x-default": `${siteConfig.url}/work/` },
  },
}

import WorkContent from "@/components/pages/work-content"

import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export default function WorkPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Work", path: "/work/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Portfolio Projects",
            description: "A selection of my most recent and significant work, showcasing my expertise in building scalable web applications.",
            url: `${siteConfig.url}/work/`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "CreativeWork",
                  position: 1,
                  name: "Global Leadership Platform",
                  description: "Fullstack development for a global leadership platform serving 150k+ professionals.",
                  creator: { "@type": "Person", name: siteConfig.author }
                },
                {
                  "@type": "CreativeWork",
                  position: 2,
                  name: "Puerto Rico Department of Education",
                  description: "Public-sector WordPress platform built from scratch with custom development and government file integrations.",
                  creator: { "@type": "Person", name: siteConfig.author }
                },
                {
                  "@type": "CreativeWork",
                  position: 3,
                  name: "Traffic Safety Platform",
                  description: "Traffic-safety platform with accident-statistics API integrations, built in WordPress and later migrated to Webflow.",
                  creator: { "@type": "Person", name: siteConfig.author }
                }
              ]
            }
          }),
        }}
      />
      <WorkContent />
    </>
  )
}
