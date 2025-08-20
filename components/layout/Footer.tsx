import { Linkedin, Github, Mail } from 'lucide-react'

interface FooterProps {
  isDark: boolean
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer className={`py-12 ${
      isDark ? 'bg-microsoft-gray-950' : 'bg-microsoft-gray-600'
    }`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-4">
          <p className="text-sm text-microsoft-gray-300">
            © 2025 Dev Jain
          </p>
          
          <div className="flex justify-center items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/dev-jain-23bbs0145/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-microsoft-gray-300 hover:text-microsoft-blue transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a 
              href="https://github.com/dj0804" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-microsoft-gray-300 hover:text-microsoft-blue transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a 
              href="mailto:devv.jain2005@gmail.com"
              className="text-microsoft-gray-300 hover:text-microsoft-blue transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 