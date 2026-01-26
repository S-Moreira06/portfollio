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
        <nav className="flex justify-between bg-violet-600 p-2 sticky top-0"> 
            <div className={`${gravitas_One.className} text-center whitespace-nowrap transition-all duration-1000 ${isScrolled ? 'flex-1' : 'flex-none'}`}>
                DevFor<span className={`${momo_signature.className} `}>All</span>
            </div>
            <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
                <ul className="flex justify-between">
                    <li className="px-2">Acceuil</li>
                    <li className="px-2">Contact</li>
                </ul>
            </div>
        </nav>
    )
}
