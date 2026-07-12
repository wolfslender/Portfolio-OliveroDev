"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { siteConfig } from "@/lib/config"
import { useNav } from "@/hooks/use-nav"
import { localizePath, stripSpanishPrefix, isSpanishPath } from "@/lib/i18n-routing"
import { landingPages } from "@/lib/landing-pages"
import { landingPagesEs } from "@/lib/landing-pages-es"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const navLinks = useNav()
  const serviceLinks = (isSpanishPath(pathname || "/") ? landingPagesEs : landingPages).map((page) => ({
    href: localizePath(pathname || "/", `/${page.slug}`),
    label: page.hero.eyebrow,
  }))

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={localizePath(pathname || "/", "/")}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            OliveroDev
          </Link>

          {/* Desktop Navigation - Modern design with active indicators */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const href = localizePath(pathname || "/", link.href)
              const isActive = stripSpanishPrefix(pathname || "/") === link.href
              if (link.href === "/services") {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={href}
                      className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 inline-flex ${
                        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                      )}
                    </Link>
                    <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 absolute left-0 top-full pt-3 transition-all duration-200">
                      <div className="w-72 rounded-xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </Link>
              )
            })}

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:rotate-180"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="rounded-full">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

          {/* Mobile Menu - Modern slide-in animation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const href = localizePath(pathname || "/", link.href)
              const isActive = stripSpanishPrefix(pathname || "/") === link.href
              return (
                <div key={link.href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.href === "/services" && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
