"use client"

import { siteConfig } from "@/lib/config"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Star } from "lucide-react"

function getInitials(name: string) {
  return name
    .split(" ")
    .map(w => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

const cardStyles = [
  { border: "border-primary/20", bg: "bg-primary/5", text: "text-primary" },
  { border: "border-secondary/20", bg: "bg-secondary/5", text: "text-secondary" },
  { border: "border-primary/20", bg: "bg-primary/5", text: "text-primary" },
]

export function TestimonialsSection() {
    const { testimonials } = siteConfig

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                <ScrollReveal>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                            What clients{" "}
                            <span className="text-primary">say</span>
                        </h2>
                        <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
                            Real feedback from people I have worked with.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => {
                        const style = cardStyles[index % cardStyles.length]
                        return (
                            <ScrollReveal key={index} delay={index * 100}>
                                <div className="group relative p-8 bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                                    {/* Top accent line */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 ${style.bg} group-hover:opacity-80 transition-opacity`} />

                                    <div className="flex-1 flex flex-col">
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-3.5 h-3.5 fill-current ${style.text}`} />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <blockquote className="flex-1">
                                            <p className="text-base md:text-lg leading-relaxed text-foreground/85">
                                                &ldquo;{testimonial.quote}&rdquo;
                                            </p>
                                        </blockquote>

                                        {/* Author */}
                                        <div className="flex items-center gap-4 pt-6 mt-6 border-t border-border/50">
                                            <div className={`w-11 h-11 flex items-center justify-center text-sm font-bold ${style.bg} ${style.text} shrink-0`}>
                                                {getInitials(testimonial.author)}
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-sm font-bold truncate">
                                                    {testimonial.author}
                                                </h4>
                                                <p className="text-xs text-muted-foreground truncate">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
