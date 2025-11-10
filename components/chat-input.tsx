"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ArrowUp } from "lucide-react"

interface ChatInputProps {
  onSendMessage: (message: string) => void
  disabled?: boolean
}

export function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !disabled) {
      onSendMessage(message.trim())
      setMessage("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Input
        type="text"
        placeholder="Ask me anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={disabled}
        className="w-full h-14 pr-14 text-base bg-white/80 backdrop-blur-sm border-border/50 rounded-full shadow-lg focus-visible:ring-accent"
      />
      <Button
        type="submit"
        size="icon"
        disabled={!message.trim() || disabled}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 bg-primary hover:bg-primary/90 disabled:opacity-50"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </form>
  )
}
