"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import { TypingTitle } from "@/components/typing-title"

const TITLE_LINES = [
  { text: "Cloud &",      className: "" },
  { text: "AI Engineer", className: "" },
]

const TICKER_ITEMS = [
  "AWS", "AZURE", "TERRAFORM", "AI/ML", "DEVOPS", "PYTHON", "NODE.JS",
  "AWS", "AZURE", "TERRAFORM", "AI/ML", "DEVOPS", "PYTHON", "NODE.JS",
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "#0e0d0b" }}>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(242,237,228,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,237,228,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Big background number */}
      <div
        className="absolute right-[-2rem] top-[50%] -translate-y-1/2 select-none pointer-events-none z-0 leading-none"
        style={{
          fontFamily: "var(--font-barlow)",
          fontWeight: 900,
          fontStyle: "italic",
          fontSize: "clamp(18rem, 35vw, 48rem)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(242,237,228,0.04)",
        }}
      >
        01
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">

            {/* Left: text */}
            <div>
              {/* Label */}
              <div
                className="font-label mb-8 flex items-center gap-3"
                style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}
              >
                <span className="w-8 h-px bg-[#cafe00]" />
                Available to network · Singapore
              </div>

              {/* Title */}
              <TypingTitle
                lines={TITLE_LINES}
                speed={60}
                startDelay={400}
                className="mb-8"
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  lineHeight: 0.9,
                  fontSize: "clamp(4.5rem, 11vw, 10rem)",
                  color: "#f2ede4",
                  letterSpacing: "-0.02em",
                }}
                cursorColor="#cafe00"
              />

              {/* Subtitle */}
              <p
                className="text-[#7a7062] max-w-lg leading-relaxed mb-10"
                style={{
                  fontFamily: "var(--font-lora)",
                  fontSize: "1.1rem",
                  opacity: mounted ? 1 : 0,
                  transition: "opacity 0.6s ease 0.3s",
                }}
              >
                I design scalable cloud architectures, lead smooth migrations, and build
                AI‑powered infrastructure solutions that help businesses grow.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap gap-4"
                style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.5s" }}
              >
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-fill"
                >
                  View My Work <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-stroke"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right: photo */}
            <div
              className="hidden lg:block flex-shrink-0"
              style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }}
            >
              <div className="relative w-72 xl:w-80">
                {/* Photo with tint */}
                <div className="photo-tint w-full aspect-[3/4]">
                  <img src="/professional_headshot.jpg" alt="Juay Kai Xun" />
                  <div className="photo-halftone" />
                </div>

                {/* Name plate */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{ background: "linear-gradient(to top, rgba(14,13,11,0.95) 0%, transparent 100%)" }}
                >
                  <p
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, fontStyle: "italic", textTransform: "uppercase", fontSize: "1.4rem", color: "#f2ede4", lineHeight: 1 }}
                  >
                    Juay Kai Xun
                  </p>
                  <p className="font-label mt-1">Cloud & AI Engineer</p>
                </div>

                {/* Accent border */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: "#cafe00" }} />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: "#cafe00" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech ticker */}
      <div
        className="relative z-10 border-t border-b overflow-hidden py-3.5"
        style={{ borderColor: "#2b2921", background: "#161410" }}
      >
        <div className="ticker-inner">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="font-label mx-6 flex items-center gap-6">
              {item}
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#cafe00" }} />
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-20 left-1/2 flex flex-col items-center gap-2 z-10"
        style={{ animation: "bounce-y 2s ease-in-out infinite" }}
      >
        <span className="font-label">Scroll</span>
        <ChevronDown size={14} style={{ color: "#7a7062" }} />
      </div>
    </section>
  )
}
