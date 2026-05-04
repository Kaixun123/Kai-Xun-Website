"use client"

import { useRef } from "react"
import { AnimateIn } from "@/components/animate-in"
import { useInView } from "@/hooks/use-in-view"

const skills = [
  { name: "AWS",       level: 90 },
  { name: "Azure",     level: 90 },
  { name: "Terraform", level: 95 },
  { name: "DevOps",    level: 90 },
  { name: "Node.js",   level: 90 },
  { name: "Python",    level: 90 },
  { name: "Java",      level: 80 },
]

const certifications = [
  { name: "AWS Solutions Architect Associate", issuer: "Amazon Web Services", year: "2024" },
  { name: "AWS SysOps Administrator Associate", issuer: "Amazon Web Services", year: "2025" },
]

function SkillBars() {
  const { ref, inView } = useInView()

  return (
    <div ref={ref} className="space-y-6">
      {skills.map((skill, i) => (
        <div key={i}>
          <div className="flex justify-between mb-2">
            <span
              className="font-label"
              style={{ color: "#f2ede4" }}
            >
              {skill.name}
            </span>
            <span className="font-label">{skill.level}%</span>
          </div>
          <div className="skill-bar-track">
            <div
              className="skill-bar-fill"
              style={{
                "--fill-w": inView ? `${skill.level}%` : "0%",
                animationDelay: `${i * 100}ms`,
                animationPlayState: inView ? "running" : "paused",
              } as React.CSSProperties}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-28 relative" style={{ background: "#0e0d0b" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#2b2921" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <AnimateIn direction="up">
          <div className="flex items-end justify-between mb-16 pb-6 border-b" style={{ borderColor: "#2b2921" }}>
            <div>
              <p className="font-label mb-3">[ 03 ] — About</p>
              <h2
                className="font-display text-[#f2ede4]"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
              >
                Who
                <br />
                I Am
              </h2>
            </div>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: photo + bio */}
          <AnimateIn direction="left">
            <div className="space-y-8">
              {/* Photo */}
              <div className="photo-tint max-w-sm" style={{ aspectRatio: "4/5" }}>
                <img src="/profile.jpg" alt="Juay Kai Xun" />
                <div className="photo-halftone" />
              </div>

              {/* Bio */}
              <div>
                <h3
                  className="text-[#f2ede4] mb-4"
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    textTransform: "uppercase",
                    fontSize: "1.4rem",
                  }}
                >
                  Cloud Infrastructure Enthusiast
                </h3>
                <p
                  className="text-[#7a7062] leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-lora)", fontSize: "0.95rem" }}
                >
                  With experience spanning cloud architecture and infrastructure design, I specialize
                  in creating scalable, secure, and cost-effective solutions that drive business
                  growth. My expertise covers AWS, Azure, and modern DevOps practices.
                </p>
                <p
                  className="text-[#7a7062] leading-relaxed"
                  style={{ fontFamily: "var(--font-lora)", fontSize: "0.95rem" }}
                >
                  When I&apos;m not architecting cloud solutions, you&apos;ll find me diving into new
                  tech, experimenting with programming languages, and building projects just for fun.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Right: skills + certs */}
          <AnimateIn direction="right" delay={150}>
            <div className="space-y-12">
              {/* Skills */}
              <div>
                <p className="font-label mb-8">Technical Proficiency</p>
                <SkillBars />
              </div>

              {/* Certifications */}
              <div>
                <p className="font-label mb-6">Certifications</p>
                <div className="space-y-0">
                  {certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-5 py-5 border-b"
                      style={{ borderColor: "#2b2921" }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-barlow)",
                          fontWeight: 900,
                          fontStyle: "italic",
                          color: "#cafe00",
                          fontSize: "1.1rem",
                          lineHeight: 1,
                          flexShrink: 0,
                          paddingTop: "2px",
                        }}
                      >
                        {cert.year}
                      </span>
                      <div>
                        <p
                          className="text-[#f2ede4] mb-0.5"
                          style={{ fontFamily: "var(--font-lora)", fontSize: "0.9rem", fontWeight: 600 }}
                        >
                          {cert.name}
                        </p>
                        <p className="font-label">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
