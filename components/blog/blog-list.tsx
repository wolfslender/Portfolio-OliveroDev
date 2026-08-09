"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import ExportedImage from "next-image-export-optimizer"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogSidebar } from "./blog-sidebar"
import { urlFor } from "@/lib/sanity/client"
import { useTranslation } from "react-i18next"
import { localizePath } from "@/lib/i18n-routing"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, TrendingUp, ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Post {
  _id: string
  title: string
  title_es?: string
  slug: { current: string }
  publishedAt: string
  authorName: string
  categories: string[]
  keywords?: string[]
  description?: string
  description_es?: string
  featured?: boolean
  readingMinutes?: number
  mainImage: any
}

interface BlogListProps {
  posts: Post[]
  tags: string[]
}

export function BlogList({ posts, tags }: BlogListProps) {
  const { i18n, t } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()
  const isSpanish = i18n.language.startsWith("es")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    const syncFromUrl = () => {
      const q = new URLSearchParams(window.location.search).get("search") || ""
      setSearchQuery(q)
    }
    syncFromUrl()
    window.addEventListener("popstate", syncFromUrl)
    return () => window.removeEventListener("popstate", syncFromUrl)
  }, [])

  const filteredPosts = posts.filter((post) => {
    const title = isSpanish && post.title_es ? post.title_es : post.title
    const safeTitle = title || ""
    return safeTitle.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const featuredPost = filteredPosts.find((post) => post.featured) || filteredPosts[0]
  const regularPostsAll = filteredPosts.filter((post) => post !== featuredPost)

  const totalPages = Math.ceil(regularPostsAll.length / postsPerPage)
  const paginatedPosts = regularPostsAll.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  const popularPosts = [...posts]
    .sort((a, b) => new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime())
    .slice(0, 3)
    .map((post) => ({
      title: post.title,
      title_es: post.title_es,
      slug: post.slug,
      publishedAt: post.publishedAt,
      readingMinutes: post.readingMinutes,
    }))

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }
  const handleSearchSubmit = (value: string) => {
    const query = value.trim()
    router.push(localizePath(pathname || "/", `/blog${query ? `?search=${encodeURIComponent(query)}` : ""}`))
  }

  const locale = isSpanish ? "es-ES" : "en-US"
  const categoryHref = (title: string) => `/blog/category/${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}`

  return (
    <div className="space-y-20">
      {featuredPost && (
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-950 to-slate-900 border border-white/5 group">
            <div className="grid lg:grid-cols-2 gap-0">
              {featuredPost.mainImage && (
                <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                  <Link href={localizePath(pathname || "/", `/blog/${featuredPost.slug?.current || '#'}`)} className="block w-full h-full">
                    <ExportedImage
                      src={urlFor(featuredPost.mainImage).url()}
                      alt={isSpanish && featuredPost.title_es ? featuredPost.title_es : featuredPost.title}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent lg:from-transparent lg:via-transparent lg:to-slate-950/80" />
                  </Link>
                </div>
              )}

              <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white">
                <Badge className="bg-primary text-primary-foreground w-fit mb-6 px-4 py-1.5 text-sm font-bold">
                  <TrendingUp className="w-3 h-3 mr-2 inline" />
                  {t('blogList.featuredArticle')}
                </Badge>

                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  <Link href={localizePath(pathname || "/", `/blog/${featuredPost.slug?.current || '#'}`)} className="hover:text-primary transition-colors">
                    {isSpanish && featuredPost.title_es ? featuredPost.title_es : featuredPost.title}
                  </Link>
                </h2>

                <div className="flex items-center gap-6 mb-8 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{formatDate(featuredPost.publishedAt, locale)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{featuredPost.authorName}</span>
                  </div>
                  {featuredPost.readingMinutes ? (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{t('blogList.readTime', { minutes: featuredPost.readingMinutes })}</span>
                    </div>
                  ) : null}
                </div>

                {featuredPost.categories && featuredPost.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredPost.categories.map((cat, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                )}

                <Link
                  href={localizePath(pathname || "/", `/blog/${featuredPost.slug?.current || '#'}`)}
                  className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 w-fit group/btn shadow-xl"
                >
                  {t('blogList.readArticle')}
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post, index) => {
                const title = isSpanish && post.title_es ? post.title_es : post.title
                const description = isSpanish && post.description_es ? post.description_es : post.description
                const slug = post.slug?.current || '#'
                return (
                  <ScrollReveal key={post._id} delay={index * 80}>
                    <Card className={`h-full hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col overflow-hidden group border-2 border-border/50 hover:border-primary/30 rounded-3xl ${slug === '#' ? 'opacity-70' : ''}`}>
                      {post.mainImage && (
                        <div className="relative h-56 w-full overflow-hidden">
                          <Link
                            href={slug !== '#' ? localizePath(pathname || "/", `/blog/${slug}`) : '#'}
                            aria-label={title}
                            className={`block w-full h-full ${slug === '#' ? 'pointer-events-none' : ''}`}
                          >
                            <ExportedImage
                              src={urlFor(post.mainImage).url()}
                              alt={title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                          </Link>

                          {post.categories && post.categories.length > 0 && (
                            <Link
                              href={localizePath(pathname || "/", categoryHref(post.categories[0]))}
                              aria-label={post.categories[0]}
                              className={`absolute top-4 left-4 ${slug === '#' ? 'pointer-events-none' : ''}`}
                            >
                              <Badge className="bg-primary/90 backdrop-blur-md text-primary-foreground border-primary/20 font-bold hover:bg-primary transition-colors">
                                {post.categories[0]}
                              </Badge>
                            </Link>
                          )}
                        </div>
                      )}

                      <Link
                        href={slug !== '#' ? localizePath(pathname || "/", `/blog/${slug}`) : '#'}
                        aria-label={title}
                        className={`flex-1 flex flex-col ${slug === '#' ? 'pointer-events-none' : ''}`}
                      >
                        <CardHeader className="flex-1 p-6">
                          <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.publishedAt, locale)}</span>
                            </div>
                            {post.readingMinutes ? (
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                <span>{t('blogList.readTime', { minutes: post.readingMinutes })}</span>
                              </div>
                            ) : null}
                          </div>

                          <CardTitle className="line-clamp-2 text-xl font-bold group-hover:text-primary transition-colors leading-tight mb-3">
                            {title}
                          </CardTitle>

                          {description && (
                            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                              {description}
                            </p>
                          )}
                        </CardHeader>

                        <CardContent className="p-6 pt-0">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <User className="w-4 h-4" />
                              <span>{post.authorName}</span>
                            </div>
                            <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  </ScrollReveal>
                )
              })
            ) : (
              <div className="col-span-full text-center py-20 text-muted-foreground bg-muted/30 rounded-3xl border-2 border-dashed border-border">
                <p className="text-xl font-bold mb-2">{t('blogList.noPosts')}</p>
                <p className="text-sm mb-6">{t('blogList.noPostsDescription')}</p>
                <button
                  onClick={() => { setSearchQuery(""); setCurrentPage(1); }}
                  className="text-primary hover:underline text-sm font-semibold"
                >
                  {t('blogList.clearFilters')}
                </button>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                aria-label={t('blogList.previousPage', 'Previous page')}
              >
                <ChevronLeft aria-hidden="true" className="w-4 h-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  className="rounded-full w-10 h-10"
                  onClick={() => setCurrentPage(page)}
                  aria-label={t('blogList.goToPage', { page, defaultValue: `Go to page ${page}` })}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                aria-label={t('blogList.nextPage', 'Next page')}
              >
                <ChevronRight aria-hidden="true" className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <BlogSidebar
              tags={tags}
              showSearch={true}
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              onSearchSubmit={handleSearchSubmit}
              popularPosts={popularPosts}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
