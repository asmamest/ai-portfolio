"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Youtube, BookOpen, Camera, Sparkles } from "lucide-react"
import Image from "next/image"

interface Podcast {
  title: string
  channel: string
  youtubeUrl: string
}

interface Book {
  title: string
  author: string
  coverUrl: string
}

interface Event {
  title: string
  description: string
  imageUrl: string
}

interface FunSectionProps {
  description: string
  podcasts: Podcast[]
  books: Book[]
  events: Event[]
  moments: { type: "image" | "video"; url: string; caption: string }[]
}

export function FunSection({ description, podcasts, books, events, moments }: FunSectionProps) {
  const [activeSection, setActiveSection] = useState<"podcasts" | "books" | "events" | "moments" | null>(null)

  return (
    <div className="space-y-8 py-4">
      <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          onClick={() => setActiveSection(activeSection === "podcasts" ? null : "podcasts")}
          variant={activeSection === "podcasts" ? "default" : "outline"}
          className="rounded-full px-6 py-2"
        >
          <Youtube className="h-4 w-4 mr-2" />
          Favorite Podcasts
        </Button>
        <Button
          onClick={() => setActiveSection(activeSection === "books" ? null : "books")}
          variant={activeSection === "books" ? "default" : "outline"}
          className="rounded-full px-6 py-2"
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Books I've Read
        </Button>
        <Button
          onClick={() => setActiveSection(activeSection === "events" ? null : "events")}
          variant={activeSection === "events" ? "default" : "outline"}
          className="rounded-full px-6 py-2"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Events & Workshops
        </Button>
        <Button
          onClick={() => setActiveSection(activeSection === "moments" ? null : "moments")}
          variant={activeSection === "moments" ? "default" : "outline"}
          className="rounded-full px-6 py-2"
        >
          <Camera className="h-4 w-4 mr-2" />
          Good Moments
        </Button>
      </div>

      {activeSection === "podcasts" && (
        <Card className="border-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-red-500" />
              Favorite Podcasts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {podcasts.map((podcast, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-auto py-3 px-4 bg-transparent hover:bg-accent/50"
                  asChild
                >
                  <a
                    href={podcast.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start gap-1"
                  >
                    <div className="flex items-center gap-2">
                      <Youtube className="h-4 w-4 text-red-500" />
                      <span className="font-semibold text-left">{podcast.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground ml-6">{podcast.channel}</span>
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeSection === "books" && (
        <Card className="border-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-amber-500" />
              Books I've Read
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.map((book, index) => (
                <div key={index} className="space-y-2">
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                    <Image
                      src={book.coverUrl || "/placeholder.svg?height=400&width=300"}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold line-clamp-2">{book.title}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1">{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeSection === "events" && (
        <Card className="border-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-500" />
              Events & Workshops
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div key={index} className="space-y-3">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={event.imageUrl || "/placeholder.svg?height=400&width=600"}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold">{event.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeSection === "moments" && (
        <Card className="border-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-pink-500" />
              Good Moments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {moments.map((moment, index) => (
                <div key={index} className="space-y-2">
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                    {moment.type === "image" ? (
                      <Image
                        src={moment.url || "/placeholder.svg?height=400&width=400"}
                        alt={moment.caption}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <video src={moment.url} controls className="w-full h-full object-cover" />
                    )}
                  </div>
                  <p className="text-xs text-center text-muted-foreground leading-relaxed">{moment.caption}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
