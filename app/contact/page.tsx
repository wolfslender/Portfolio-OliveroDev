

import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Get in Touch",
  description: "Let's work together. Email, LinkedIn, GitHub, and WhatsApp — reach out to start your next project.",
  alternates: { canonical: `${siteConfig.url}/contact/` },
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
            name: "Contact",
            description: "Get in touch to start your project. Email, LinkedIn, GitHub, and WhatsApp available.",
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
