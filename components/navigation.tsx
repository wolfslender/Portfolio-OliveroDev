"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun, ArrowRight, Search, Zap, Shield, AlertTriangle, RefreshCw, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useNav } from "@/hooks/use-nav"
import { localizePath, stripSpanishPrefix, isSpanishPath } from "@/lib/i18n-routing"
import { landingPages } from "@/lib/landing-pages"
import { landingPagesEs } from "@/lib/landing-pages-es"

const serviceDescriptions: Record<string, string> = {
  "website-audit": "Know exactly what is holding your website back",
  "wordpress-speed-optimization": "Make your WordPress site faster",
  "wordpress-security": "Harden your site before risks become incidents",
  "hacked-wordpress-recovery": "Recover and secure your compromised site",
  "website-migration": "Move platforms without losing what matters",
  "wordpress-maintenance": "Keep your site healthy monthly",
}

const serviceDescriptionsEs: Record<string, string> = {
  "website-audit": "Sabe qué está frenando tu sitio web",
  "wordpress-speed-optimization": "Haz que tu WordPress sea más rápido",
  "wordpress-security": "Refuerza tu sitio antes de que sea un incidente",
  "hacked-wordpress-recovery": "Recupera y asegura tu sitio comprometido",
  "website-migration": "Migra de plataforma sin perder nada",
  "wordpress-maintenance": "Mantén tu sitio saludable cada mes",
}

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "website-audit": Search,
  "wordpress-speed-optimization": Zap,
  "wordpress-security": Shield,
  "hacked-wordpress-recovery": AlertTriangle,
  "website-migration": RefreshCw,
  "wordpress-maintenance": Settings,
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const navLinks = useNav()
  const megaRef = useRef<HTMLDivElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isSpanish = isSpanishPath(pathname || "/")

  const serviceLinks = (isSpanish ? landingPagesEs : landingPages).map((page) => ({
    href: localizePath(pathname || "/", `/${page.slug}`),
    label: page.hero.eyebrow,
    description: isSpanish ? serviceDescriptionsEs[page.slug] : serviceDescriptions[page.slug],
  }))

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setMegaOpen(false)
  }, [pathname])

  const openMegaMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setMegaOpen(true)
  }

  const closeMegaMenuSoon = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    closeTimerRef.current = setTimeout(() => setMegaOpen(false), 120)
  }

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")
  const themeLabel = theme === "dark"
    ? isSpanish ? "Cambiar a modo claro" : "Switch to light mode"
    : isSpanish ? "Cambiar a modo oscuro" : "Switch to dark mode"

  return (
    <nav
      aria-label={isSpanish ? "Navegación principal" : "Main navigation"}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={localizePath(pathname || "/", "/")}
            className="text-lg font-bold text-foreground hover:text-primary transition-colors tracking-tight"
          >
            OliveroDev
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const href = localizePath(pathname || "/", link.href)
              const isActive = stripSpanishPrefix(pathname || "/") === link.href

              if (link.href === "/services") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    ref={megaRef}
                    onMouseEnter={openMegaMenu}
                    onMouseLeave={closeMegaMenuSoon}
                    onFocus={openMegaMenu}
                  >
                    <button
                      onClick={() => setMegaOpen(!megaOpen)}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      aria-controls="desktop-services-menu"
                      aria-current={isActive ? "page" : undefined}
                      className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 inline-flex items-center gap-1 ${
                        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      <svg aria-hidden="true" className={`w-3 h-3 transition-transform ${megaOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {megaOpen && (
                      <div id="desktop-services-menu" className="absolute left-1/2 top-full z-[120] w-[min(760px,calc(100vw-2rem))] -translate-x-1/2 pt-4 animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200">
                        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/95 shadow-2xl shadow-primary/10 backdrop-blur-xl">
                          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-secondary/[0.07] pointer-events-none" />
                          <div className="relative grid lg:grid-cols-[1fr_0.62fr]">
                            <div className="p-5">
                              <div className="mb-4 flex items-end justify-between gap-4 px-2">
                                <div>
                                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                                    {isSpanish ? "Servicios" : "Services"}
                                  </p>
                                  <p className="mt-1 text-sm text-muted-foreground">
                                    {isSpanish ? "Elige según el problema real de tu web." : "Choose based on the real problem your site has."}
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                            {serviceLinks.map((service) => (
                              (() => {
                                const rawSlug = service.href.replace(/^\/es\//, "/").replace(/^\//, "").replace(/\/$/, "")
                                const Icon = serviceIcons[rawSlug] || ArrowRight
                                return (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setMegaOpen(false)}
                                className="group relative flex min-h-28 items-start gap-4 rounded-2xl border border-transparent p-4 transition-all duration-200 hover:border-border/70 hover:bg-background/70 hover:shadow-lg hover:shadow-primary/5"
                              >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-200 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                                  <Icon aria-hidden="true" className="h-5 w-5" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-base font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                                    {service.label}
                                  </p>
                                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                                    {service.description}
                                  </p>
                                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                                    {isSpanish ? "Ver servicio" : "Explore service"}
                                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                                  </span>
                                </div>
                              </Link>
                                )
                              })()
                            ))}
                              </div>
                            </div>
                            <div className="relative border-t border-border/50 bg-muted/30 p-5 lg:border-l lg:border-t-0">
                              <div className="flex h-full min-h-72 flex-col justify-between rounded-2xl border border-border/60 bg-background/70 p-5">
                                <div>
                                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                                    {isSpanish ? "Primer paso recomendado" : "Recommended first step"}
                                  </p>
                                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-balance">
                                    {isSpanish ? "Empieza con una auditoría web clara." : "Start with a clear website audit."}
                                  </h3>
                                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {isSpanish
                                      ? "Te digo qué está afectando velocidad, seguridad, confianza y conversión antes de gastar en rediseños o cambios grandes."
                                      : "I identify what is hurting speed, security, trust, and conversion before you spend on redesigns or big changes."}
                                  </p>
                                </div>
                                <div className="mt-6 space-y-3">
                                  {[
                                    isSpanish ? "Respuesta personal" : "Personal reply",
                                    isSpanish ? "Prioridades medibles" : "Measurable priorities",
                                    isSpanish ? "Próximo paso claro" : "Clear next step",
                                  ].map((item) => (
                                    <div key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                                      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />
                                      {item}
                                    </div>
                                  ))}
                                </div>
                                <Link
                                  href={localizePath(pathname || "/", "/contact?audit=true")}
                                  onClick={() => setMegaOpen(false)}
                                  className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20"
                                >
                                  {isSpanish ? "Empezar con una auditoría" : "Start with a website audit"}
                                  <ArrowRight aria-hidden="true" className="w-4 h-4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && <span aria-hidden="true" className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />}
                </Link>
              )
            })}

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={themeLabel}
                className="ml-2 w-9 h-9 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              >
                {theme === "dark" ? <Sun aria-hidden="true" className="h-4 w-4" /> : <Moon aria-hidden="true" className="h-4 w-4" />}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-1">
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={themeLabel} className="w-9 h-9 rounded-full">
                {theme === "dark" ? <Sun aria-hidden="true" className="h-4 w-4" /> : <Moon aria-hidden="true" className="h-4 w-4" />}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? (isSpanish ? "Cerrar menú" : "Close menu") : (isSpanish ? "Abrir menú" : "Open menu")}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
              className="w-9 h-9 rounded-full"
            >
              {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-navigation-menu" className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-in slide-in-from-top duration-200">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const href = localizePath(pathname || "/", link.href)
              const isActive = stripSpanishPrefix(pathname || "/") === link.href
              return (
                <div key={link.href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
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
                          className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          {service.label}
                        </Link>
                      ))}
                      <Link
                        href={localizePath(pathname || "/", "/contact?audit=true")}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm font-bold text-primary"
                      >
                        {isSpanish ? "Empezar con una auditoría" : "Start with a website audit"} →
                      </Link>
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
