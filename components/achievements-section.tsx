import { AnimateIn } from "@/components/animate-in"

const achievements = [
  {
    year: "2025",
    title: "AWS SysOps Administrator Associate",
    description:
      "AWS Certified SysOps Administrator – Associate: Skilled in monitoring, maintaining, and securing AWS workloads.",
    category: "Certification",
  },
  {
    year: "2024",
    title: "UBS SMU-X IT Solution Architecture Award",
    description:
      "Top team recognition in the CS301 IT Solution Architecture course at SMU, sponsored by UBS.",
    category: "Award",
  },
  {
    year: "2024",
    title: "AWS Solutions Architect Associate",
    description:
      "Demonstrates ability to design, implement, and optimize secure, cost-efficient, and scalable cloud solutions on AWS.",
    category: "Certification",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-28 relative" style={{ background: "#161410" }}>
      {/* Thin top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#2b2921" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#2b2921" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <AnimateIn direction="up">
          <div className="flex items-end justify-between mb-16 pb-6 border-b" style={{ borderColor: "#2b2921" }}>
            <div>
              <p className="font-label mb-3">[ 02 ] — Recognition</p>
              <h2
                className="font-display text-[#f2ede4]"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
              >
                Key
                <br />
                Achievements
              </h2>
            </div>
          </div>
        </AnimateIn>

        {/* Achievement rows */}
        <div>
          {achievements.map((item, index) => (
            <AnimateIn key={index} direction="up" delay={index * 80}>
              <div
                className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 py-8 border-b"
                style={{ borderColor: "#2b2921" }}
              >
                {/* Year + category */}
                <div className="flex md:flex-col gap-3 md:gap-2 items-start md:items-start pt-1">
                  <span
                    style={{
                      fontFamily: "var(--font-barlow)",
                      fontWeight: 900,
                      fontStyle: "italic",
                      fontSize: "2.5rem",
                      color: "#cafe00",
                      lineHeight: 1,
                    }}
                  >
                    {item.year}
                  </span>
                  <span className="font-label mt-1">{item.category}</span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-[#f2ede4] mb-3"
                    style={{
                      fontFamily: "var(--font-barlow)",
                      fontWeight: 700,
                      fontStyle: "italic",
                      textTransform: "uppercase",
                      fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#7a7062] leading-relaxed"
                    style={{ fontFamily: "var(--font-lora)", fontSize: "0.95rem" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
