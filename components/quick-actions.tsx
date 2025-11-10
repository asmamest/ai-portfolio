"use client"

import { Button } from "./ui/button"
import { User, Briefcase, Layers, Sparkles, Mail, Award } from "lucide-react"

const actions = [
  { id: "me", label: "Me", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "awards", label: "Awards", icon: Award },
  { id: "fun", label: "Fun", icon: Sparkles },
  { id: "contact", label: "Contact", icon: Mail },
]

interface QuickActionsProps {
  onActionClick: (actionId: string) => void
}

export function QuickActions({ onActionClick }: QuickActionsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {actions.map((action) => {
        const Icon = action.icon
        return (
          <Button
            key={action.id}
            variant="outline"
            onClick={() => onActionClick(action.id)}
            className="flex items-center gap-2 h-12 px-6 bg-white/80 backdrop-blur-sm border-border/50 hover:bg-accent/10 hover:border-accent/50 hover:text-foreground rounded-full shadow-md transition-all"
          >
            <Icon className="h-4 w-4" />
            <span className="font-medium">{action.label}</span>
          </Button>
        )
      })}
    </div>
  )
}
