"use client"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

interface ContactSectionProps {
  name: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
}

export function ContactSection({ name, email, phone, location, linkedin, github }: ContactSectionProps) {
  const socialLinks = [
    { icon: Mail, label: "Email", href: `mailto:${email}`, value: email, color: "text-red-500" },
    { icon: Phone, label: "Phone", href: `tel:${phone}`, value: phone, color: "text-green-500" },
    { icon: MapPin, label: "Location", href: "#", value: location, color: "text-blue-500" },
    { icon: Linkedin, label: "LinkedIn", href: linkedin, value: "LinkedIn Profile", color: "text-blue-600" },
    { icon: Github, label: "GitHub", href: github, value: "GitHub Profile", color: "text-gray-800 dark:text-gray-200" },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-2">You can reach me through the following channels:</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 p-4 rounded-xl bg-background border-2 border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <div
                className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform ${link.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-muted-foreground">{link.label}</p>
                <p className="text-sm font-semibold truncate">{link.value}</p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
