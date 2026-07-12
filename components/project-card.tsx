"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowUpRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { cn, getMetricLabel, getMetricValue, type MetricField } from "@/lib/utils"
import { useCommon } from "@/hooks/use-common"
import { useTranslation } from "react-i18next"

interface ProjectCardProps {
  title: string
  slug?: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
  size?: "large" | "medium" | "small"
  industry?: string
  metrics?: {
    users?: MetricField
    performance?: MetricField
    impact?: MetricField
  }
}

export function ProjectCard({
  title,
  slug,
  description,
  image,
  tags,
  github,
  demo,
  size = "medium",
  industry,
  metrics,
}: ProjectCardProps) {
  const common = useCommon()
  const { t } = useTranslation()

  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm text-card-foreground transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 active:scale-[0.99]",
        size === "large" ? "md:col-span-2 row-span-2" : "h-full"
      )}
    >
      <div className={cn(
        "relative w-full overflow-hidden",
        size === "large" ? "h-64 md:h-[400px]" : "h-56"
      )}>
        <ExportedImage
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

        {industry && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-background/80 backdrop-blur-md border-white/10 text-foreground font-semibold">
              {industry}
            </Badge>
          </div>
        )}

        {metrics && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary/90 backdrop-blur-md text-primary-foreground border-primary/20 font-bold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {t('projectCard.highImpact')}
            </Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/10 px-2.5 py-0.5 text-xs font-medium transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className={cn(
          "font-bold mb-2 leading-tight transition-colors duration-300",
          size === "large" ? "text-2xl md:text-3xl" : "text-xl"
        )}>
          {slug ? (
            <Link href={`/work/${slug}`} className="hover:text-primary transition-colors">
              {title}
            </Link>
          ) : title}
        </h3>

        <p className="text-muted-foreground line-clamp-3 mb-6 text-sm md:text-base flex-1 leading-relaxed">
          {description}
        </p>

        {metrics && (
          <div className="mb-6 grid grid-cols-3 gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
            {metrics.users && (
              <div className="text-center">
                <div className="text-xs font-bold text-primary mb-1">{getMetricValue(metrics.users)}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{getMetricLabel(metrics.users, common.users)}</div>
              </div>
            )}
            {metrics.performance && (
              <div className="text-center">
                <div className="text-xs font-bold text-primary mb-1">{getMetricValue(metrics.performance)}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{getMetricLabel(metrics.performance, common.speed)}</div>
              </div>
            )}
            {metrics.impact && (
              <div className="text-center">
                <div className="text-xs font-bold text-primary mb-1 line-clamp-2">{getMetricValue(metrics.impact)}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{getMetricLabel(metrics.impact, common.impact)}</div>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-3 mt-auto pt-2">
          <Link
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 px-5 py-2.5 text-sm font-medium transition-all hover:scale-105 hover:shadow-primary/40 active:scale-95"
          >
            {common.viewProject} <ArrowUpRight className="h-4 w-4" />
          </Link>
          {github && github !== "#" && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t('projectCard.viewSource', 'View source code')}: ${title}`}
              className="inline-flex items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm p-2.5 text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:border-accent"
            >
              <Github className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </Card>
  )
}
