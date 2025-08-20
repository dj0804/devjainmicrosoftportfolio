'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'

interface NavigationProps {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

export default function Navigation({ isDark, setIsDark }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('hero')
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const microsoftRef = useRef(null)
  const contactRef = useRef(null)

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'projects', ref: projectsRef },
        { id: 'skills', ref: skillsRef },
        { id: 'education', ref: educationRef },
        { id: 'microsoft', ref: microsoftRef },
        { id: 'contact', ref: contactRef }
      ]

      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const NavItem = ({ id, label, sectionRef }: { id: string; label: string; sectionRef: React.RefObject<HTMLElement> }) => (
    <button
      onClick={() => scrollToSection(sectionRef)}
      className={`px-4 py-2 text-sm font-normal transition-all duration-200 hover:text-microsoft-blue relative ${
        activeSection === id
          ? 'text-microsoft-blue'
          : isDark ? 'text-white' : 'text-microsoft-gray-600'
      }`}
    >
      {label}
      {activeSection === id && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-microsoft-blue"></div>
      )}
    </button>
  )

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDark
        ? 'bg-microsoft-gray-900/95 border-b border-microsoft-gray-700'
        : 'bg-white/95 border-b border-microsoft-gray-200'
    } backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-microsoft-gray-600'}`}>
              Dev Jain
            </div>
            
            <div className="hidden lg:flex items-center">
              <NavItem id="about" label="About" sectionRef={aboutRef} />
              <NavItem id="projects" label="Projects" sectionRef={projectsRef} />
              <NavItem id="skills" label="Skills" sectionRef={skillsRef} />
              <NavItem id="education" label="Education" sectionRef={educationRef} />
              <NavItem id="microsoft" label="Why Microsoft" sectionRef={microsoftRef} />
              <NavItem id="contact" label="Contact" sectionRef={contactRef} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection(contactRef)}
              className="hidden md:flex bg-microsoft-blue hover:bg-microsoft-blue-dark text-white px-6 py-2 font-medium"
            >
              Connect
            </Button>
            
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-md transition-colors ${
                isDark ? 'hover:bg-microsoft-gray-800' : 'hover:bg-microsoft-gray-100'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 