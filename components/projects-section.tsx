"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code2 } from "lucide-react"

const projects = [
  {
    title: "SerenShift",
    description:
      "SerenShift is a web-based application designed for All-In-One, a leading printing solution equipment servicing company, to manage flexible work-from-home arrangements.",
    tags: ["AWS", "Javascript", "Nodejs", "npm"],
    image: "/serenshift_screenshot.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Kaixun123/SerenShift",
  },
  {
    title: "HungerHeroes",
    description:
      "A food donation and redistribution application that helps to streamline the process of donating to local food banks. This is a project done by Singapore Management University (SMU) as part of their module assignment.",
    tags: ["Fireabase", "Vue", "JavaScript", "AWS"],
    image: "/hungerheroes_screenshot.jpg",
    liveUrl: "https://hungerheroes-5a8ed.web.app/",
    githubUrl: "https://github.com/Kaixun123/HungerHeroes",
  },
  {
    title: "Kunyah Ordering System",
    description:
      "Led a 6-member team to design and deploy a cloud-based administrative system for small F&B businesses operating Flask and MySQL. Implemented WCAG-compliant features including keyboard navigation and ARIA support using Nextjs.",
    tags: ["Python", "AWS", "Nextjs", "Project Management"],
    image: "/kunyah_screenshot.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Beer Jio",
    description:
      "A Telegram bot that helps coordinate spontaneous beer meetups with friends through private location sharing and smart group coordination.",
    tags: ["Python", "Telegram", "Google Calendar"],
    image: "/beer_jio_bot_screenshot.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Kaixun123/Beer-Jio-Bot",
  },
  ,
  {
    title: "Terraform Module Builder for AWS",
    description:
      "A Terraform module builder that helps to build Terraform modules for AWS.",
    tags: ["Terraform", "AWS", "Azure", "Google Cloud Platform"],
    image: "/terraform_module_builder_screenshot.jpg",
    liveUrl: "https://terraform-module-builder.vercel.app/",
    githubUrl: "https://github.com/Kaixun123/Terraform-Module-Builder",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance font-[family-name:var(--font-manrope)]">
            Explore my portfolio of  projects that span both cloud infrastructure and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-[family-name:var(--font-manrope)]">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 bg-transparent"
                    disabled={project.liveUrl === "#"}
                    onClick={() => project.liveUrl !== "#" && window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 bg-transparent"
                    disabled={project.githubUrl === "#"}
                    onClick={() => project.githubUrl !== "#" && window.open(project.githubUrl, '_blank')}
                  >
                    <Code2 className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
