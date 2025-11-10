"use client"

import { useState, useRef, useEffect } from "react"
import { FluidCursor } from "./fluid-cursor"
import { PortfolioAvatar } from "./portfolio-avatar"
import { ChatInput } from "./chat-input"
import { ChatMessage } from "./chat-message"
import { QuickActions } from "./quick-actions"
import { WelcomeModal } from "./welcome-modal"
import { Info } from "lucide-react"
import { Button } from "./ui/button"

interface Message {
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
  skillsData?: {
    technical: string[]
    languages: string[]
    tools: string[]
  }
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
    podcasts: Array<{ title: string; youtubeUrl: string }>
    books: Array<{ title: string; coverUrl: string }>
    events: Array<{ title: string; description: string; imageUrl: string }>
    moments: Array<{ type: "image" | "video"; url: string; caption: string }>
  }
  contactData?: {
    email: string
    linkedin: string
    github: string
    twitter?: string
  }
}

export function PortfolioChat() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey there! How's it going? 😊 What brings you here today?",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = { role: "user", content }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
        cards: data.cards,
        skillsData: data.skillsData,
        profileData: data.profileData,
        funData: data.funData,
        contactData: data.contactData, // Added contactData
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleCardClick = async (cardId: string) => {
    handleSendMessage(`Tell me more about: ${cardId}`)
  }

  const handleQuickAction = (actionId: string) => {
    const prompts: Record<string, string> = {
      me: "Tell me about yourself",
      projects: "Show me your projects",
      skills: "What are your skills?",
      awards: "What awards have you received?",
      fun: "Tell me something fun about you",
      contact: "How can I contact you?",
    }
    handleSendMessage(prompts[actionId] || actionId)
  }

  const showInitialView = messages.length === 1

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <FluidCursor />

      <div className="content-wrapper w-full max-w-4xl mx-auto h-screen flex flex-col py-4">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 rounded-full hover:bg-secondary/80 z-10"
          onClick={() => setIsModalOpen(true)}
        >
          <Info className="h-5 w-5" />
        </Button>

        {showInitialView ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-8 md:gap-12">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-balance">AI Portfolio</h1>
            <PortfolioAvatar />
            <div className="w-full max-w-2xl space-y-4">
              <div className="text-center mb-4">
                <p className="text-lg text-muted-foreground">{messages[0].content}</p>
              </div>
              <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
              <QuickActions onActionClick={handleQuickAction} />
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col gap-4 overflow-hidden">
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto space-y-4 px-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
            >
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  role={message.role}
                  content={message.content}
                  cards={message.cards}
                  skillsData={message.skillsData}
                  profileData={message.profileData}
                  funData={message.funData}
                  contactData={message.contactData}
                  onCardClick={handleCardClick}
                />
              ))}
              {isLoading && (
                <div className="flex gap-3 p-4 rounded-2xl bg-muted/50 mr-8">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">AI Assistant</p>
                    <p className="text-sm text-muted-foreground">Thinking...</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="space-y-3">
              <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
              <QuickActions onActionClick={handleQuickAction} />
            </div>
          </div>
        )}
      </div>

      <WelcomeModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}
