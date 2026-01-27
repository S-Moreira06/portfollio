'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react' 
import { Gravitas_One, Momo_Signature } from 'next/font/google'
import Link from 'next/link'

const gravitas_One = Gravitas_One({ weight: '400', subsets: ['latin'] })
const momo_signature = Momo_Signature({ weight: '400', subsets: ['latin'] })

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) 
    useEffect(() => {
        const handleScroll = () => {
        // Vérifie si on a scrollé plus de 10px
        setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-between items-center p-4 ${isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200 lg:px-[20%]' 
            : 'bg-transparent'}  `}> 
            <Link href="/" className={`${gravitas_One.className} bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent text-2xl hover:scale-105 transition-transform duration-300`}>
                💻 DevFor<span className={`${momo_signature.className} `}>All</span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-medium">
                <Link href="/" className="text-slate-600 hover:text-blue-600 transition">Accueil</Link>
                {/* <a href="#expertise" className="text-slate-600 hover:text-blue-600 transition">Expertise</a>
                <a href="#portfolio" className="text-slate-600 hover:text-blue-600 transition">Portfolio</a> */}
                <Link href="/blog" className="text-slate-600 hover:text-blue-600 transition">Blog</Link>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium transition-all duration-300  hover:scale-105 hover:shadow-md " >
                Me Contacter
            </button>
        </nav>
    )
}
