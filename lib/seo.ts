import { siteConfig } from "./config"

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.instagram,
    ],
    jobTitle: "Web Developer & Conversion Specialist",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description: siteConfig.description,
    knowsAbout: ["React", "Next.js", "Webflow", "WordPress", "SEO", "Cybersecurity"],
  }
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.instagram,
    ],
  }
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: ["en-US", "es-ES"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#professional-service`,
    name: siteConfig.name,
    url: siteConfig.url,
    areaServed: "Remote",
    serviceType: [
      "Website Audit",
      "Web Performance Optimization",
      "Web Security",
      "Hacked Site Recovery",
      "Platform Migration",
      "Website Maintenance",
      "Web Development",
    ],
    provider: {
      "@type": "Person",
      name: siteConfig.author,
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.instagram,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.links.email,
      contactType: "customer service",
      availableLanguage: ["English", "Spanish"],
    },
  }
}

export function getBlogPostingSchema({
  title,
  description,
  imageUrl,
  keywords,
  authorName,
  datePublished,
  dateModified,
  slug,
}: {
  title: string
  description?: string
  imageUrl?: string
  keywords?: string[]
  authorName?: string
  datePublished?: string
  dateModified?: string
  slug: string
}) {
  const postUrl = `${siteConfig.url}/blog/${slug}/`
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    url: postUrl,
    headline: title,
    description: description || siteConfig.description,
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    }),
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(", ") }),
    author: {
      "@type": "Person",
      name: authorName || siteConfig.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.svg`,
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      "@id": `${siteConfig.url}/blog`,
      url: `${siteConfig.url}/blog/`,
      name: "OliveroDev Blog",
      publisher: {
        "@type": "Person",
        name: siteConfig.author,
      },
    },
  }
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${siteConfig.url}${item.item}`,
    })),
  }
}

interface ServiceSchemaItem {
  name: string
  description: string
  serviceType: string
  position: number
  offers?: {
    priceCurrency: string
    minPrice: number
    maxPrice: number
  }
}

export function getServiceListSchema(services: ServiceSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((svc) => ({
      "@type": "ListItem",
      position: svc.position,
      item: {
        "@type": "Service",
        name: svc.name,
        description: svc.description,
        provider: {
          "@type": "Person",
          name: siteConfig.author,
          url: siteConfig.url,
        },
        areaServed: "Worldwide",
        serviceType: svc.serviceType,
        ...(svc.offers && {
          offers: {
            "@type": "Offer",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: svc.offers.minPrice,
              maxPrice: svc.offers.maxPrice,
              priceCurrency: svc.offers.priceCurrency,
            },
          },
        }),
      },
    })),
  }
}
