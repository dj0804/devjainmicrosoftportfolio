'use client'

import { motion, useInView } from 'framer-motion'
import { Cloud, Brain, BarChart3, Users, Lightbulb, Code } from 'lucide-react'

interface AboutSectionProps {
  isDark: boolean
}

export default function AboutSection({ isDark }: AboutSectionProps) {
  const aboutRef = useInView({ once: true, margin: "-100px" })

  const SkillPillar = ({ icon: Icon, title, description, delay }: { 
    icon: any; 
    title: string; 
    description: string; 
    delay: number 
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={aboutRef ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`text-center p-4 cursor-pointer group ${isDark ? 'hover:bg-microsoft-gray-800' : 'hover:bg-microsoft-gray-100'} rounded-lg transition-colors`}
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-microsoft-blue/10 transition-transform group-hover:scale-110">
          <Icon className="w-8 h-8 text-microsoft-blue" />
        </div>
      </div>
      <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-microsoft-gray-600'}`}>{title}</h3>
      <p className={`text-sm ${isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'}`}>{description}</p>
    </motion.div>
  )

  return (
    <section className="py-20 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={aboutRef ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className={`text-4xl lg:text-5xl font-light mb-8 ${
              isDark ? 'text-white' : 'text-microsoft-gray-600'
            }`}>
              About Me
            </h2>
            
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'
            }`}>
              I am a motivated and detail-oriented Computer Science student at VIT Vellore, with a strong foundation in software development, data analysis, and collaboration. My passion lies in applying AI, machine learning, and cloud technologies to create solutions that drive productivity and sustainability. Inspired by Microsoft&apos;s mission, I aim to empower people and organizations to achieve more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={aboutRef ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-6 gap-6">
              <SkillPillar icon={Cloud} title="Cloud" description="AWS, deployment" delay={0} />
              <SkillPillar icon={Brain} title="AI/ML" description="CV, Agents" delay={0.1} />
              <SkillPillar icon={BarChart3} title="Data" description="Forecasting" delay={0.2} />
              <SkillPillar icon={Users} title="Teamwork" description="Collaboration" delay={0.3} />
              <SkillPillar icon={Lightbulb} title="Innovation" description="Problem-solving" delay={0.4} />
              <SkillPillar icon={Code} title="Development" description="Python, C++" delay={0.5} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 