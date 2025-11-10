"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface PortfolioCardProps {
  title: string
  subtitle?: string
  description: string
  tags?: string[]
  link?: string
  githubLink?: string
  demoLink?: string
  imageUrl?: string
  onClick: () => void
  className?: string
}

export function PortfolioCard({
  title,
  subtitle,
  description,
  tags,
  link,
  githubLink,
  demoLink,
  imageUrl,
  onClick,
  className,
}: PortfolioCardProps) {
  return (
    <Card
      className={cn(
        "flex-shrink-0 w-80 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 hover:border-primary/50 overflow-hidden group",
        className,
      )}
      onClick={onClick}
    >
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
      )}

      <CardContent className={cn("p-6 space-y-3", imageUrl && "-mt-12 relative z-10")}>
        <div className="space-y-1">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag, index) => (
              <span key={index} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                {tag}
              </span>
            ))}
            {tags.length > 4 && <span className="px-2 py-1 text-xs text-muted-foreground">+{tags.length - 4}</span>}
          </div>
        )}

        <div className="flex items-center gap-3 pt-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-foreground hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-foreground hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
              <span>Demo</span>
            </a>
          )}
          {link && !githubLink && !demoLink && (
            <div className="flex items-center gap-1 text-xs text-primary">
              <ExternalLink className="h-3 w-3" />
              <span>View more</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
