"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

interface TableOfContentsProps {
  headings: { text: string; slug: string; level: number }[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const { t } = useTranslation()
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const ids = headings.map((heading) => heading.slug).filter(Boolean)
    if (ids.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (!headings || headings.length === 0) return null

  return (
    <div
      className="my-10 bg-card/50 text-card-foreground rounded-xl border p-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <h3 className="font-bold text-xl mb-4 border-b pb-2">
        {t('tableOfContents.title')}
      </h3>
      <nav className="flex flex-col gap-2.5">
        {headings.map((heading) => {
          const isActive = activeId === heading.slug
          return (
            <a
              key={`${heading.slug}-${heading.text}`}
              href={`#${heading.slug}`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "text-sm block relative group transition-colors",
                heading.level === 3 ? "pl-4" : "",
                isActive
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full transition-colors",
                  heading.level === 3 ? "ml-4" : "",
                  isActive ? "bg-primary" : "bg-primary/30 group-hover:bg-primary"
                )}
              />
              <span className="pl-4">{heading.text}</span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}
