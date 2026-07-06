"use client"

import ExportedImage from "next-image-export-optimizer"
import { useTranslation } from "react-i18next"
import { Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { urlFor } from "@/lib/sanity/client"

interface AuthorBioProps {
  authorName: string
  authorImage: any
}

export function AuthorBio({ authorName, authorImage }: AuthorBioProps) {
  const { t } = useTranslation()

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/alexis-olivero/",
      className: "border-[#0077b5] text-[#0077b5] hover:bg-[#0077b5] hover:text-white",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/alexisfit97",
      className: "border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C] hover:text-white",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/wolfslender",
      className: "border-foreground text-foreground hover:bg-foreground hover:text-background",
    },
  ]

  return (
    <div className="mt-16 mb-8 p-8 rounded-2xl border bg-card/50 backdrop-blur-sm shadow-sm">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="shrink-0">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-background shadow-md">
            {authorImage ? (
              <ExportedImage 
                src={urlFor(authorImage).url()} 
                alt={authorName} 
                fill 
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                {authorName.charAt(0)}
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">{authorName}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {t('authorBio.bio')}
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="sm"
                className={`rounded-full gap-2 transition-all duration-300 bg-transparent ${link.className}`}
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                  {link.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
