"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase } from "lucide-react"
import { useState } from "react"

interface TimelineItem {
  year: string
  title: string
  organization: string
  description: string
  type: "education" | "experience"
}

interface ProfileSectionProps {
  name: string
  title: string
  bio: string
  imageUrl: string
  timeline: TimelineItem[]
}

export function ProfileSection({ name, title, bio, imageUrl, timeline }: ProfileSectionProps) {
  const [activeTab, setActiveTab] = useState<"education" | "experience" | null>(null)

  const educationItems = timeline.filter((item) => item.type === "education")
  const experienceItems = timeline.filter((item) => item.type === "experience")

  return (
    <div className="space-y-6 py-4">
      {/* Profile header - responsive layout */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg flex-shrink-0">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="flex-1 text-center sm:text-left space-y-2 sm:space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold">{name}</h2>
          <p className="text-base sm:text-lg text-primary font-medium">{title}</p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{bio}</p>
        </div>
      </div>

      {/* Education and Experience toggle buttons */}
      <div className="flex gap-3 justify-center sm:justify-start">
        <Button
          onClick={() => setActiveTab(activeTab === "education" ? null : "education")}
          variant={activeTab === "education" ? "default" : "outline"}
          className="flex items-center gap-2"
        >
          <GraduationCap className="h-4 w-4" />
          <span className="hidden sm:inline">Education</span>
          <span className="sm:hidden">Edu</span>
        </Button>
        <Button
          onClick={() => setActiveTab(activeTab === "experience" ? null : "experience")}
          variant={activeTab === "experience" ? "default" : "outline"}
          className="flex items-center gap-2"
        >
          <Briefcase className="h-4 w-4" />
          <span className="hidden sm:inline">Experience</span>
          <span className="sm:hidden">Exp</span>
        </Button>
      </div>

      {/* Education Timeline */}
      {activeTab === "education" && (
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold">Education Journey</h3>
          <div className="space-y-3">
            {educationItems.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-3 sm:p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm font-semibold text-primary">{item.year}</div>
                      <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">{item.organization}</p>
                    </div>
                    <GraduationCap className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Experience Timeline */}
      {activeTab === "experience" && (
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold">Experience Journey</h3>
          <div className="space-y-3">
            {experienceItems.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-3 sm:p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm font-semibold text-primary">{item.year}</div>
                      <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">{item.organization}</p>
                    </div>
                    <Briefcase className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
