"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Cloud, Server, Shield } from "lucide-react"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-24 flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Cloud className="h-32 w-32 text-primary" />
        </div>
        <div className="absolute top-40 right-32">
          <Server className="h-24 w-24 text-secondary" />
        </div>
        <div className="absolute bottom-32 left-32">
          <Shield className="h-28 w-28 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-8">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src="/professional_headshot.jpg"
                  alt="Your Name - Cloud Solutions Expert"
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10"></div>
              </div>
            </div>

            {/* Title and Content */}
            <div className="flex-1 text-center lg:text-left lg:pt-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
                Building the Future with <span className="text-primary">Cloud Innovation</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 font-[family-name:var(--font-manrope)]">
              I design scalable cloud architectures, lead smooth migrations, and build modern infrastructure solutions that help businesses grow and innovate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-3 text-lg"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Stats
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground font-[family-name:var(--font-manrope)]">Cloud Migrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground font-[family-name:var(--font-manrope)]">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground font-[family-name:var(--font-manrope)]">Years Experience</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
