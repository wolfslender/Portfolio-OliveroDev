"use client"

import { siteConfig } from "@/lib/config"
import { SocialLinks } from "@/components/social-links"
import { useNav } from "@/hooks/use-nav"
import { useServices } from "@/hooks/use-services"
import { useFooter } from "@/hooks/use-footer"
import { useHero } from "@/hooks/use-hero"
import { usePathname } from "next/navigation"
import { localizePath } from "@/lib/i18n-routing"

export function Footer() {
  const navLinks = useNav()
  const services = useServices()
  const footer = useFooter()
  const hero = useHero()
  const pathname = usePathname()
  
  const quickLinks = navLinks.map((item) => ({
    name: item.label,
    href: localizePath(pathname || "/", item.href),
  }))

  const serviceLinks = services.slice(0, 4).map((service) => ({
    name: service.title,
    href: localizePath(pathname || "/", "/services"),
  }))

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              {siteConfig.name}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {footer.description}
            </p>
            <div className="pt-2">
              <SocialLinks variant="boxed" className="gap-3" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">{footer.quickLinks}</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="block text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200"
              >
                {hero.buttons.downloadCv}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-lg">{footer.services}</h4>
            <div className="space-y-3">
              {serviceLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} {siteConfig.name}. {footer.builtWith}
            </p>
            <p className="text-xs text-muted-foreground/60 text-center md:text-left max-w-2xl">
              {footer.disclaimer}
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a href={localizePath(pathname || "/", "/privacy")} className="text-muted-foreground hover:text-foreground transition-colors">
                {footer.privacy}
              </a>
              <a href={localizePath(pathname || "/", "/terms")} className="text-muted-foreground hover:text-foreground transition-colors">
                {footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
