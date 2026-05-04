import dynamic from "next/dynamic"

const SocialIcon = dynamic(
  () => import("react-social-icons").then((mod) => ({ default: mod.SocialIcon })),
  {
    ssr: false,
    loading: () => <div className="h-9 w-9 animate-pulse" style={{ background: "#2b2921" }} />,
  }
)

const NAV_LINKS = [
  { label: "Projects",     href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "About",        href: "#about" },
  { label: "Contact",      href: "#contact" },
]

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8" style={{ background: "#0e0d0b", borderTop: "1px solid #2b2921" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 900,
                fontStyle: "italic",
                textTransform: "uppercase",
                fontSize: "2rem",
                color: "#f2ede4",
                lineHeight: 1,
              }}
            >
              KX<span style={{ color: "#cafe00" }}>.</span>
            </p>
            <p
              className="text-[#7a7062] leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-lora)", fontSize: "0.875rem" }}
            >
              Building scalable cloud infrastructure and AI-powered solutions that help businesses grow.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-label mb-5">Quick Links</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-label hover:text-[#cafe00] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-label mb-5">Connect</p>
            <div className="flex gap-3">
              <SocialIcon
                url="https://www.linkedin.com/in/juay-kai-xun"
                network="linkedin"
                bgColor="#cafe00"
                fgColor="#0e0d0b"
                style={{ height: 36, width: 36, borderRadius: "0px" }}
              />
              <SocialIcon
                url="https://github.com/Kaixun123"
                network="github"
                bgColor="#2b2921"
                fgColor="#f2ede4"
                style={{ height: 36, width: 36, borderRadius: "0px" }}
              />
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "#2b2921" }}>
          <p className="font-label">© 2025 Juay Kai Xun</p>
          <p className="font-label">Built with Next.js · Deployed on Firebase</p>
        </div>
      </div>
    </footer>
  )
}
