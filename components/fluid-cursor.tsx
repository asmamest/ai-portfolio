"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  hue: number
  size: number
}

export function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      for (let i = 0; i < 2; i++) {
        // Softer, more harmonious color palette - pastel pinks, purples, blues, and teals
        const colorPalette = [320, 280, 240, 200, 180] // Pink, purple, blue, cyan, teal
        const baseHue = colorPalette[Math.floor(Math.random() * colorPalette.length)]
        const hue = baseHue + (Math.random() - 0.5) * 20 // Slight variation

        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 1.5, // Slower movement
          vy: (Math.random() - 0.5) * 1.5,
          life: 1,
          maxLife: 80 + Math.random() * 80, // Longer life for smoother transitions
          hue: hue,
          size: 60 + Math.random() * 100, // Larger, softer particles
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(252, 252, 253, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        const progress = particle.life / particle.maxLife
        const alpha = Math.max(0, 1 - Math.pow(progress, 0.7)) // Ease out for elegant fade

        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size)

        gradient.addColorStop(0, `hsla(${particle.hue}, 85%, 80%, ${alpha * 0.5})`)
        gradient.addColorStop(0.3, `hsla(${particle.hue + 15}, 80%, 75%, ${alpha * 0.35})`)
        gradient.addColorStop(0.6, `hsla(${particle.hue + 30}, 75%, 70%, ${alpha * 0.2})`)
        gradient.addColorStop(1, `hsla(${particle.hue + 45}, 70%, 65%, 0)`)

        ctx.filter = "blur(25px)"
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.filter = "none"

        return particle.life < particle.maxLife
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fluid-cursor" />
}
