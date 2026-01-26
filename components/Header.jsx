'use client'
import { useState, useEffect } from 'react'
import { Gravitas_One, Momo_Signature } from 'next/font/google'

const gravitas_One = Gravitas_One({ weight: '400', subsets: ['latin'] })
const momo_signature = Momo_Signature({ weight: '400', subsets: ['latin'] })

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        // Vérifie si on a scrollé plus de 100px
        setIsScrolled(window.scrollY > 1)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 flex justify-between items-center p-4"> 
            <div className={`${gravitas_One.className} bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent text-xl`}>
                💻 DevFor<span className={`${momo_signature.className} `}>All</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium">
                <a href="#hero" className="text-slate-600 hover:text-blue-600 transition">Accueil</a>
                {/* <a href="#expertise" className="text-slate-600 hover:text-blue-600 transition">Expertise</a>
                <a href="#portfolio" className="text-slate-600 hover:text-blue-600 transition">Portfolio</a> */}
                <a href="#blog" className="text-slate-600 hover:text-blue-600 transition">Blog</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                Me Contacter
            </button>
        </nav>
    )
}
