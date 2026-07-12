import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const outDir = path.join(root, "out")
const siteUrl = "https://oliverodev.com"

const requiredFiles = ["robots.txt", "sitemap.xml", "index.html", "404.html"]
const errors = []
const warnings = []

function read(relativePath) {
  return fs.readFileSync(path.join(outDir, relativePath), "utf8")
}

function exists(relativePath) {
  return fs.existsSync(path.join(outDir, relativePath))
}

function routeToFile(url) {
  const parsed = new URL(url)
  let pathname = parsed.pathname
  if (!pathname.endsWith("/")) pathname += "/"
  return pathname === "/" ? "index.html" : path.join(pathname.slice(1), "index.html")
}

for (const file of requiredFiles) {
  if (!exists(file)) errors.push(`Missing required output file: ${file}`)
}

if (exists("robots.txt")) {
  const robots = read("robots.txt")
  if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
    errors.push("robots.txt does not reference the canonical sitemap URL")
  }
  if (!robots.includes("Disallow: /studio/")) {
    warnings.push("robots.txt should disallow /studio/")
  }
}

const htmlFiles = []
function collectHtmlFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "_next" || entry.name === "nextImageExportOptimizer") continue
      collectHtmlFiles(fullPath)
    } else if (entry.name === "index.html") {
      htmlFiles.push(path.relative(outDir, fullPath))
    }
  }
}

if (exists(".")) collectHtmlFiles(outDir)

for (const file of htmlFiles) {
  const html = read(file)
  const isStudio = file.startsWith("studio/")

  if (!/<title>.+<\/title>/.test(html)) errors.push(`${file} is missing a title tag`)
  if (!/<meta name="description" content="[^"]{40,}"/.test(html) && !isStudio) {
    warnings.push(`${file} has a missing or thin meta description`)
  }
  if (!/<link rel="canonical" href="https:\/\/oliverodev\.com\/[^"]*"/.test(html) && !isStudio) {
    errors.push(`${file} is missing a canonical URL`)
  }
  if (!/<meta name="robots" content="index, follow"/.test(html) && !isStudio) {
    warnings.push(`${file} does not explicitly include index, follow robots metadata`)
  }
  if (isStudio && !/<meta name="robots" content="noindex, nofollow"/.test(html)) {
    errors.push(`${file} should be noindex, nofollow`)
  }
}

if (exists("sitemap.xml")) {
  const sitemap = read("sitemap.xml")
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
  if (locs.length < 20) warnings.push(`Sitemap has only ${locs.length} URLs`)

  for (const loc of locs) {
    if (!loc.startsWith(siteUrl)) errors.push(`Non-canonical sitemap URL: ${loc}`)
    const file = routeToFile(loc)
    if (!exists(file)) errors.push(`Sitemap URL has no generated HTML file: ${loc} -> ${file}`)
  }

  const requiredSitemapUrls = [
    `${siteUrl}/`,
    `${siteUrl}/es/`,
    `${siteUrl}/services/`,
    `${siteUrl}/es/services/`,
    `${siteUrl}/contact/`,
    `${siteUrl}/work/co-active-training-institute/`,
  ]

  for (const url of requiredSitemapUrls) {
    if (!sitemap.includes(`<loc>${url}</loc>`)) errors.push(`Sitemap missing ${url}`)
  }

  if (!sitemap.includes('hreflang="es"') || !sitemap.includes('hreflang="en"')) {
    errors.push("Sitemap is missing bilingual hreflang alternates")
  }
}

for (const message of warnings) console.warn(`SEO warning: ${message}`)

if (errors.length > 0) {
  for (const message of errors) console.error(`SEO error: ${message}`)
  process.exit(1)
}

console.log(`SEO audit passed: ${htmlFiles.length} HTML routes checked`)
