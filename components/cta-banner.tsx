"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import type { ReactNode } from "react"

interface CTABannerProps {
  badge?: string
  title: ReactNode
  description: string
  buttonText: string
  buttonHref: string
  className?: string
}

export function CTABanner({ badge, title, description, buttonText, buttonHref, className = "" }: CTABannerProps) {
  return (
    <section className={`px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-foreground/[0.04] border border-border/60 p-12 md:p-20 text-center">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

          <div className="relative space-y-8">
            <ScrollReveal>
              {badge && (
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm font-semibold mb-6">
                  {badge}
                </Badge>
              )}
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6">
                {title}
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>

              <div className="pt-6">
                <Button
                  asChild
                  className="h-14 px-10 text-lg font-bold group"
                >
                  <Link href={buttonHref}>
                    {buttonText} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
