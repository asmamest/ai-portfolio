"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ProjectDetailModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  project?: {
    id: string
    name: string
    description: string
    technologies: string[]
    githubLink?: string
    demoLink?: string
    imageUrl?: string | string[]
  }
}

export function ProjectDetailModal({ open, onOpenChange, project }: ProjectDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const additionalImages = project.images?.filter(Boolean) || []


  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? additionalImages.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === additionalImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {project.imageUrl && (
            <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border">
              <Image src={project.imageUrl || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
            </div>
          )}

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Overview</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm font-medium">View Code</span>
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm font-medium">Live Demo</span>
              </a>
            )}
          </div>

          {additionalImages.length > 1 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Gallery</h3>
              <div className="relative">
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border">
                  <Image
                    src={additionalImages[currentImageIndex] || "/placeholder.svg"}
                    alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Navigation buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={handleNextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Image counter */}
                <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-background/80 text-xs font-medium">
                  {currentImageIndex + 1} / {additionalImages.length}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
