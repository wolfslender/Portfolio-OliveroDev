"use client"

const techs = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
  "Docker", "AWS", "WordPress", "PHP", "Tailwind CSS",
  "Sanity", "Webflow", "MongoDB", "Redis", "GraphQL",
  "REST APIs", "Git", "Linux", "Vercel", "Cloudflare",
]

export function TechMarquee() {
  return (
    <section className="py-16 overflow-hidden bg-muted/20 border-y border-border/50">
      <div className="mask-gradient">
        <div className="flex gap-12 animate-marquee">
          {[...techs, ...techs].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-sm font-bold text-muted-foreground/40 uppercase tracking-widest whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
