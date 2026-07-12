import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { getServiceListSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Website Audit, Optimization, Security & Migration Services",
  description: "Website audits, performance optimization, security hardening, hacked-site recovery, migrations, builds, and ongoing technical support for established businesses.",
  keywords: [
    "web development services",
    "website audit",
    "desarrollador web freelance",
    "website optimization",
    "web security audit",
    "hacked site recovery",
    "platform migration",
    "wordpress developer",
    "react developer",
    "next.js development",
    "web performance",
    "core web vitals",
    "sitio web lento",
    "recuperar sitio hackeado",
    "migrar sitio web",
    "seguridad web",
    "servicios de desarrollo web",
    "pagina web profesional",
    "software developer",
  ],
  openGraph: {
    title: "Website Audit, Optimization & Security Services — Alexis Olivero",
    description: "Audits, optimization, security, recovery, migrations, new builds, and ongoing website support for businesses that need a website they can trust.",
    url: `${siteConfig.url}/services/`,
  },
  twitter: {
    title: "Website Audit, Optimization & Security Services — Alexis Olivero",
    description: "Audits, optimization, security, recovery, migrations, builds, and ongoing website support.",
  },
  alternates: {
    canonical: `${siteConfig.url}/services/`,
    languages: {
      "en": `${siteConfig.url}/services/`,
      "es": `${siteConfig.url}/es/services/`,
      "x-default": `${siteConfig.url}/services/`,
    },
  },
}

import ServicesContent from "@/components/pages/services-content"

import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

const serviceSchemaItems = [
  {
    position: 1,
    name: "Website Audit & Action Plan",
    description: "Technical and conversion audit covering performance, security, SEO basics, UX friction, plugins, hosting, and maintenance risks.",
    serviceType: "Website Audit",
    offers: { priceCurrency: "USD", minPrice: 200, maxPrice: 350 },
  },
  {
    position: 2,
    name: "Optimize & Protect Your Website",
    description: "Performance optimization, security hardening, plugin cleanup, access review, and technical SEO for existing websites.",
    serviceType: "Web Optimization and Security",
  },
  {
    position: 3,
    name: "Hacked Site Recovery",
    description: "Emergency malware cleanup, vulnerability patching, content restoration, and post-recovery security hardening for compromised websites.",
    serviceType: "Web Security",
    offers: { priceCurrency: "USD", minPrice: 120, maxPrice: 300 },
  },
  {
    position: 4,
    name: "Rebuild & Platform Migration",
    description: "Website rebuilds and CMS migrations with content planning, SEO preservation, redirects, integrations, performance, and post-launch QA.",
    serviceType: "Web Development",
    offers: { priceCurrency: "USD", minPrice: 250, maxPrice: 700 },
  },
  {
    position: 5,
    name: "Websites & MVPs",
    description: "New websites, landing pages, CMS builds, and MVPs with strategy, UX direction, development, analytics, and launch support.",
    serviceType: "Web Development",
  },
  {
    position: 6,
    name: "Ongoing Website Partner",
    description: "Monthly technical support for website maintenance, updates, small feature work, security checks, performance improvements, and technical coordination.",
    serviceType: "Website Maintenance",
  },
]

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceListSchema(serviceSchemaItems)) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                "name": "How fast can you optimize my site?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most optimization projects start with an audit and a prioritized fix list. Implementation timelines are usually 2-4 weeks depending on the platform, hosting, plugin risk, and how much technical debt needs to be cleaned up.",
                },
              },
              {
                "@type": "Question",
                "name": "Do you include technical SEO with your services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Every project includes foundational SEO: sitemap generation, robots.txt, structured data (JSON-LD), Core Web Vitals optimization, canonical URLs, and internal linking strategy. SEO is built in, not bolted on.",
                },
              },
              {
                "@type": "Question",
                "name": "What if my site gets hacked?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I offer emergency recovery with 24-72 hour turnaround for most sites. The process includes malware cleanup, vulnerability patching, file integrity restoration, and post-recovery hardening to prevent future attacks.",
                },
              },
              {
                "@type": "Question",
                "name": "Can you migrate my site without downtime or SEO loss?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I plan migrations to reduce downtime risk and protect SEO fundamentals: content, metadata, redirects, analytics, technical checks, and post-launch QA. Rankings can never be guaranteed, but the migration should be handled carefully and measured.",
                },
              },
              {
                "@type": "Question",
                "name": "What platforms do you work with?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I work across the stack: WordPress, Webflow, Next.js, React, Node.js, and custom PHP. Whether you need a CMS site or a custom web application, I match the technology to your specific needs.",
                },
              },
              {
                "@type": "Question",
                "name": "How much does a website cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every project is different. Smaller audits have defined ranges, while builds, migrations, retainers, and security work are quoted based on scope, platform complexity, timeline, and risk.",
                },
              },
              {
                "@type": "Question",
                "name": "Do you work with clients in Latin America?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, trabajo con clientes en toda Latinoamérica. Hablo español nativo y entiendo las necesidades del mercado local. Precios en USD, servicios exentos de impuestos para clientes fuera de República Dominicana.",
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
