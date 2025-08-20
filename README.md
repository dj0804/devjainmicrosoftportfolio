# Dev Jain - Portfolio Website

A modern, Microsoft-styled portfolio website built with Next.js, React, and Tailwind CSS. This portfolio showcases Dev Jain's skills, projects, and experience in AI, ML, and cloud computing.

## 🚀 Features

- **Microsoft Design System**: Authentic Microsoft UI/UX with proper color schemes and typography
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Scroll Spy Navigation**: Active section highlighting in navigation
- **Modern Tech Stack**: Built with Next.js 14, React 18, and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full TypeScript support
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
dev-jain-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, Card, Badge)
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── lib/                  # Utility functions
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dev-jain-portfolio.git
cd dev-jain-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The project uses Microsoft's design system colors defined in `tailwind.config.js`:

- Microsoft Blue: `#0078D4`
- Microsoft Green: `#107C10`
- Microsoft Orange: `#D83B01`
- Microsoft Yellow: `#FFB900`

### Content
Update the content in the respective component files:
- Personal information: `app/page.tsx`
- Projects: `components/sections/Projects.tsx`
- Skills: `components/sections/Skills.tsx`
- Education: `components/sections/Education.tsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project is compatible with any static hosting platform.

## 📱 Sections

1. **Hero Section** - Introduction and call-to-action
2. **About** - Personal background and skills overview
3. **Projects** - Showcase of work and experience
4. **Skills** - Technical skills and expertise
5. **Education** - Academic background
6. **Why Microsoft** - Motivation and alignment
7. **Contact** - Contact information and social links

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Dev Jain**
- LinkedIn: [Dev Jain](https://www.linkedin.com/in/dev-jain-23bbs0145/)
- GitHub: [dj0804](https://github.com/dj0804)
- Email: devv.jain2005@gmail.com

## 🙏 Acknowledgments

- Microsoft Design System for inspiration
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
