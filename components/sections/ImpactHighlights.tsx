'use client'

import { motion, useInView } from 'framer-motion'
import { Cpu, Award, Briefcase } from 'lucide-react'
import { useRef } from 'react'

interface ImpactHighlightsProps {
  isDark: boolean
}

export default function ImpactHighlights({ isDark }: ImpactHighlightsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const ImpactHighlight = ({ 
    icon: Icon, 
    text, 
    color, 
    delay 
  }: {
    icon: any
    text: string
    color: string
    delay: number
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`flex items-center gap-4 p-4 rounded-lg ${isDark ? 'bg-microsoft-gray-800' : 'bg-white'} border ${isDark ? 'border-microsoft-gray-700' : 'border-transparent'} microsoft-shadow`}
    >
      <div className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center ${color}/10`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <p className={`font-medium ${isDark ? 'text-white' : 'text-microsoft-gray-600'}`}>{text}</p>
    </motion.div>
  )

  return (
    <section ref={ref} className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <ImpactHighlight 
            icon={Cpu} 
            text="5+ Intelligent Systems built" 
            color="text-microsoft-blue" 
            delay={0} 
          />
          <ImpactHighlight 
            icon={Award} 
            text="Hackathon Finalist at Yantra 2025" 
            color="text-microsoft-green" 
            delay={0.1} 
          />
          <ImpactHighlight 
            icon={Briefcase} 
            text="AI & ML Internship — Real-world deployment experience" 
            color="text-microsoft-orange" 
            delay={0.2} 
          />
        </div>
      </div>
    </section>
  )
} 