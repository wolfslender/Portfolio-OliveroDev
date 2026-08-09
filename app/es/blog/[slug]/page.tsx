import { notFound } from "next/navigation"
import { client, urlFor } from "@/lib/sanity/client"
import { groq } from "next-sanity"
import { siteConfig } from "@/lib/config"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import type { Metadata } from "next"

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _updatedAt,
    title,
    title_es,
    slug,
    description,
    description_es,
    publishedAt,
    mainImage,
    "authorName": author->name,
    "authorImage": author->image,
    "authorBio": author->bio,
    "categories": categories[]->title,
    keywords,
    body,
    body_es
  }
`

const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    title
  }
`

const allPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    _id,
    title,
    title_es,
    slug,
    publishedAt,
    "categories": categories[]->title,
    mainImage,
    description,
    description_es
  }
`

export async function generateStaticParams() {
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const query = groq`*[_type == "post"]{ "slug": slug.current }`
      const slugs = await client.fetch(query)
      if (slugs && Array.isArray(slugs) && slugs.length > 0) {
        return slugs.map((slug: any) => ({ slug: slug.slug }))
      }
    }
  } catch (error) {
    console.warn("Error fetching Sanity slugs (ES):", error)
  }
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return { title: 'Blog Post' }

  try {
    const post = await client.fetch(postQuery, { slug })
    if (!post) return { title: 'Not Found' }

    const title = post.title_es || post.title
    const description = post.description_es || post.description || siteConfig.description

    const ogImage = post.mainImage
      ? urlFor(post.mainImage).width(1200).height(630).url()
      : `${siteConfig.url}/opengraph-image`

    const postUrl = `${siteConfig.url}/es/blog/${slug}/`

    return {
      title,
      description,
      keywords: Array.isArray(post.keywords) && post.keywords.length > 0
        ? post.keywords
        : post.categories,
      alternates: {
        canonical: postUrl,
        languages: {
          en: `${siteConfig.url}/blog/${slug}/`,
          es: postUrl,
          "x-default": `${siteConfig.url}/blog/${slug}/`,
        },
      },
      openGraph: {
        title,
        description,
        type: "article",
        url: postUrl,
        siteName: siteConfig.name,
        publishedTime: post.publishedAt,
        modifiedTime: post._updatedAt || post.publishedAt,
        authors: [post.authorName || siteConfig.author],
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    }
  } catch (error) {
    return { title: 'Blog Post' }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return notFound()
  }

  let post = null
  let categories = []
  let allPosts = []

  try {
    const safeSlug = typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : ''

    if (safeSlug) {
      const [postResult, categoriesResult, allPostsResult] = await Promise.all([
        client.fetch(postQuery, { slug: safeSlug }),
        client.fetch(categoriesQuery),
        client.fetch(allPostsQuery)
      ])
      post = postResult
      categories = categoriesResult
      allPosts = allPostsResult || []
    }
  } catch (error) {
    console.error("Error fetching post (ES):", error)
  }

  if (!post) {
    return notFound()
  }

  const tags = categories.map((cat: any) => cat.title)

  const sorted = [...allPosts].sort((a: any, b: any) => {
    return new Date(a.publishedAt || 0).getTime() - new Date(b.publishedAt || 0).getTime()
  })
  const currentIndex = sorted.findIndex((p: any) => p.slug?.current === post.slug?.current)
  const prevPost = currentIndex > 0 ? sorted[currentIndex - 1] : null
  const nextPost = currentIndex >= 0 && currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null

  const postCategories: string[] = post.categories || []
  const related = sorted
    .filter((p: any) => p.slug?.current !== post.slug?.current)
    .map((p: any) => ({
      ...p,
      overlap: (p.categories || []).filter((c: string) => postCategories.includes(c)).length,
    }))
    .sort((a: any, b: any) => b.overlap - a.overlap || new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime())
    .slice(0, 3)

  const popularPosts = sorted
    .filter((p: any) => p.slug?.current !== post.slug?.current)
    .slice(-3)
    .reverse()
    .map((p: any) => ({
      _id: p._id,
      title: p.title,
      title_es: p.title_es,
      slug: p.slug,
      publishedAt: p.publishedAt,
    }))

  return (
    <BlogPostContent
      post={post}
      tags={tags}
      relatedPosts={related.length > 0 ? related : []}
      prevPost={prevPost}
      nextPost={nextPost}
      popularPosts={popularPosts}
    />
  )
}
