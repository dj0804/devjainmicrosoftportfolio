'use client'

import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Brain, Users, TrendingUp, ChevronRight } from 'lucide-react'

interface MicrosoftSectionProps {
  isDark: boolean
}

export default function MicrosoftSection({ isDark }: MicrosoftSectionProps) {
  const microsoftInView = useInView({ once: true, margin: "-100px" })

  return (
    <section className={`py-20 lg:py-24 px-6 ${
      isDark ? 'bg-microsoft-gray-800/30' : 'bg-microsoft-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={microsoftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className={`text-4xl lg:text-5xl font-light mb-8 ${
              isDark ? 'text-white' : 'text-microsoft-gray-600'
            }`}>
              Why Microsoft?
            </h2>
            
            <p className={`text-lg leading-relaxed mb-8 ${
              isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'
            }`}>
              Microsoft represents the intersection of innovation, inclusivity, and impact. With experience in AI, ML, and cloud technologies, I see Microsoft as the perfect environment to grow. I am inspired by Microsoft&apos;s AI (Copilot, Azure AI), cloud innovation, and sustainability. My goal is to align my journey with Microsoft&apos;s mission to empower every person and every organization on the planet to achieve more.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-microsoft-blue hover:bg-microsoft-blue-dark text-white px-8 py-3 font-semibold"
            >
              <a href="mailto:devv.jain2005@gmail.com">
                Learn more about my journey
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={microsoftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 gap-6"
          >
            <div className={`p-6 rounded-lg ${
              isDark ? 'bg-microsoft-gray-800' : 'bg-white'
            } border ${
              isDark ? 'border-microsoft-gray-700' : 'border-microsoft-gray-200'
            } microsoft-shadow`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-microsoft-blue/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-microsoft-blue" />
                </div>
                <div>
                  <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-microsoft-gray-600'}`}>
                    Innovation
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'}`}>
                    Pushing boundaries in AI and cloud computing
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg ${
              isDark ? 'bg-microsoft-gray-800' : 'bg-white'
            } border ${
              isDark ? 'border-microsoft-gray-700' : 'border-microsoft-gray-200'
            } microsoft-shadow`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-microsoft-green/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-microsoft-green" />
                </div>
                <div>
                  <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-microsoft-gray-600'}`}>
                    Inclusivity
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'}`}>
                    Empowering diverse communities globally
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg ${
              isDark ? 'bg-microsoft-gray-800' : 'bg-white'
            } border ${
              isDark ? 'border-microsoft-gray-700' : 'border-microsoft-gray-200'
            } microsoft-shadow`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-microsoft-orange/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-microsoft-orange" />
                </div>
                <div>
                  <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-microsoft-gray-600'}`}>
                    Impact
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'}`}>
                    Creating solutions that transform lives
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 