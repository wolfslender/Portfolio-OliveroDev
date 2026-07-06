import { client } from "@/lib/sanity/client"
import { groq } from "next-sanity"
import { BlogList } from "@/components/blog/blog-list"
import { BlogPageHeader, BlogComingSoon } from "./blog-page-header"

const postsQuery = groq`
  *[_type == "post"] {
    _id,
    title,
    title_es,
    slug,
    publishedAt,
    "authorName": author->name,
    "categories": categories[]->title,
    keywords,
    mainImage
  }
`

const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    title
  }
`

import { siteConfig } from "@/lib/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical tutorials, coding guides, and deep dives on React, Next.js, WordPress, Webflow, SEO, and modern web development. Written by Alexis Olivero, Senior Frontend Engineer.",
  keywords: [
    "web development blog", "react tutorials", "next.js guides", "wordpress development",
    "webflow tips", "seo strategies", "frontend engineering", "javascript tutorials",
    "typescript guide", "web performance", "blog desarrollo web",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    type: "website",
    title: "OliveroDev Blog — Web Dev, SEO & Tech Insights",
    description: "Practical tutorials, coding guides, and deep dives on React, Next.js, WordPress, Webflow, SEO, and modern web development.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "OliveroDev Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OliveroDev Blog — Web Dev, SEO & Tech Insights",
    description: "Practical tutorials and deep dives on React, Next.js, WordPress, and modern web development.",
    images: [`${siteConfig.url}/opengraph-image`],
  },
}

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteConfig.url}/blog`,
  name: "OliveroDev Blog",
  description: "Practical tutorials, coding guides, and deep dives on React, Next.js, WordPress, Webflow, SEO, and modern web development.",
  url: `${siteConfig.url}/blog`,
  publisher: {
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
  },
  inLanguage: ["en-US", "es-ES"],
}

export default async function BlogPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return <BlogComingSoon />
  }

  const [postsRaw, categories] = await Promise.all([
    client.fetch(postsQuery),
    client.fetch(categoriesQuery)
  ])

  const posts = postsRaw.sort((a: any, b: any) => {
    return new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime()
  })

  const tags = categories.map((cat: any) => cat.title)

  return (
    <div className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <BlogPageHeader />

      <BlogList posts={posts} tags={tags} />
    </div>
  )
}
