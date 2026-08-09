import { client, urlFor } from "@/lib/sanity/client"
import { groq } from "next-sanity"
import { siteConfig } from "@/lib/config"

export const dynamic = "force-static"

const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    title,
    title_es,
    slug,
    description,
    publishedAt,
    "authorName": author->name,
    mainImage
  }
`

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  let posts: any[] = []

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      posts = await client.fetch(postsQuery)
    }
  } catch (error) {
    console.error("Error fetching posts for RSS:", error)
  }

  const items = posts
    .map((post) => {
      const postUrl = `${siteConfig.url}/blog/${post.slug.current}/`
      const description =
        post.description || post.title
      const imageTag = post.mainImage
        ? `<enclosure url="${escapeXml(urlFor(post.mainImage).url())}" type="image/jpeg" />`
        : ""

      return `
  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${escapeXml(postUrl)}</link>
    <guid isPermaLink="true">${escapeXml(postUrl)}</guid>
    <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    <description>${escapeXml(description)}</description>
    <author>${escapeXml(post.authorName || siteConfig.author)}</author>
    ${imageTag}
  </item>`
    })
    .join("")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)} Blog</title>
    <link>${escapeXml(siteConfig.url)}/blog/</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en</language>
    <atom:link href="${escapeXml(siteConfig.url)}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
