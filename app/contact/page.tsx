

import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Request a Website Audit or Technical Consultation",
  description: "Share your website, platform, main problem, timeline, and budget so I can recommend the clearest next step for your site.",
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
    languages: { en: `${siteConfig.url}/contact/`, es: `${siteConfig.url}/es/contact/`, "x-default": `${siteConfig.url}/contact/` },
  },
}

import { ContactSection } from "@/components/sections/contact-section"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Suspense } from "react"

import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Request a Website Audit or Technical Consultation",
            description: "Contact Alexis Olivero for website audits, performance optimization, security hardening, recovery, migrations, builds, and ongoing technical support.",
            url: `${siteConfig.url}/contact/`,
          }),
        }}
      />
      <Suspense fallback={<div className="min-h-[50vh]" />}>
        <ContactSection />
      </Suspense>
      <FloatingWhatsApp />
    </div>
  )
}
