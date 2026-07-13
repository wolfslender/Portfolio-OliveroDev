import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { getLandingPageBySlug } from "@/lib/landing-pages"
import { ServiceLandingContent } from "@/components/pages/service-landing-content"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Hacked WordPress Recovery — Alexis Olivero",
  description: "Recover your hacked WordPress site and close the door behind the attacker. Malware cleanup, vulnerability patching, content restoration, and post-recovery hardening.",
  keywords: [
    "hacked wordpress recovery",
    "wordpress malware cleanup",
    "wordpress security incident",
    "hacked website recovery",
    "wordpress hack recovery",
    "malware removal",
    "security recovery",
  ],
  openGraph: {
    title: "Hacked WordPress Recovery — Alexis Olivero",
    description: "Recover your hacked WordPress site and close the door behind the attacker. Malware cleanup, vulnerability patching, content restoration, and post-recovery hardening.",
    url: `${siteConfig.url}/hacked-wordpress-recovery/`,
  },
  twitter: {
    title: "Hacked WordPress Recovery — Alexis Olivero",
    description: "Recover your hacked WordPress site and close the door behind the attacker. Malware cleanup, vulnerability patching, content restoration, and post-recovery hardening.",
  },
  alternates: {
    canonical: `${siteConfig.url}/hacked-wordpress-recovery/`,
    languages: {
      "en": `${siteConfig.url}/hacked-wordpress-recovery/`,
      "es": `${siteConfig.url}/es/hacked-wordpress-recovery/`,
      "x-default": `${siteConfig.url}/hacked-wordpress-recovery/`,
    },
  },
}

export default function HackedWordPressRecoveryPage() {
  const data = getLandingPageBySlug("hacked-wordpress-recovery")
  if (!data) return null

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Hacked WordPress Recovery", path: "/hacked-wordpress-recovery" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Hacked WordPress Recovery",
            description: "Malware cleanup, vulnerability patching, content restoration, and post-recovery hardening for compromised WordPress websites.",
            url: `${siteConfig.url}/hacked-wordpress-recovery/`,
            provider: {
              "@type": "Person",
              name: "Alexis Olivero",
              url: siteConfig.url,
            },
            serviceType: "Hacked WordPress Recovery",
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
