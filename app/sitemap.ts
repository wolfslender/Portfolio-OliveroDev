import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'
import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString()

  type SitemapRoute = {
    path: string
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority: number
  }

  const routes: SitemapRoute[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/services/', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/blog/', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/work/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/plugins/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/about/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/contact/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/glossary/', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/privacy/', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms/', changeFrequency: 'yearly', priority: 0.3 },
  ]

  const staticEntries = routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        en: `${siteConfig.url}${route.path}`,
        es: `${siteConfig.url}${route.path === "/" ? "/es/" : `/es${route.path}`}`,
      },
    },
  }))

  const spanishEntries = routes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "/es/" : `/es${route.path}`}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: Math.max(route.priority - 0.05, 0.3),
    alternates: {
      languages: {
        en: `${siteConfig.url}${route.path}`,
        es: `${siteConfig.url}${route.path === "/" ? "/es/" : `/es${route.path}`}`,
      },
    },
  }))

  // Fetch blog posts
  const query = groq`*[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    publishedAt,
    _updatedAt
  }`

  let blogEntries: MetadataRoute.Sitemap = []

  try {
    // Only attempt to fetch if project ID is available to avoid build errors
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const posts = await client.fetch(query)
      blogEntries = posts.map((post: any) => ({
        url: `${siteConfig.url}/blog/${post.slug}/`,
        lastModified: post._updatedAt || post.publishedAt || currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  return [...staticEntries, ...spanishEntries, ...blogEntries]
}
