"use client"

import { useTranslation } from "react-i18next"
import { PortableText } from "@portabletext/react"
import { ChevronLeft, ChevronRight, Clock, User, Lightbulb, Info, AlertTriangle, Terminal } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import ExportedImage from "next-image-export-optimizer"
import { useState } from "react"
import { urlFor } from "@/lib/sanity/client"
import { formatDate, slugify, estimateReadingTime } from "@/lib/utils"
import { localizePath } from "@/lib/i18n-routing"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { siteConfig } from "@/lib/config"
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/seo"
import { SocialShareButtons } from "@/components/blog/social-share-buttons"
import { TableOfContents } from "@/components/blog/table-of-contents"
import { AuthorBio } from "@/components/blog/author-bio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BlogPostContentProps {
  post: any
  tags: string[]
  relatedPosts?: any[]
  prevPost?: any
  nextPost?: any
  popularPosts?: any[]
}

export function BlogPostContent({ post, tags, relatedPosts = [], prevPost, nextPost, popularPosts = [] }: BlogPostContentProps) {
  const { i18n, t } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const isSpanish = i18n.language.startsWith("es")
  const locale = isSpanish ? "es-ES" : "en-US"
  const keywords: string[] =
    Array.isArray(post?.keywords) && post.keywords.length > 0
      ? post.keywords
      : Array.isArray(post?.categories)
        ? post.categories
        : []

  const handleSearchSubmit = (query: string) => {
    if (query.trim()) {
      router.push(localizePath(pathname || "/", `/blog?search=${encodeURIComponent(query)}`))
    }
  }

  const title = isSpanish && post.title_es ? post.title_es : post.title
  const description = isSpanish && post.description_es ? post.description_es : post.description
  const body = isSpanish && post.body_es ? post.body_es : post.body
  const postPath = `/blog/${post.slug?.current || ''}`
  const localizedPostPath = localizePath(pathname || "/", postPath)
  const postUrl = `${siteConfig.url}${localizedPostPath}/`
  const readingMinutes = estimateReadingTime(body, i18n.language)
  const wordCount = (() => {
    if (!Array.isArray(body)) return 0
    return body.reduce((sum: number, block: any) => {
      if (block?._type !== 'block') return sum
      const text = (block.children || []).map((c: any) => c.text || '').join('')
      return sum + (text.trim() ? text.trim().split(/\s+/).length : 0)
    }, 0)
  })()
  const isUpdated = Boolean(
    post._updatedAt &&
    post.publishedAt &&
    new Date(post._updatedAt).getTime() !== new Date(post.publishedAt).getTime()
  )
  const authorBio = Array.isArray(post.authorBio)
    ? post.authorBio
        .map((block: any) => (Array.isArray(block.children) ? block.children.map((c: any) => c.text || '').join('') : ''))
        .filter(Boolean)
        .join(' ')
    : ''

  const headingIdMap = new Map<string, string>()
  const seenHeadingBase: Record<string, number> = {}
  const getHeadingId = (text: string) => {
    const cached = headingIdMap.get(text)
    if (cached) return cached
    const base = slugify(text) || 'section'
    const count = seenHeadingBase[base] ?? 0
    seenHeadingBase[base] = count + 1
    const id = count === 0 ? base : `${base}-${count + 1}`
    headingIdMap.set(text, id)
    return id
  }

  const headings = body
    ?.filter((block: any) => block._type === 'block' && (block.style === 'h2' || block.style === 'h3'))
    .map((block: any) => {
      const text = block.children.map((child: any) => child.text).join('')
      return {
        text,
        slug: getHeadingId(text),
        level: block.style === 'h2' ? 2 : 3
      }
    }) || []

  const categoryHref = (categoryTitle: string) =>
    `/blog/category/${categoryTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}`

  const inlineCtaIndex = (() => {
    if (!Array.isArray(body) || body.length === 0) return -1
    const h2Index = body.findIndex((b: any) => b?._type === 'block' && b.style === 'h2')
    if (h2Index >= 0) return Math.min(h2Index + 1, body.length)
    return Math.min(body.length, 3)
  })()

  const InlineCTA = (
    <div className="not-prose my-10 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex-1">
          <h4 className="text-xl font-black tracking-tight mb-2">{t('blogPost.inlineCtaTitle')}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{t('blogPost.inlineCtaDescription')}</p>
        </div>
        <div className="shrink-0">
          <Button asChild size="lg" className="rounded-full w-full sm:w-auto">
            <Link href={localizePath(pathname || "/", "/contact?audit=true")}>
              {t('common.freeAudit')}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )

  const calloutStyles = {
    tip: {
      icon: Lightbulb,
      label: t('blogPost.calloutTip'),
      classes: "border-primary/40 bg-primary/5",
      iconClasses: "text-primary",
    },
    important: {
      icon: Info,
      label: t('blogPost.calloutImportant'),
      classes: "border-sky-500/40 bg-sky-500/10",
      iconClasses: "text-sky-500",
    },
    warning: {
      icon: AlertTriangle,
      label: t('blogPost.calloutWarning'),
      classes: "border-amber-500/40 bg-amber-500/10",
      iconClasses: "text-amber-500",
    },
  } as const

  const components = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) return null
        return (
          <figure className="my-8">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <ExportedImage
                src={urlFor(value).url()}
                alt={value.alt || ""}
                fill
                className="object-cover"
              />
            </div>
            {value.caption && (
              <figcaption className="text-center text-sm text-muted-foreground mt-2">
                {value.caption}
              </figcaption>
            )}
          </figure>
        )
      },
      codeBlock: ({ value }: any) => {
        if (!value?.code) return null
        return (
          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-border/60 bg-slate-950 shadow-lg">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </span>
              {value.language && (
                <span className="ml-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                  {value.language}
                </span>
              )}
            </div>
            <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-slate-100">
              <code className="block font-mono whitespace-pre">{value.code}</code>
            </pre>
          </div>
        )
      },
      callout: ({ value }: any) => {
        const tone = calloutStyles[value?.tone as keyof typeof calloutStyles] || calloutStyles.tip
        const Icon = tone.icon
        return (
          <div className={`not-prose my-8 rounded-2xl border-2 p-6 ${tone.classes}`}>
            <div className="flex items-center gap-2 mb-3">
              <Icon className={`w-5 h-5 ${tone.iconClasses}`} aria-hidden="true" />
              <span className="font-bold text-foreground">{value?.title || tone.label}</span>
            </div>
            {value?.body && value.body.length > 0 && (
              <div className="prose prose-sm">
                <PortableText value={value.body} />
              </div>
            )}
          </div>
        )
      }
    },
    block: {
      h2: ({ value, children }: any) => {
        const text = value.children?.map((c: any) => c.text).join('') || ''
        const id = getHeadingId(text)
        return <h2 id={id} className="text-3xl font-bold mt-8 mb-4 scroll-mt-24 relative group">
          <a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 transition-opacity text-primary">#</a>
          {children}
        </h2>
      },
      h3: ({ value, children }: any) => {
        const text = value.children?.map((c: any) => c.text).join('') || ''
        const id = getHeadingId(text)
        return <h3 id={id} className="text-2xl font-bold mt-6 mb-3 scroll-mt-24 relative group">
          <a href={`#${id}`} className="absolute -left-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary text-sm">#</a>
          {children}
        </h3>
      },
    },
    marks: {
      code: ({ children }: any) => (
        <code className="rounded-md bg-muted px-1.5 py-0.5 text-[0.85em] font-semibold text-primary">
          {children}
        </code>
      ),
      link: ({ children, value }: any) => (
        <a
          href={value?.href}
          target={value?.openInNewTab ? "_blank" : undefined}
          rel={value?.openInNewTab ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      ),
    },
  }

  return (
    <div className="container py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogPostingSchema({
            title,
            description,
            imageUrl: post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined,
            keywords: keywords.length > 0 ? keywords : undefined,
            authorName: post.authorName,
            datePublished: post.publishedAt,
            dateModified: post._updatedAt || post.publishedAt,
            slug: post.slug.current,
            inLanguage: isSpanish ? "es-ES" : "en-US",
            url: postUrl,
            wordCount,
            timeRequired: readingMinutes > 0 ? `PT${readingMinutes}M` : undefined,
            articleSection: Array.isArray(post.categories) ? post.categories : undefined,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: t('blogPost.backToBlog'), item: isSpanish ? "/es/blog" : "/blog" },
            { name: title, item: postUrl },
          ])),
        }}
      />
      <nav aria-label={t('blogPost.articleNavigation')} className="mb-8 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        <Link href={localizePath(pathname || "/", "/")} className="hover:text-primary transition-colors font-medium">
          {t('nav.home')}
        </Link>
        <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        <Link href={localizePath(pathname || "/", "/blog")} className="hover:text-primary transition-colors font-medium">
          {t('blogPost.backToBlog')}
        </Link>
        <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span className="text-foreground font-semibold truncate max-w-[240px]">{title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <article className="lg:col-span-3">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground mb-3">
                <div className="flex items-center gap-2">
                    {post.authorImage && (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                             <ExportedImage src={urlFor(post.authorImage).url()} alt={post.authorName} fill className="object-cover" />
                        </div>
                    )}
                    <span className="font-medium text-foreground">{post.authorName}</span>
                </div>
                <span aria-hidden="true">•</span>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, locale)}</time>
                {isUpdated && (
                  <>
                    <span aria-hidden="true">•</span>
                    <span>{t('blogPost.updatedOn')} <time dateTime={post._updatedAt}>{formatDate(post._updatedAt, locale)}</time></span>
                  </>
                )}
                {readingMinutes > 0 && (
                  <>
                    <span aria-hidden="true">•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      {t('blogPost.readTime', { minutes: readingMinutes })}
                    </span>
                  </>
                )}
            </div>

            <p className="text-sm text-muted-foreground mb-6">{t('blogPost.authorCredential')}</p>

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8" aria-label={t('blogPost.keywords')}>
                {post.categories.map((cat: string) => (
                  <Link key={cat} href={localizePath(pathname || "/", categoryHref(cat))}>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/10 font-semibold hover:bg-primary/20 transition-colors">
                      {cat}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}

            {post.mainImage && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10 border">
                <ExportedImage
                  src={urlFor(post.mainImage).url()}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <TableOfContents headings={headings} />

            <div className="flex items-center justify-between py-6 border-y mb-8">
               <span className="text-2xl font-bold text-foreground mr-4">{t('blogPost.share')}</span>
               <SocialShareButtons 
                 url={postUrl} 
                 title={title} 
               />
            </div>
          </div>

          <div className="prose prose-lg">
            {inlineCtaIndex > 0 && inlineCtaIndex < (Array.isArray(body) ? body.length : 0) ? (
              <>
                <PortableText value={body.slice(0, inlineCtaIndex)} components={components} />
                {InlineCTA}
                <PortableText value={body.slice(inlineCtaIndex)} components={components} />
              </>
            ) : (
              <PortableText value={body} components={components} />
            )}
          </div>

          <div className="mt-12 rounded-[2rem] border border-border/60 bg-card/40 p-8 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                {t('blogPost.nextStep')}
              </div>
              <h3 className="text-3xl font-black tracking-tight">
                {t('blogPost.ctaTitle')}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('blogPost.ctaDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact?audit=true">
                    {t('common.freeAudit')}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link href="/services">
                    {t('common.viewServices')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <AuthorBio authorName={post.authorName} authorImage={post.authorImage} bio={authorBio} />

          {(prevPost || nextPost) && (
            <nav className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label={t('blogPost.articleNavigation')}>
              {prevPost ? (
                <Link
                  href={localizePath(pathname || "/", `/blog/${prevPost.slug?.current}`)}
                  className="group flex flex-col gap-2 rounded-2xl border-2 border-border/50 p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" aria-hidden="true" /> {t('blogPost.newerArticle')}
                  </span>
                  <span className="font-bold line-clamp-2 group-hover:text-primary transition-colors">
                    {isSpanish && prevPost.title_es ? prevPost.title_es : prevPost.title}
                  </span>
                </Link>
              ) : <div />}
              {nextPost ? (
                <Link
                  href={localizePath(pathname || "/", `/blog/${nextPost.slug?.current}`)}
                  className="group flex flex-col gap-2 rounded-2xl border-2 border-border/50 p-6 hover:border-primary/40 hover:shadow-lg transition-all text-right"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center justify-end gap-2">
                    {t('blogPost.olderArticle')} <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="font-bold line-clamp-2 group-hover:text-primary transition-colors">
                    {isSpanish && nextPost.title_es ? nextPost.title_es : nextPost.title}
                  </span>
                </Link>
              ) : <div />}
            </nav>
          )}

          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">{t('blogPost.relatedTitle')}</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {relatedPosts.map((related) => {
                  const relatedTitle = isSpanish && related.title_es ? related.title_es : related.title
                  return (
                    <Link
                      key={related._id}
                      href={localizePath(pathname || "/", `/blog/${related.slug?.current}`)}
                      className="group rounded-2xl border-2 border-border/50 overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all flex flex-col"
                    >
                      {related.mainImage && (
                        <div className="relative h-36 w-full overflow-hidden">
                          <ExportedImage
                            src={urlFor(related.mainImage).url()}
                            alt={relatedTitle}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      )}
                      <div className="p-4 flex-1 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <User className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{formatDate(related.publishedAt, locale)}</span>
                        </div>
                        <span className="font-bold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedTitle}
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </article>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <BlogSidebar 
              tags={tags} 
              showSearch={true} 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSearchSubmit={handleSearchSubmit}
              popularPosts={popularPosts}
              newsletterTopic={Array.isArray(post.categories) && post.categories.length > 0 ? post.categories[0] : undefined}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
