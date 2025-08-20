'use client'

import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { useRef } from 'react'

interface SkillsSectionProps {
  isDark: boolean
}

export default function SkillsSection({ isDark }: SkillsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const SkillCategory = ({ 
    title, 
    skills, 
    delay = 0 
  }: {
    title: string
    skills: string[]
    delay?: number
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`p-6 rounded-lg ${
        isDark ? 'bg-microsoft-gray-800' : 'bg-microsoft-gray-50'
      } border ${
        isDark ? 'border-microsoft-gray-700' : 'border-microsoft-gray-200'
      }`}
    >
      <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-microsoft-gray-600'}`}>
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <Badge
            key={i}
            className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 hover:scale-105 ${
              isDark
                ? 'bg-microsoft-gray-900 text-microsoft-gray-300 border-microsoft-gray-700'
                : 'bg-white text-microsoft-gray-600 border-microsoft-gray-200 hover:border-microsoft-blue'
            }`}
            variant="outline"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section ref={ref} className={`py-20 lg:py-24 px-6 ${
      isDark ? 'bg-microsoft-gray-800/30' : 'bg-microsoft-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl lg:text-5xl font-light mb-6 ${
            isDark ? 'text-white' : 'text-microsoft-gray-600'
          }`}>
            Skills & Expertise
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'
          }`}>
            A comprehensive toolkit for building modern, cloud-ready applications and AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory
            title="Programming Languages"
            skills={['C', 'C++', 'Python', 'R']}
            delay={0}
          />
          
          <SkillCategory
            title="Cloud & Development Tools"
            skills={['AWS', 'Git', 'Figma', 'Canva']}
            delay={0.1}
          />
          
          <SkillCategory
            title="AI & Machine Learning"
            skills={['Time Series Forecasting', 'Computer Vision', 'Agentic AI']}
            delay={0.2}
          />
          
          <SkillCategory
            title="Professional Skills"
            skills={['Problem Solving', 'Team Management']}
            delay={0.3}
          />
          
          <SkillCategory
            title="Languages"
            skills={['English', 'Hindi', 'Spanish']}
            delay={0.4}
          />
          
          <SkillCategory
            title="Focus Areas"
            skills={['Productivity Solutions', 'Cloud Computing', 'AI Innovation']}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  )
} 