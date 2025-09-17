import { Cloud, Heart, Mail } from "lucide-react"
import dynamic from "next/dynamic"

const SocialIcon = dynamic(() => import("react-social-icons").then(mod => ({ default: mod.SocialIcon })), {
  ssr: false,
  loading: () => <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
})

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cloud className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">kaix.me</span>
            </div>
            <p className="text-background/80 text-sm font-[family-name:var(--font-manrope)] leading-relaxed">
              Empowering businesses with scalable cloud solutions and infrastructure expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-1 text-background/80 font-[family-name:var(--font-manrope)] text-sm">
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-primary transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Connect With Me</h4>
            <div className="flex gap-3">
              <SocialIcon 
                url="https://www.linkedin.com/in/juay-kai-xun" 
                network="linkedin" 
                bgColor="black" 
                fgColor="white" 
                borderRadius="0" 
                className="h-5 w-5" 
              />
              <SocialIcon 
                url="https://github.com/Kaixun123" 
                network="github" 
                bgColor="black" 
                fgColor="white" 
                borderRadius="0" 
                className="h-5 w-5" 
              />
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-6 pt-4 text-center">
          <p className="text-background/60 font-[family-name:var(--font-manrope)] flex items-center justify-center gap-2 text-sm">
            Made with <Heart className="h-4 w-4 text-primary" /> by kaix.me
          </p>
          <p className="text-background/60 text-xs mt-1 font-[family-name:var(--font-manrope)]">
            © 2025 kaix.me. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
