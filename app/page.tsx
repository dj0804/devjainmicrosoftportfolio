'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import VisionBanner from '@/components/sections/VisionBanner'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ImpactHighlights from '@/components/sections/ImpactHighlights'
import SkillsSection from '@/components/sections/SkillsSection'
import EducationSection from '@/components/sections/EducationSection'
import MicrosoftSection from '@/components/sections/MicrosoftSection'
import Footer from '@/components/layout/Footer'

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)

  // Theme toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-microsoft-gray-900' : 'bg-white'
    }`}>
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      <HeroSection isDark={isDark} />
      <VisionBanner isDark={isDark} />
      <AboutSection isDark={isDark} />
      <ProjectsSection isDark={isDark} />
      <ImpactHighlights isDark={isDark} />
      <SkillsSection isDark={isDark} />
      <EducationSection isDark={isDark} />
      <MicrosoftSection isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  )
} 