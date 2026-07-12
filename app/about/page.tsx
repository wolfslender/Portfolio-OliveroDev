

import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "About Me",
  description: "Meet Alexis Olivero, a senior web specialist helping established businesses improve website performance, security, maintainability, and digital delivery.",
  alternates: {
    canonical: `${siteConfig.url}/about/`,
    languages: { en: `${siteConfig.url}/about/`, es: `${siteConfig.url}/es/about/`, "x-default": `${siteConfig.url}/about/` },
  },
}

import { AboutSection } from "@/components/sections/about-section"

import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export default function AboutPage() {
  return (
    <div className="pb-20">
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: siteConfig.author,
              url: siteConfig.url,
              image: `${siteConfig.url}/images/avatar.jpg`,
              sameAs: [
                siteConfig.links.github,
                siteConfig.links.linkedin,
                siteConfig.links.instagram,
              ],
              jobTitle: "Full Stack Developer",
              description: siteConfig.description,
            },
          }),
        }}
      />
      <AboutSection />
    </div>
  )
}
