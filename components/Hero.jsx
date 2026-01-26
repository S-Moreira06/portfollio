import { Gravitas_One , Momo_Signature} from "next/font/google";
import Image from "next/image";
import HeroImage from '../public/hero2.png';
const gravitas_One = Gravitas_One({
  weight: "400",
  subsets: ['latin'],
})
const momo_signature = Momo_Signature({
  weight: "400",
  subsets: ['latin'],
})

export default function Hero() {
    return (
        <section id="hero" className="hero-gradient text-white pt-32 pb-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 left-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                {/* Texte / Gauche */}
                <div className="space-y-6">
                    <h1 className="text-5xl font-bold leading-tight">Full-Stack Developer <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">& Content Creator</span></h1>
                    <p className={`${gravitas_One.className} text-xl text-blue-100 leading-relaxed`}>
                        Je crée des applications web modernes, scalables et magnifiquement designées. Disponible pour <span className="font-semibold">freelance</span>, <span className="font-semibold">CDI</span>, et <span className="font-semibold">collaborations</span>.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">Voir mon portfollio</button>
                        <button className="border-2 border-blue-300 text-blue-100 hover:bg-blue-500/10 px-8 py-3 rounded-lg font-semibold transition">Lire le Blog</button>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-blue-200 hover:text-white transition">Linkedin →</p>
                        <p className="text-blue-200 hover:text-white transition">GitHub →</p>
                    </div>
                </div>
                {/* Image / Droite */}
                <div className="block relative">
                    <Image src={HeroImage} alt="Illstration d'un dev" height={500} className="rounded-2xl floating shadow-2xl"/>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-2xl opacity-50"></div>
                </div>
            </div>
        </section>
    );
}
