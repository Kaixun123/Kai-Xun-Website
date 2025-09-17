import { Card, CardContent } from "@/components/ui/card"
import { Award, Trophy, Users, Zap, Shield } from "lucide-react"

const achievements = [
  {
    year: "2025",
    title: "AWS SysOps Administrator Associate",
    description:
      "AWS Certified SysOps Administrator – Associate: Skilled in monitoring, maintaining, and securing AWS workloads.",
    icon: Award,
    category: "Certification",
  },
  {
    year: "2024",
    title: "UBS SMU-X IT Solution Architecture Award for CS301 - IT solutions Architecture",
    description:
      "The UBS SMU-X IT Solution Architecture Award is a recognition awarded to top teams in the CS301 IT Solution Architecture course at SMU, sponsored by UBS.",
    icon: Trophy,
    category: "Certification",
  },
  {
    year: "2024",
    title: "AWS Solutions Architect Associate",
    description:
      "Achieved AWS Certified Solutions Architect – Associate, demonstrating ability to design, implement, and optimize secure, cost-efficient, and scalable cloud solutions on AWS",
    icon: Award,
    category: "Certification",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Key <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance font-[family-name:var(--font-manrope)]">
            Milestones and recognitions that showcase my expertise and commitment to excellence in cloud infrastructure.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-2 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <achievement.icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                              {achievement.year}
                            </span>
                            <span className="text-xs text-muted-foreground uppercase tracking-wide">
                              {achievement.category}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-card-foreground mb-2">{achievement.title}</h3>

                          <p className="text-muted-foreground font-[family-name:var(--font-manrope)]">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
