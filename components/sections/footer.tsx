"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useFooter } from "@/hooks/use-footer"
import { useNav } from "@/hooks/use-nav"
import { SocialLinks } from "@/components/social-links"
import { localizePath, isSpanishPath } from "@/lib/i18n-routing"
import { landingPages } from "@/lib/landing-pages"
import { landingPagesEs } from "@/lib/landing-pages-es"

export function Footer() {
  const footer = useFooter()
  const nav = useNav()
  const pathname = usePathname()
  const isSpanish = isSpanishPath(pathname || "/")
  const serviceLinks = (isSpanish ? landingPagesEs : landingPages).map((page) => ({
    href: localizePath(pathname || "/", `/${page.slug}`),
    label: page.hero.eyebrow,
  }))
  const quickLinks = nav.filter((item) => ["/", "/about", "/work", "/contact"].includes(item.href))

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link
              href={localizePath(pathname || "/", "/")}
              className="text-lg font-bold text-foreground hover:text-primary transition-colors tracking-tight"
            >
              OliveroDev
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              {footer.description}
            </p>
            <div className="mt-6">
              <SocialLinks variant="boxed" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">
              {footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={localizePath(pathname || "/", item.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">
              {footer.services}
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">
              {isSpanish ? "Legal" : "Legal"}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href={localizePath(pathname || "/", "/privacy")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {footer.privacy}
                </Link>
              </li>
              <li>
                <Link href={localizePath(pathname || "/", "/terms")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {footer.terms}
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs text-muted-foreground/60 leading-relaxed">
              {footer.builtWith}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} OliveroDev. {isSpanish ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
          <p className="text-xs text-muted-foreground/60 max-w-md text-center md:text-right">
            {footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
