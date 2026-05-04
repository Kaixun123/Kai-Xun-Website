"use client"

import type React from "react"
import { useState } from "react"
import dynamic from "next/dynamic"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const SocialIcon = dynamic(
  () => import("react-social-icons").then((mod) => ({ default: mod.SocialIcon })),
  {
    ssr: false,
    loading: () => <div className="h-10 w-10 animate-pulse" style={{ background: "#2b2921" }} />,
  }
)

const CONTACT_INFO = [
  { icon: Mail,   label: "Email",    value: "juaykaixun@hotmail.com", href: "mailto:juaykaixun@hotmail.com" },
  { icon: Phone,  label: "Phone",    value: "+65 9846 8966",          href: "tel:+6598468966" },
  { icon: MapPin, label: "Location", value: "Singapore",              href: null },
]

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ name: "", email: "", subject: "", message: "" })
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  return (
    <section id="contact" className="py-28 relative" style={{ background: "#161410" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#2b2921" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <AnimateIn direction="up">
          <div className="flex items-end justify-between mb-16 pb-6 border-b" style={{ borderColor: "#2b2921" }}>
            <div>
              <p className="font-label mb-3">[ 04 ] — Contact</p>
              <h2
                className="font-display text-[#f2ede4]"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
              >
                Let&apos;s
                <br />
                Connect
              </h2>
            </div>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left: contact info */}
          <AnimateIn direction="left">
            <div className="space-y-10">
              <div className="space-y-6">
                {CONTACT_INFO.map((item, i) => (
                  <div key={i}>
                    <p className="font-label mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#f2ede4] hover:text-[#cafe00] transition-colors duration-200"
                        style={{ fontFamily: "var(--font-lora)", fontSize: "0.95rem" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="text-[#f2ede4]"
                        style={{ fontFamily: "var(--font-lora)", fontSize: "0.95rem" }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <p className="font-label mb-4">Social</p>
                <div className="flex gap-3">
                  <SocialIcon
                    url="https://www.linkedin.com/in/juay-kai-xun"
                    network="linkedin"
                    bgColor="#cafe00"
                    fgColor="#0e0d0b"
                    style={{ height: 40, width: 40, borderRadius: "0px" }}
                  />
                  <SocialIcon
                    url="https://github.com/Kaixun123"
                    network="github"
                    bgColor="#2b2921"
                    fgColor="#f2ede4"
                    style={{ height: 40, width: 40, borderRadius: "0px" }}
                  />
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right: form */}
          <AnimateIn direction="right" delay={150}>
            <div>
              {sent && (
                <div
                  className="mb-8 flex items-center gap-3 p-4 border"
                  style={{ borderColor: "#cafe00", background: "rgba(202,254,0,0.05)" }}
                >
                  <Send size={16} style={{ color: "#cafe00", flexShrink: 0 }} />
                  <span
                    className="font-label"
                    style={{ color: "#cafe00" }}
                  >
                    Message sent — I&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="font-label block mb-3">Name</label>
                    <input
                      id="name" name="name" type="text"
                      value={formData.name} onChange={handleChange} required
                      placeholder="Your full name"
                      className="input-underline"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-label block mb-3">Email</label>
                    <input
                      id="email" name="email" type="email"
                      value={formData.email} onChange={handleChange} required
                      placeholder="your@email.com"
                      className="input-underline"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="font-label block mb-3">Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    value={formData.subject} onChange={handleChange} required
                    placeholder="What's this about?"
                    className="input-underline"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-label block mb-3">Message</label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange} required
                    rows={5} placeholder="Tell me about your project..."
                    className="input-underline resize-none"
                  />
                </div>

                <button type="submit" className="btn-fill w-full md:w-auto">
                  Send Message <Send size={15} />
                </button>
              </form>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
