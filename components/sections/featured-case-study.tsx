"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { useCommon } from "@/hooks/use-common"
import { getMetricValue, type MetricField } from "@/lib/utils"

interface FeaturedCaseStudyProps {
    project: {
        title: string
        description: string
        image: string
        tags: string[]
        slug?: string
        demo: string
        industry?: string
        metrics?: {
            users?: MetricField
            performance?: MetricField
            impact?: MetricField
        }
        challenge?: string
        solution?: string
        impactStatement?: string
    }
}

export function FeaturedCaseStudy({ project }: FeaturedCaseStudyProps) {
    const common = useCommon()

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/20">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-12 space-y-4">
                        <Badge className="px-4 py-1.5 bg-primary/5 text-primary border-primary/20 text-sm font-semibold">
                            Featured Case Study
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                            Real results for{" "}
                            <span className="text-primary">real clients</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal delay={100}>
                        <div className="relative aspect-[4/3] overflow-hidden border border-border/60 bg-card group">
                            <ExportedImage
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                                {project.tags.slice(0, 4).map(tag => (
                                    <Badge key={tag} variant="secondary" className="bg-background/80 border-border/60 font-mono text-xs">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="space-y-6">
                            <div className="space-y-3">
                                {project.industry && (
                                    <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                                        {project.industry}
                                    </Badge>
                                )}
                                <h3 className="text-3xl md:text-4xl font-bold">
                                    {project.slug ? (
                                        <Link href={`/work/${project.slug}`} className="hover:text-primary transition-colors">
                                            {project.title}
                                        </Link>
                                    ) : project.title}
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {project.metrics && (
                                <div className="grid grid-cols-3 gap-4 p-5 bg-background border border-border/60">
                                    {project.metrics.users && (
                                        <div className="text-center space-y-1">
                                            <TrendingUp className="w-5 h-5 mx-auto text-primary" />
                                            <div className="font-bold text-lg">{getMetricValue(project.metrics.users)}</div>
                                            <div className="text-xs text-muted-foreground">Users</div>
                                        </div>
                                    )}
                                    {project.metrics.performance && (
                                        <div className="text-center space-y-1">
                                            <TrendingUp className="w-5 h-5 mx-auto text-secondary" />
                                            <div className="font-bold text-lg">{getMetricValue(project.metrics.performance)}</div>
                                            <div className="text-xs text-muted-foreground">Speed</div>
                                        </div>
                                    )}
                                    {project.metrics.impact && (
                                        <div className="text-center space-y-1">
                                            <TrendingUp className="w-5 h-5 mx-auto text-primary" />
                                            <div className="font-bold text-lg line-clamp-2">{getMetricValue(project.metrics.impact)}</div>
                                            <div className="text-xs text-muted-foreground">Impact</div>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <Button asChild className="h-12 px-8 font-bold group">
                                    <Link href={project.slug ? `/work/${project.slug}` : project.demo} target={project.slug ? undefined : "_blank"} rel={project.slug ? undefined : "noopener noreferrer"}>
                                        {common.viewProject} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="h-12 px-8 font-bold border-2">
                                    <Link href="/contact?audit=true">
                                        {common.freeAudit}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
