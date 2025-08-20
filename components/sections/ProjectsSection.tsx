'use client'

import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Truck, Recycle, Lightbulb, TrendingUp, ChevronRight } from 'lucide-react'

interface ProjectsSectionProps {
  isDark: boolean
}

export default function ProjectsSection({ isDark }: ProjectsSectionProps) {
  const projectsInView = useInView({ once: true, margin: "-100px" })

  const ProjectCard = ({ 
    title, 
    timeframe, 
    description, 
    kpi, 
    tech, 
    icon: Icon, 
    delay = 0 
  }: {
    title: string
    timeframe: string
    description: string
    kpi?: string
    tech: string[]
    icon: any
    delay?: number
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={projectsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <Card className={`h-full transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl group cursor-pointer ${
        isDark
          ? 'bg-microsoft-gray-800 border-microsoft-gray-700 hover:bg-microsoft-gray-700'
          : 'bg-white border-microsoft-gray-200 hover:border-microsoft-blue hover:bg-microsoft-gray-50'
      }`}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-microsoft-blue/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-microsoft-blue" />
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded ${
              isDark ? 'bg-microsoft-gray-900 text-microsoft-gray-300' : 'bg-microsoft-gray-100 text-microsoft-gray-500'
            }`}>
              {timeframe}
            </span>
          </div>
          <CardTitle className={`text-xl font-semibold leading-tight ${
            isDark ? 'text-white' : 'text-microsoft-gray-600'
          }`}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className={`text-sm leading-relaxed ${
            isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'
          }`}>
            {description}
          </p>
          
          {kpi && (
            <div className="flex items-center gap-2 text-xs font-medium text-microsoft-green">
              <TrendingUp className="w-3 h-3" />
              {kpi}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {tech.slice(0, 3).map((t, i) => (
              <Badge
                key={i}
                variant="outline"
                className={`text-xs px-2 py-0.5 ${
                  isDark
                    ? 'bg-transparent text-microsoft-gray-300 border-microsoft-gray-700'
                    : 'bg-transparent text-microsoft-gray-600 border-microsoft-gray-200'
                }`}
              >
                {t}
              </Badge>
            ))}
            {tech.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-0.5 text-microsoft-gray-500">
                +{tech.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex items-center text-microsoft-blue text-sm font-medium group-hover:gap-2 transition-all duration-200">
            <span>Learn more</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <section className={`py-20 lg:py-24 px-6 ${
      isDark ? 'bg-microsoft-gray-800/30' : 'bg-microsoft-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl lg:text-5xl font-light mb-6 ${
            isDark ? 'text-white' : 'text-microsoft-gray-600'
          }`}>
            Projects & Experience
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'
          }`}>
            Building innovative solutions that align with Microsoft&apos;s mission to empower productivity and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <ProjectCard
            title="Gen AI & ML Internship — Minfy"
            timeframe="May–Jul 2025"
            description="Worked with cloud computing (AWS), advanced ML, time-series forecasting, computer vision, agentic AI. Contributed to enterprise efforts via data cleaning, preprocessing, and insight generation."
            kpi="Data processed: 100k+ rows (demo), Model iterations: 20+ (demo)"
            tech={["AWS", "Python", "ML", "Computer Vision", "Time Series", "Agentic AI"]}
            icon={Brain}
            delay={0}
          />

          <ProjectCard
            title="DELIVITERY — Campus Delivery System"
            timeframe="Nov–Dec 2024"
            description="Built a logistics workflow for campus deliveries with pickup/drop flows and coordination. Led collaboration and streamlined user flows to boost reliability and efficiency."
            kpi="Avg. turnaround ↓ (demo)"
            tech={["React", "Node.js", "MongoDB", "Logistics", "UI/UX"]}
            icon={Truck}
            delay={0.1}
          />

          <ProjectCard
            title="Releaf — Waste Management Logistics"
            timeframe="Jan–Feb 2025"
            description="Designed data flows for driver, official, and processing unit registrations. Sustainability-focused operations with comprehensive role-based workflows."
            tech={["React", "Database Design", "UI/UX", "Sustainability"]}
            icon={Recycle}
            delay={0.2}
          />

          <ProjectCard
            title="Yantra Central Hackathon — VIT"
            timeframe="Feb 2025"
            description="Ideated and pitched an AI-powered solution with comprehensive UI/UX prototype. Focused on user-centric design and rapid prototyping methodologies."
            tech={["AI", "UI/UX", "Prototyping", "Figma", "Innovation"]}
            icon={Lightbulb}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
} 