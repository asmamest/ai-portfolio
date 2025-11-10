"use client"

import { cn } from "@/lib/utils"
import { Bot, User } from "lucide-react"
import { ScrollableCards } from "./scrollable-cards"
import { SkillsCategories } from "./skills-categories"
import { ProfileSection } from "./profile-section"
import { FunSection } from "./fun-section"
import { ContactSection } from "./contact-section"
import { ProjectDetailModal } from "./project-detail-modal"
import { useState } from "react"

interface ChatMessageProps {
  role: "user" | "assistant"
  content: string
  cards?: Array<{
    id: string
    title: string
    subtitle?: string
    description: string
    tags?: string[]
    link?: string
    githubLink?: string
    demoLink?: string
    imageUrl?: string
  }>
  skillsData?: Record<string, string[]>
  profileData?: {
    name: string
    title: string
    bio: string
    imageUrl: string
    timeline: Array<{
      year: string
      title: string
      organization: string
      description: string
      type: "education" | "experience"
    }>
  }
  funData?: {
    description: string
    podcasts: Array<{ title: string; channel: string; youtubeUrl: string }>
    books: Array<{ title: string; author: string; coverUrl: string }>
    events: Array<{ title: string; description: string; imageUrl: string }>
    moments: Array<{ type: "image" | "video"; url: string; caption: string }>
  }
  contactData?: {
    name: string
    email: string
    phone: string
    location: string
    linkedin: string
    github: string
  }
  onCardClick?: (id: string) => void
  cardType?: "projects" | "awards"
}

export function ChatMessage({
  role,
  content,
  cards,
  skillsData,
  profileData,
  funData,
  contactData,
  onCardClick,
  cardType,
}: ChatMessageProps) {
  const isUser = role === "user"
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  const handleCardClick = (cardId: string) => {
    setSelectedProjectId(cardId)
    onCardClick?.(cardId)
  }

  const displayMode = cardType === "projects" || cardType === "awards" ? "buttons" : "cards"

  return (
    <>
      <div
        className={cn(
          "flex gap-3 p-4 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-500",
          isUser ? "bg-accent/10 ml-2 sm:ml-8" : "bg-muted/50 mr-2 sm:mr-8",
        )}
      >
        <div
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
            isUser ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground",
          )}
        >
          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </div>
        <div className="flex-1 space-y-4 overflow-hidden">
          <p className="text-sm font-medium">{isUser ? "You" : "AI Assistant"}</p>
          {content && <div className="text-sm leading-relaxed whitespace-pre-wrap break-words">{content}</div>}

          {cards && cards.length > 0 && (
            <ScrollableCards cards={cards} onCardClick={handleCardClick} displayMode={displayMode} />
          )}

          {skillsData && (
            <SkillsCategories
              categories={Object.entries(skillsData).map(([title, skills]) => ({
                title,
                skills,
              }))}
            />
          )}

          {profileData && (
            <ProfileSection
              name={profileData.name}
              title={profileData.title}
              bio={profileData.bio}
              imageUrl={profileData.imageUrl}
              timeline={profileData.timeline}
            />
          )}

          {funData && (
            <FunSection
              description={funData.description}
              podcasts={funData.podcasts}
              books={funData.books}
              events={funData.events}
              moments={funData.moments}
            />
          )}

          {contactData && (
            <ContactSection
              name={contactData.name}
              email={contactData.email}
              phone={contactData.phone}
              location={contactData.location}
              linkedin={contactData.linkedin}
              github={contactData.github}
            />
          )}
        </div>
      </div>

      {selectedProjectId && (
        <ProjectDetailModal
          open={!!selectedProjectId}
          onOpenChange={(open) => !open && setSelectedProjectId(null)}
          project={
            cards?.find((c) => c.id === selectedProjectId)
              ? {
                  id: selectedProjectId,
                  name: cards.find((c) => c.id === selectedProjectId)?.title || "",
                  description: cards.find((c) => c.id === selectedProjectId)?.description || "",
                  technologies: cards.find((c) => c.id === selectedProjectId)?.tags || [],
                  githubLink: cards.find((c) => c.id === selectedProjectId)?.githubLink,
                  demoLink: cards.find((c) => c.id === selectedProjectId)?.demoLink,
                  imageUrl: cards.find((c) => c.id === selectedProjectId)?.imageUrl,
                }
              : undefined
          }
        />
      )}
    </>
  )
}
