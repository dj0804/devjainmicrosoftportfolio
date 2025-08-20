'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Linkedin, Github, Mail } from 'lucide-react'

interface HeroSectionProps {
  isDark: boolean
}

export default function HeroSection({ isDark }: HeroSectionProps) {
  return (
    <section className={`pt-24 pb-16 ${isDark ? 'hero-bg-dark' : 'hero-bg'} text-white overflow-hidden`}>
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight">
            Dev Jain
          </h1>
          
          <h2 className="text-xl lg:text-2xl mb-6 font-light opacity-90">
            Computer Science student | Future Microsoft Innovator | Building intelligent, cloud-ready solutions.
          </h2>
          
          <p className="text-lg mb-10 opacity-80 leading-relaxed">
            Exploring AI, cloud, and data-driven systems to empower productivity and innovation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-microsoft-blue hover:bg-microsoft-gray-100 px-8 py-3 font-semibold"
            >
              <a href="https://www.linkedin.com/in/dev-jain-23bbs0145/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-microsoft-blue px-8 py-3 font-semibold"
            >
              <a href="https://github.com/dj0804" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-microsoft-blue px-8 py-3 font-semibold"
            >
              <a href="mailto:devv.jain2005@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 