import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Code, Database, Shield, Zap, Users } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const skills = [
  { name: "AWS", level: 90, icon: Cloud },
  { name: "Azure", level: 90, icon: Cloud },
  { name: "Terraform", level: 95, icon: Database },
  { name: "DevOps", level: 90, icon: Zap },
  { name: "Node", level: 90, icon: Code },
  { name: "Python", level: 90, icon: Code },
  { name: "Java", level: 80, icon: Code },
]

const certifications = [
  "AWS Solutions Architect Associate",
  "AWS SysOps Administrator Associate",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimateIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance font-[family-name:var(--font-manrope)]">
              Passionate cloud architect with a mission to transform businesses through infrastructure solutions.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image and Bio */}
          <AnimateIn direction="left" className="space-y-6">
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Professional headshot"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Cloud Infrastructure Enthusiast</h3>
              <p className="text-muted-foreground mb-6 font-[family-name:var(--font-manrope)] leading-relaxed">
                With over 5 years of experience in cloud architecture and infrastructure design, I specialize in
                creating scalable, secure, and cost-effective solutions that drive business growth. My expertise spans
                across major cloud platforms including AWS, Azure, and Google Cloud Platform.
              </p>

              <p className="text-muted-foreground mb-6 font-[family-name:var(--font-manrope)] leading-relaxed">
              When I&apos;m not architecting cloud solutions, you&apos;ll find me diving into new tech, experimenting with programming languages, and building projects just for fun. 
              I love tackling challenges—whether it&apos;s developing handy apps, or teaming up with others to turn ideas into something impactful
              </p>

            </div>
          </AnimateIn>

          {/* Skills and Certifications */}
          <AnimateIn direction="right" delay={150} className="space-y-8">
            {/* Skills */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Technical Skills
                </h4>

                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <skill.icon className="h-4 w-4 text-primary" />
                          <span className="font-medium text-card-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Certifications
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="justify-start p-3 text-sm">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
