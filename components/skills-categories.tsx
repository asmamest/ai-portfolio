"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SkillCategory {
  title: string
  icon?: React.ReactNode
  skills: string[]
}

interface SkillsCategoriesProps {
  categories: SkillCategory[]
}

export function SkillsCategories({ categories }: SkillsCategoriesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
      {categories.map((category, index) => (
        <Card
          key={index}
          className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              {category.icon}
              {category.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
