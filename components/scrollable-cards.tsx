"use client"

import { PortfolioCard } from "./portfolio-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { useRef, useState } from "react"

interface CardData {
  id: string
  title: string
  subtitle?: string
  description: string
  tags?: string[]
  link?: string
  githubLink?: string
  demoLink?: string
  imageUrl?: string[]
}

interface ScrollableCardsProps {
  cards: CardData[]
  onCardClick: (id: string) => void
  displayMode?: "cards" | "buttons"
}

export function ScrollableCards({ cards, onCardClick, displayMode = "cards" }: ScrollableCardsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftButton(scrollLeft > 0)
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  if (displayMode === "buttons") {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 py-4">
        {cards.map((card) => (
          <Button
            key={card.id}
            onClick={() => onCardClick(card.id)}
            variant="outline"
            className="h-auto py-2 sm:py-3 px-2 sm:px-3 text-xs sm:text-sm font-medium hover:bg-primary/10 transition-all line-clamp-2"
          >
            {card.title}
          </Button>
        ))}
      </div>
    )
  }

  return (
    <div className="relative group/scroll py-4">
      <Button
        variant="ghost"
        size="icon"
        className={`absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 bg-background/95 backdrop-blur-sm hover:bg-primary/10 border border-border shadow-lg hover:scale-110 ${
          !showLeftButton ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
      </Button>

      {/* Cards container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-3 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card) => (
          <PortfolioCard
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            tags={card.tags}
            link={card.link}
            githubLink={card.githubLink}
            demoLink={card.demoLink}
            imageUrl={card.imageUrl}
            onClick={() => onCardClick(card.id)}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className={`absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 bg-background/95 backdrop-blur-sm hover:bg-primary/10 border border-border shadow-lg hover:scale-110 ${
          !showRightButton ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
      </Button>
    </div>
  )
}
