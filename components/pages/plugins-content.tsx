"use client"

import { Button } from "@/components/ui/button"
import { useSiteData } from "@/hooks/use-site-data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, CheckCircle2, ExternalLink, Star, Download, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function PluginsContent() {
  const { plugins: pluginsData } = useSiteData()

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-violet-500/10 to-transparent blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <Badge variant="outline" className="px-4 py-1.5 rounded-full border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-semibold mb-6">
              WordPress Plugins
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              {pluginsData.hero.title} <br />
              <span className="text-gradient">
                {pluginsData.hero.highlight}
              </span>
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-balance">
              {pluginsData.hero.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Plugins Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {pluginsData.plugins.map((plugin, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className={cn(
                "rounded-3xl border border-border/60 bg-card/40 p-8 md:p-12 backdrop-blur-sm",
                plugin.bgColor
              )}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left - Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{plugin.icon}</span>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold">{plugin.title}</h3>
                        <p className="text-muted-foreground">{plugin.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {plugin.description}
                    </p>

                    {/* Free Features */}
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">What's Included (FREE)</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {plugin.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button asChild size="lg" className="rounded-full px-8">
                        <Link href={plugin.freemiusUrl} target="_blank">
                          Get PRO
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                        <Link href={plugin.url} target="_blank">
                          Free Version
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Right - PRO Features */}
                  <div className="space-y-6">
                    <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold">PRO Features</h4>
                        <Badge className="bg-white/20 text-white rounded-full">
                          {plugin.price}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {plugin.proFeatures.map((feature, pfIdx) => (
                          <div key={pfIdx} className="flex items-center gap-3">
                            <Star className="w-4 h-4 text-yellow-400 shrink-0 fill-yellow-400" />
                            <span className="text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="rounded-xl border border-border/60 bg-card/40 p-4 text-center">
                        <Users className="w-5 h-5 mx-auto mb-2 text-violet-500" />
                        <p className="text-2xl font-bold">500+</p>
                        <p className="text-xs text-muted-foreground">Active Sites</p>
                      </div>
                      <div className="rounded-xl border border-border/60 bg-card/40 p-4 text-center">
                        <TrendingUp className="w-5 h-5 mx-auto mb-2 text-violet-500" />
                        <p className="text-2xl font-bold">10GB+</p>
                        <p className="text-xs text-muted-foreground">Cleaned</p>
                      </div>
                      <div className="rounded-xl border border-border/60 bg-card/40 p-4 text-center">
                        <Download className="w-5 h-5 mx-auto mb-2 text-violet-500" />
                        <p className="text-2xl font-bold">4.8★</p>
                        <p className="text-xs text-muted-foreground">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why Plugins Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why My Plugins?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="font-bold mb-2">Clean Code</h4>
                <p className="text-sm text-muted-foreground">Well-documented, optimized, and following WordPress best practices.</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-bold mb-2">Regular Updates</h4>
                <p className="text-sm text-muted-foreground">Continuous improvements, security patches, and new features.</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-violet-500" />
                </div>
                <h4 className="font-bold mb-2">Dedicated Support</h4>
                <p className="text-sm text-muted-foreground">Direct access to support for setup help and custom questions.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-violet-800 p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Need a Custom WordPress Solution?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              I also build custom WordPress plugins and themes tailored to your specific needs.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8 bg-white text-violet-700 hover:bg-white/90">
              <Link href="/contact">
                Let's Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}