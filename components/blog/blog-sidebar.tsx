"use client"

import { Badge } from "@/components/ui/badge"
import { Search, Tag, Sparkles, Mail, X, Loader2, Clock, MessageCircle, ShieldCheck } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { localizePath } from "@/lib/i18n-routing"
import { useContact } from "@/hooks/use-contact"

interface SidebarPost {
  _id?: string
  title: string
  title_es?: string
  slug: { current: string }
  publishedAt?: string
  readingMinutes?: number
}

interface BlogSidebarProps {
  tags: string[]
  showSearch?: boolean
  searchQuery?: string
  onSearchChange?: (query: string) => void
  onSearchSubmit?: (query: string) => void
  popularPosts?: SidebarPost[]
  newsletterTopic?: string
  className?: string
}

const tagColors = [
  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
  "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800",
  "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 border-teal-200 dark:border-teal-800",
  "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800",
  "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 border-sky-200 dark:border-sky-800",
  "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary border-primary/20 dark:border-primary/30",
  "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
  "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400 border-violet-200 dark:border-violet-800",
  "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-400 border-fuchsia-200 dark:border-fuchsia-800",
  "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 border-pink-200 dark:border-pink-800",
  "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border-rose-200 dark:border-rose-800",
]

const getTagColor = (tag: string) => {
  let hash = 0
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash)
  }
  return tagColors[Math.abs(hash) % tagColors.length]
}

const categorySlug = (title: string) =>
  title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')

export function BlogSidebar({
  tags,
  showSearch = false,
  searchQuery = "",
  onSearchChange,
  onSearchSubmit,
  popularPosts = [],
  newsletterTopic,
  className = "",
}: BlogSidebarProps) {
  const { t, i18n } = useTranslation()
  const pathname = usePathname()
  const contact = useContact()
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isSpanish = i18n.language.startsWith("es")

  const U_VALUE = process.env.NEXT_PUBLIC_MAILCHIMP_U || "d115a5e75b31c0484490081e3"
  const ID_VALUE = process.env.NEXT_PUBLIC_MAILCHIMP_ID || "011f42ce9d"
  const FID_VALUE = process.env.NEXT_PUBLIC_MAILCHIMP_FID || "00ba66e7f0"

  const whatsappNumber = (() => {
    const raw = (contact.phone || "").replace(/\D/g, "")
    return raw.length === 10 ? `1${raw}` : raw
  })()
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t('common.whatsappMessage'))}`

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      toast.error(t('blogSidebar.validEmail'))
      return
    }

    setIsSubmitting(true)

    const callbackName = `jsonp_callback_${Math.round(100000 * Math.random())}`
    const url = `https://oliverodev.us19.list-manage.com/subscribe/post-json?u=${U_VALUE}&id=${ID_VALUE}&f_id=${FID_VALUE}&EMAIL=${encodeURIComponent(email)}&c=${callbackName}`

    const script = document.createElement('script')
    script.src = url

    ;(window as any)[callbackName] = (data: any) => {
      delete (window as any)[callbackName]
      document.body.removeChild(script)

      setIsSubmitting(false)

      if (data.result === 'success') {
        toast.success(data.msg || t('blogSidebar.subscribed'))
        setEmail('')
        setShowModal(false)
      } else {
        const errorMsg = data.msg?.replace(/<[^>]*>?/gm, '') || t('blogSidebar.somethingWrong')
        toast.error(errorMsg)
      }
    }

    script.onerror = () => {
      delete (window as any)[callbackName]
      document.body.removeChild(script)
      setIsSubmitting(false)
      toast.error(t('blogSidebar.connectionError'))
    }

    document.body.appendChild(script)
  }

  const uniqueTags = Array.from(new Set(tags || []))
  const newsletterTitle = newsletterTopic
    ? t('blogSidebar.stayUpdatedTopic', { topic: newsletterTopic })
    : t('blogSidebar.stayUpdated')

  return (
    <>
      <aside className={`space-y-6 ${className}`}>
        {showSearch && (
          <div className="bg-card text-card-foreground rounded-3xl border-2 border-border/50 shadow-lg p-6 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Search aria-hidden="true" className="w-5 h-5 text-primary" />
              <h3 id="blog-search-heading" className="font-bold text-lg">{t('blogSidebar.searchArticles')}</h3>
            </div>
            <div className="relative">
              <Search aria-hidden="true" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                aria-labelledby="blog-search-heading"
                placeholder={t('blogSidebar.searchPlaceholder')}
                className="flex h-11 w-full rounded-xl border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 pl-9 transition-all font-medium"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSearchSubmit?.(searchQuery || "")
                  }
                }}
              />
            </div>
          </div>
        )}

        <div className="bg-card text-card-foreground rounded-3xl border-2 border-border/50 shadow-lg p-6 hover:border-primary/30 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Tag aria-hidden="true" className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-lg">{t('blogSidebar.topics')}</h3>
          </div>
          {uniqueTags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {uniqueTags.map((tag) => {
                const colorClass = getTagColor(tag)
                return (
                  <Link
                    key={tag}
                    href={localizePath(pathname || "/", `/blog/category/${categorySlug(tag)}`)}
                    className="transition-transform duration-300 hover:scale-105 active:scale-95 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Badge
                      variant="outline"
                      className={`pointer-events-none px-4 py-2 text-sm font-semibold transition-all duration-300 border-2 ${colorClass} hover:shadow-sm`}
                    >
                      {tag}
                    </Badge>
                  </Link>
                )
              })}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground italic">{t('blogSidebar.noTopics')}</p>
          )}
        </div>

        {popularPosts.length > 0 && (
          <div className="bg-card text-card-foreground rounded-3xl border-2 border-border/50 shadow-lg p-6 hover:border-primary/30 transition-all duration-300">
            <h3 className="font-bold text-lg mb-4">{t('blogSidebar.popularTitle')}</h3>
            <ul className="flex flex-col gap-4">
              {popularPosts.map((post, index) => {
                const postTitle = isSpanish && post.title_es ? post.title_es : post.title
                return (
                  <li key={post._id || `${post.slug.current}-${index}`}>
                    <Link
                      href={localizePath(pathname || "/", `/blog/${post.slug.current}`)}
                      className="group flex items-start gap-3"
                    >
                      <span className="mt-0.5 shrink-0 w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-black flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {postTitle}
                        </span>
                        {post.readingMinutes ? (
                          <span className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                            {t('blogList.readTime', { minutes: post.readingMinutes })}
                          </span>
                        ) : null}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        <div className="rounded-3xl border-2 border-border/50 shadow-lg p-6 bg-card text-card-foreground hover:border-primary/30 transition-all duration-300">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck aria-hidden="true" className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-lg">{t('blogSidebar.helpTitle')}</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {t('blogSidebar.helpDescription')}
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white font-bold py-3 px-5 text-sm transition-all hover:scale-[1.03] active:scale-95 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              {t('common.whatsappChat')}
            </a>
            <Link
              href={localizePath(pathname || "/", "/contact?audit=true")}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold py-3 px-5 text-sm transition-all hover:bg-primary/90 hover:scale-[1.03] active:scale-95 shadow-md"
            >
              {t('common.freeAudit')}
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-white shadow-xl">
          <div aria-hidden="true" className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="relative z-10">
            <Sparkles aria-hidden="true" className="w-8 h-8 mb-4" />
            <h3 className="font-black text-xl mb-2">{newsletterTitle}</h3>
            <p className="text-sm text-white/90 mb-4 leading-relaxed">
              {t('blogSidebar.newsletterDescription')}
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-white text-primary font-bold py-3 px-6 rounded-xl hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              {t('blogSidebar.subscribe')}
            </button>
          </div>
        </div>
      </aside>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-card rounded-3xl max-w-md w-full p-8 shadow-2xl animate-in zoom-in duration-200 relative" role="dialog" aria-modal="true" aria-labelledby="newsletter-dialog-title">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              disabled={isSubmitting}
              aria-label={t('blogSidebar.close', 'Close')}
            >
              <X aria-hidden="true" className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Mail aria-hidden="true" className="w-8 h-8 text-primary" />
              </div>
              <h3 id="newsletter-dialog-title" className="text-2xl font-black mb-2">{newsletterTitle}</h3>
              <p className="text-muted-foreground">
                {t('blogSidebar.newsletterBody')}
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  {t('blogSidebar.emailLabel')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('blogSidebar.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-12 w-full rounded-xl border-2 border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all font-medium"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 aria-hidden="true" className="w-5 h-5 animate-spin" />
                    {t('blogSidebar.subscribing')}
                  </>
                ) : (
                  t('blogSidebar.subscribeNow')
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                {t('blogSidebar.agreement')}
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
