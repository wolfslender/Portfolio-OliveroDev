import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { getServiceListSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Web Development Services — Websites, Performance, Security & Migration",
  description: "Professional web services: custom websites & MVPs, performance optimization, web security audits, hacked site recovery, and platform migration. Based in Santo Domingo, serving clients worldwide.",
  keywords: [
    "web development services",
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
    title: "Web Development Services — Alexis Olivero",
    description: "Websites & MVPs, performance optimization, security, hacked site recovery, and platform migration. I build and fix websites that actually bring in business.",
    url: `${siteConfig.url}/services/`,
  },
  twitter: {
    title: "Web Development Services — Alexis Olivero",
    description: "Websites & MVPs, performance optimization, security, hacked site recovery, and platform migration.",
  },
  alternates: {
    canonical: `${siteConfig.url}/services/`,
    languages: {
      "en": `${siteConfig.url}/services/`,
      "es": `${siteConfig.url}/services/`,
      "x-default": `${siteConfig.url}/services/`,
    },
  },
}

import ServicesContent from "@/components/pages/services-content"

import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

const serviceSchemaItems = [
  {
    position: 1,
    name: "Websites & MVPs",
    description: "Custom website or MVP development. From landing pages and CMS sites to full-stack web applications built with React, Next.js, and Node.",
    serviceType: "Web Development",
  },
  {
    position: 2,
    name: "Web Performance Optimization",
    description: "Performance audit and optimization to achieve 90+ Core Web Vitals scores, under 2-second load times, and faster conversion rates.",
    serviceType: "Web Optimization",
    offers: { priceCurrency: "USD", minPrice: 200, maxPrice: 350 },
  },
  {
    position: 3,
    name: "Web Security",
    description: "Comprehensive security audit, malware scanning and removal, firewall configuration, SSL/TLS hardening, and ongoing threat monitoring.",
    serviceType: "Web Security",
  },
  {
    position: 4,
    name: "Hacked Site Recovery",
    description: "Emergency malware cleanup, vulnerability patching, content restoration, and post-recovery security hardening for compromised websites.",
    serviceType: "Web Security",
    offers: { priceCurrency: "USD", minPrice: 120, maxPrice: 300 },
  },
  {
    position: 5,
    name: "Platform Migration",
    description: "Zero-downtime migration between CMS platforms or frameworks. SEO preservation, content migration, data integrity, and post-launch support included.",
    serviceType: "Web Development",
    offers: { priceCurrency: "USD", minPrice: 250, maxPrice: 700 },
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
                  "text": "Most performance projects show measurable improvement within 2-4 weeks. I start with an audit to identify the biggest wins — often seeing 50%+ improvement in load times.",
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
                  "text": "Absolutely. Zero-downtime migration is standard. I preserve all SEO rankings, meta data, content, and functionality throughout the process, with full post-launch monitoring.",
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
                  "text": "Every project is different. Websites & MVPs start from $2,500 depending on scope. I offer free 30-minute strategy calls to understand your needs and provide a detailed quote. No commitment required.",
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
