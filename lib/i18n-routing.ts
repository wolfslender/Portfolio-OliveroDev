export const defaultLocale = "en"
export const spanishPrefix = "/es"

const localizedRoutes = new Set([
  "/",
  "/about",
  "/blog",
  "/contact",
  "/glossary",
  "/plugins",
  "/privacy",
  "/services",
  "/terms",
  "/work",
  "/website-audit",
  "/wordpress-speed-optimization",
  "/wordpress-security",
  "/hacked-wordpress-recovery",
  "/website-migration",
  "/wordpress-maintenance",
])

export function stripSpanishPrefix(pathname: string) {
  if (pathname === spanishPrefix) return "/"
  if (pathname.startsWith(`${spanishPrefix}/`)) {
    const path = pathname.slice(spanishPrefix.length)
    return path || "/"
  }
  return pathname || "/"
}

export function isSpanishPath(pathname: string) {
  return pathname === spanishPrefix || pathname.startsWith(`${spanishPrefix}/`)
}

export function toSpanishPath(pathname: string) {
  const path = stripSpanishPrefix(pathname).replace(/\/$/, "") || "/"
  // Dynamic blog routes (posts, categories) are localized too
  if (path === "/" || localizedRoutes.has(path) || path.startsWith("/blog/")) {
    return path === "/" ? spanishPrefix : `${spanishPrefix}${path}`
  }
  return spanishPrefix
}

export function toEnglishPath(pathname: string) {
  return stripSpanishPrefix(pathname)
}

export function localizePath(pathname: string, href: string) {
  if (!isSpanishPath(pathname)) return href
  if (!href.startsWith("/") || href.startsWith("/es") || href.startsWith("/resume")) return href

  const [path, query = ""] = href.split("?")
  const localized = path === "/" ? spanishPrefix : `${spanishPrefix}${path}`
  return query ? `${localized}?${query}` : localized
}
