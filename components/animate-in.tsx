"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "none"
}

export function AnimateIn({ children, className, delay = 0, direction = "up" }: AnimateInProps) {
  const { ref, inView } = useInView()

  const initial = {
    up: "translate-y-8",
    left: "-translate-x-8",
    right: "translate-x-8",
    none: "",
  }[direction]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${initial}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
