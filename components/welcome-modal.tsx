"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"

interface WelcomeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WelcomeModal({ open, onOpenChange }: WelcomeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to My AI Portfolio</DialogTitle>
          <DialogDescription className="text-base leading-relaxed pt-2">
            This is an interactive AI-powered portfolio where you can learn about me, my projects, and skills through
            conversation. Simply type your question or use the quick action buttons to get started. Feel free to ask me
            anything!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
