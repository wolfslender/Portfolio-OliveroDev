import { client } from "@/lib/sanity/client"
import { groq } from "next-sanity"
import { BlogList } from "@/components/blog/blog-list"

// Query to get posts
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

// Query to get all categories (tags)
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
  // If we don't have a project ID yet, show a placeholder
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Coming Soon</h1>
        <p className="text-muted-foreground">We are currently setting up our content system.</p>
      </div>
    )
  }

  const [postsRaw, categories] = await Promise.all([
    client.fetch(postsQuery),
    client.fetch(categoriesQuery)
  ])

  // Sort posts manually to ensure we don't lose any due to GROQ ordering quirks
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
      {/* Premium Header */}
      <header className="mb-20 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Tutorials, Guides & Tech
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
          The <span className="text-gradient">OliveroDev</span> Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Practical tutorials, coding guides, and technical deep dives. I share my experience as a Senior Frontend Engineer building with React, Next.js, WordPress, Webflow, and modern web architecture.
        </p>
      </header>

      <BlogList posts={posts} tags={tags} />
    </div>
  )
}
