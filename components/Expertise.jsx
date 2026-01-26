'use client'

import { Gravitas_One, Momo_Signature } from 'next/font/google'
import StackIcon from 'tech-stack-icons'

const gravitas_One = Gravitas_One({ weight: '400', subsets: ['latin'] })
const momo_signature = Momo_Signature({ weight: '400', subsets: ['latin'] })

export default function Expertise() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20 px-5 bg-cream-50">
      {/* Animated Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 h-4/5 opacity-9 overflow-hidden z-10 flex items-center justify-center">
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .stack-carousel {
            animation: scroll-left 60s linear infinite;
          }
          .stack-carousel:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="stack-carousel flex gap-32 w-fit p-0">
          {[
            { name: "react", label: "React" },
            { name: "laravel", label: "Laravel" },
            { name: "nodejs", label: "Node.js" },
            { name: "php", label: "PHP" },
            { name: "js", label: "JavaScript" },
            { name: "github", label: "GitHub" },
            { name: "docker", label: "Docker" },
            { name: "git", label: "Git" },
            { name: "typescript", label: "TypeScript" },
            { name: "nextjs", label: "Next.js" },
            { name: "mysql", label: "MySql" },
            { name: "hono", label: "Hono" },
            { name: "react", label: "React" },
            { name: "laravel", label: "Laravel" },
            { name: "nodejs", label: "Node.js" },
            { name: "php", label: "PHP" },
            { name: "js", label: "JavaScript" },
            { name: "github", label: "GitHub" },
            { name: "docker", label: "Docker" },
            { name: "git", label: "Git" },
            { name: "typescript", label: "TypeScript" },
            { name: "nextjs", label: "Next.js" },
            { name: "mysql", label: "MySql" },
            { name: "hono", label: "Hono" },
          ].map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-4 min-w-fit text-center text-xs text-slate-500">
              <div className="w-60 h-60 flex items-center justify-center bg-teal-500 bg-opacity-5 rounded-2xl transition-all duration-550">
                <StackIcon name={tech.name} className="w-50 h-50" />
              </div>
              <span>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl w-full">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            Mon Expertise
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Spécialisé en Full-Stack avec focus sur Frontend moderne et performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Card */}
          <div className="group bg-gradient-to-br from-cream-100 to-gray-100 border border-brown-600 border-opacity-12 rounded-2xl p-10 transition-all duration-250 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-250"></div>
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Frontend</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Création d'interfaces modernes et performantes avec les dernières technologies
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="react" className="w-3 h-3" /> React
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="typescript" className="w-3 h-3" /> TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="tailwindcss" className="w-3 h-3" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="shadcnui" className="w-3 h-3" />shadcn/ui
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                Motion
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="bootstrap5" className="w-3 h-3" /> Bootstrap
              </span>
            </div>
          </div>

          {/* Backend Card */}
          <div className="group bg-gradient-to-br from-cream-100 to-gray-100 border border-brown-600 border-opacity-12 rounded-2xl p-10 transition-all duration-250 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-250"></div>
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Backend</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              APIs robustes et scalables avec architecture clean et best practices
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="laravel" className="w-3 h-3" /> Laravel
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="nodejs" className="w-3 h-3" /> Node.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="nextjs" className="w-3 h-3" /> Next.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="mysql" className="w-3 h-3" /> MySQL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="mysql" className="w-3 h-3" /> SQLite
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                REST APIs
              </span>
            </div>
          </div>

          {/* DevOps & Scaling Card */}
          <div className="group bg-gradient-to-br from-cream-100 to-gray-100 border border-brown-600 border-opacity-12 rounded-2xl p-10 transition-all duration-250 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-250"></div>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">DevOps & Scaling</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Déploiement optimisé et infrastructure moderne pour applications haute performance
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="docker" className="w-3 h-3" /> Docker
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="vercel" className="w-3 h-3" /> Vercel
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="flyio" className="w-3 h-3" />Fly.io
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="github" className="w-3 h-3" /> GitHub Actions
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                Monitoring
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                Performance
              </span>
            </div>
          </div>

          {/* Content & Streaming Card */}
          <div className="group bg-gradient-to-br from-cream-100 to-gray-100 border border-brown-600 border-opacity-12 rounded-2xl p-10 transition-all duration-250 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-250"></div>
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Content & Streaming</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Création de contenu technique sur Twitch, TikTok et Instagram
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                Twitch Streaming
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                OBS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                Video Editing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                Social Media
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                Community Mgmt
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                AI Tools
              </span>
            </div>
          </div>

          {/* Mobile Development Card */}
          <div className="group bg-gradient-to-br from-cream-100 to-gray-100 border border-brown-600 border-opacity-12 rounded-2xl p-10 transition-all duration-250 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-250"></div>
            <div className="text-4xl mb-4">📲</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Mobile Development</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Applications mobiles cross-platform avec React Native et Expo
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="react" className="w-3 h-3" /> React Native
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="expo" className="w-3 h-3" /> Expo
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                Cross-Platform
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                Native APIs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                📈 Performance
              </span>
            </div>
          </div>

          {/* Design & UI Card */}
          <div className="group bg-gradient-to-br from-cream-100 to-gray-100 border border-brown-600 border-opacity-12 rounded-2xl p-10 transition-all duration-250 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-250"></div>
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Design & UI/UX</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Interfaces accessibles et design systems modernes
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                📱 Responsive Design
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                ♿ Accessibility
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                Design Systems
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                <StackIcon name="figma" className="w-3 h-3" /> Figma
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-20 rounded-full text-xs font-medium text-white hover:bg-opacity-15 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer">
                CSS Avancé
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .stack-carousel {
          animation: scroll-left 60s linear infinite;
        }
        .stack-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}