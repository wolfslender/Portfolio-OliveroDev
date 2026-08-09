import { notFound } from "next/navigation"
import { client } from "@/lib/sanity/client"
import { groq } from "next-sanity"
import { siteConfig } from "@/lib/config"
import { slugify } from "@/lib/utils"
import { BlogList } from "@/components/blog/blog-list"
import { getCollectionPageSchema, getBreadcrumbSchema } from "@/lib/seo"
import type { Metadata } from "next"

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
    description,
    description_es,
    featured,
    "readingMinutes": round(length(pt::text(coalesce(body, []))) / 1100),
    mainImage
  }
`

const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    title
  }
`

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return []
  try {
    const categories = await client.fetch(categoriesQuery)
    return categories.map((cat: any) => ({ slug: slugify(cat.title) }))
  } catch (error) {
    console.warn("Error fetching categories (ES):", error)
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return { title: "Categoría" }

  try {
    const categories = await client.fetch(categoriesQuery)
    const category = categories.find((cat: any) => slugify(cat.title) === slug)
    if (!category) return { title: "No encontrado" }

    const categoryUrl = `${siteConfig.url}/es/blog/category/${slug}/`

    return {
      title: `${category.title} — Blog`,
      description: `Artículos sobre ${category.title}. Tutoriales prácticos, guías de desarrollo e ideas escritas por ${siteConfig.author}.`,
      alternates: {
        canonical: categoryUrl,
        languages: {
          en: `${siteConfig.url}/blog/category/${slug}/`,
          es: categoryUrl,
          "x-default": `${siteConfig.url}/blog/category/${slug}/`,
        },
      },
      openGraph: {
        type: "website",
        title: `${category.title} — OliveroDev Blog`,
        description: `Artículos sobre ${category.title}.`,
        url: categoryUrl,
        siteName: siteConfig.name,
        images: [{ url: `${siteConfig.url}/opengraph-image`, width: 1200, height: 630, alt: category.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: `${category.title} — OliveroDev Blog`,
        description: `Artículos sobre ${category.title}.`,
        images: [`${siteConfig.url}/opengraph-image`],
      },
    }
  } catch (error) {
    return { title: "Categoría" }
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return notFound()

  let posts: any[] = []
  let categories: any[] = []

  try {
    const [postsRaw, categoriesRaw] = await Promise.all([
      client.fetch(postsQuery),
      client.fetch(categoriesQuery)
    ])
    posts = postsRaw || []
    categories = categoriesRaw || []
  } catch (error) {
    console.error("Error fetching category page (ES):", error)
  }

  const category = categories.find((cat: any) => slugify(cat.title) === slug)
  if (!category) return notFound()

  const filteredPosts = posts
    .filter((post) => post.categories?.includes(category.title))
    .sort((a: any, b: any) => new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime())

  const tags = categories.map((cat: any) => cat.title)

  const collectionSchema = getCollectionPageSchema({
    name: `Artículos sobre ${category.title}`,
    description: `Artículos sobre ${category.title} escritos por ${siteConfig.author}.`,
    url: `${siteConfig.url}/es/blog/category/${slug}/`,
    items: filteredPosts.map((post) => ({
      name: post.title_es || post.title,
      url: `${siteConfig.url}/es/blog/${post.slug.current}/`,
    })),
  })

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: siteConfig.name, item: "/" },
    { name: "Blog", item: "/blog" },
    { name: category.title, item: `/es/blog/category/${slug}` },
  ])

  return (
    <div className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className="mb-16 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[250px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl -z-10" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6">
          {category.title}
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">{category.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {filteredPosts.length > 0
            ? `${filteredPosts.length} artículo${filteredPosts.length === 1 ? "" : "s"}`
            : "Sin artículos todavía"}
        </p>
      </header>

      <BlogList posts={filteredPosts} tags={tags} />
    </div>
  )
}
