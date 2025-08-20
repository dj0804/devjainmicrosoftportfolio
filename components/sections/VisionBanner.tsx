interface VisionBannerProps {
  isDark: boolean
}

export default function VisionBanner({ isDark }: VisionBannerProps) {
  return (
    <section className={`py-12 px-6 ${isDark ? 'bg-microsoft-gray-800' : 'bg-microsoft-gray-50'}`}>
      <div className="max-w-5xl mx-auto text-center">
        <p className={`text-xl lg:text-2xl font-light ${isDark ? 'text-microsoft-gray-300' : 'text-microsoft-gray-600'}`}>
          Empowering organizations with AI, data, and cloud-ready solutions — the way I build, learn, and innovate.
        </p>
      </div>
    </section>
  )
} 