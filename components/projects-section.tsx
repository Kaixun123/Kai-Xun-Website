"use client"

import { useState, useEffect } from "react"
import { Github, ArrowUpRight, X } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const projects = [
  {
    num: "01",
    title: "SerenShift",
    description:
      "A web-based application for All-In-One, a leading printing solution equipment servicing company, to manage flexible work-from-home arrangements.",
    tags: ["AWS", "JavaScript", "Node.js"],
    image: "/serenshift_screenshot.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Kaixun123/SerenShift",
  },
  {
    num: "02",
    title: "HungerHeroes",
    description:
      "A food donation and redistribution application that streamlines donating to local food banks. Built as part of an SMU module assignment.",
    tags: ["Firebase", "Vue", "AWS"],
    image: "/hungerheroes_screenshot.jpg",
    liveUrl: "https://hungerheroes-5a8ed.web.app/",
    githubUrl: "https://github.com/Kaixun123/HungerHeroes",
  },
  {
    num: "03",
    title: "Kunyah Ordering System",
    description:
      "Led a 6-member team to design and deploy a cloud-based admin system for small F&B businesses. Flask, MySQL, and Next.js with full WCAG accessibility compliance.",
    tags: ["Python", "AWS", "Next.js"],
    image: "/kunyah_screenshot.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    num: "04",
    title: "Beer Jio",
    description:
      "A Telegram bot that coordinates spontaneous beer meetups with friends through private location sharing and smart group coordination.",
    tags: ["Python", "Telegram", "Google Calendar"],
    image: "/beer_jio_bot_screenshot.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Kaixun123/Beer-Jio-Bot",
  },
  {
    num: "05",
    title: "Terraform Builder",
    description:
      "A visual infrastructure scaffolding tool that generates production-ready Terraform configurations for AWS and Azure. Select templates, get full .tf files.",
    tags: ["Terraform", "AWS", "Node.js", "Tailwind CSS"],
    image: "/terraform_module_builder_screenshot.jpg",
    liveUrl: "https://terraform-module-builder.vercel.app/",
    githubUrl: "https://github.com/Kaixun123/Terraform-Module-Builder",
  },
  {
    num: "06",
    title: "Ecotrack",
    description:
      "Cloud-based uniform inventory management platform built for The Circular Classroom, featuring multi-role access control, bulk CSV donation processing, real-time analytics dashboards, PDF sustainability reporting, and a Linear Programming repurposing planner.",
    tags: ["Terraform", "AWS", "Node.js", "Next.js", "Tailwind CSS"],
    image: "/ecotrack_screenshot.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalImage(null) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section id="projects" className="py-28 relative" style={{ background: "#0e0d0b" }}>
      {/* Image modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(14,13,11,0.92)", backdropFilter: "blur(6px)" }}
          onClick={() => setModalImage(null)}
        >
          <button
            className="absolute top-6 right-6 font-label hover:text-[#cafe00] transition-colors flex items-center gap-2"
            onClick={() => setModalImage(null)}
          >
            <X size={16} /> Close
          </button>
          <div
            className="max-w-5xl w-full mx-6"
            style={{ border: "1px solid #2b2921" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-label px-4 py-2.5 flex items-center justify-between" style={{ background: "#161410", borderBottom: "1px solid #2b2921" }}>
              <span>{modalImage.title}</span>
              <span className="opacity-40">Click outside to close</span>
            </div>
            <img
              src={modalImage.src}
              alt={modalImage.title}
              className="w-full max-h-[75vh] object-contain"
              style={{ background: "#0e0d0b" }}
            />
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <AnimateIn direction="up">
          <div className="flex items-end justify-between mb-16 pb-6 border-b" style={{ borderColor: "#2b2921" }}>
            <div>
              <p className="font-label mb-3">[ 01 ] — Work</p>
              <h2
                className="font-display text-[#f2ede4]"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
              >
                Featured
                <br />
                Projects
              </h2>
            </div>
            <p className="font-label hidden md:block pb-3">{projects.length} projects</p>
          </div>
        </AnimateIn>

        {/* Project cards — large list */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <AnimateIn key={index} direction="up" delay={index * 60}>
              <div className="proj-card group">
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_160px] gap-6 p-6 md:p-8 items-center">
                  {/* Number */}
                  <div className="proj-num font-[900] italic" style={{ fontFamily: "var(--font-barlow)", fontSize: "2rem" }}>
                    {project.num}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="proj-title mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                      {project.title}
                    </h3>
                    <p className="proj-desc max-w-xl mb-5">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="proj-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 items-start md:items-end">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-btn"
                      >
                        Live <ArrowUpRight size={13} />
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-btn"
                      >
                        Code <Github size={13} />
                      </a>
                    )}
                    {project.liveUrl === "#" && project.githubUrl === "#" && (
                      <span className="font-label opacity-40">Private</span>
                    )}
                  </div>

                  {/* Thumbnail */}
                  <div
                    className="hidden md:block w-40 h-24 overflow-hidden flex-shrink-0 cursor-zoom-in"
                    style={{ border: "1px solid #2b2921" }}
                    onClick={() => setModalImage({ src: project.image, title: project.title })}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: "grayscale(30%)" }}
                    />
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
