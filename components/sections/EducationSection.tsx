'use client'

import { motion, useInView } from 'framer-motion'
import { Award } from 'lucide-react'

interface EducationSectionProps {
  isDark: boolean
}

export default function EducationSection({ isDark }: EducationSectionProps) {
  const educationInView = useInView({ once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={educationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl lg:text-5xl font-light mb-6 ${
            isDark ? 'text-white' : 'text-microsoft-gray-600'
          }`}>
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={educationInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
            className={`p-8 rounded-lg ${
              isDark ? 'bg-microsoft-gray-800' : 'bg-white'
            } border ${
              isDark ? 'border-microsoft-gray-700' : 'border-microsoft-gray-200'
            } microsoft-shadow`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-microsoft-blue flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-microsoft-gray-600'}`}>
                  VIT Vellore
                </h3>
                <p className={`text-lg mb-1 ${isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'}`}>
                  B.Tech in Computer Science with Business Systems
                </p>
                <p className={`text-sm ${isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'}`}>
                  Expected 2027
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={educationInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`p-6 rounded-lg ${
              isDark ? 'bg-microsoft-gray-800' : 'bg-white'
            } border ${
              isDark ? 'border-microsoft-gray-700' : 'border-microsoft-gray-200'
            } microsoft-shadow`}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-microsoft-green/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-microsoft-green" />
              </div>
              <div className="flex-1">
                <h4 className={`text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-microsoft-gray-600'}`}>
                  DAV Public School, Gurgaon
                </h4>
                <p className={`text-sm ${isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'}`}>
                  Secondary Education
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={educationInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-6 rounded-lg ${
              isDark ? 'bg-microsoft-gray-800' : 'bg-white'
            } border ${
              isDark ? 'border-microsoft-gray-700' : 'border-microsoft-gray-200'
            } microsoft-shadow`}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-microsoft-yellow/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-microsoft-yellow" />
              </div>
              <div className="flex-1">
                <h4 className={`text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-microsoft-gray-600'}`}>
                  Glorius Public School, Delhi
                </h4>
                <p className={`text-sm ${isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-500'}`}>
                  Higher Secondary Education
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 