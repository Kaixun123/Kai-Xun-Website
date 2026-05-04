"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(14,13,11,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #2b2921" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontFamily: "var(--font-barlow)" }}
          className="font-[900] italic uppercase text-[#f2ede4] text-xl tracking-tight leading-none hover:text-[#cafe00] transition-colors duration-200"
        >
          KX<span className="text-[#cafe00]">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-label hover:text-[#cafe00] transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo("#contact")} className="btn-fill text-sm px-5 py-2.5">
            Contact Me
          </button>
        </nav>

        <button
          className="md:hidden text-[#7a7062] hover:text-[#f2ede4] transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t" style={{ background: "#0e0d0b", borderColor: "#2b2921" }}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-label text-left hover:text-[#cafe00] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#contact")} className="btn-fill mt-2">
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
