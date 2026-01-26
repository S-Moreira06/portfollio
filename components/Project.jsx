import { Joti_One } from "next/font/google";
import Image from "next/image";
import ImgLili from '../public/lapetitelili.svg';


const joti = Joti_One({
  weight: "400",
  subsets: ['latin'],
})
export default function Project () {
    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Projets Récents</h2>
                    <p className="text-lg text-slate-600">Sélection de mes travaux les plus significatifs</p>
                </div>
                
                {/* <!-- Projet 1 --> */}
                <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl h-80 flex items-center justify-center text-white text-6xl font-bold">
                        🛒 <span className={joti.className}>Piwee!</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Piwee</h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Plateforme e-commerce fictive de vente de vétements. Ce projet a été réaliser dans le cadre de ma soutenance D2WM.
                        </p>
                        <div className="flex gap-2 flex-wrap mb-6">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Inertia.js (React)</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Laravel</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">SQLite</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Filament (BackOffice)</span>
                            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Solo</span>
                        </div>
                        <div className="space-y-2 mb-6">
                            <p className="text-slate-600"><span className="font-semibold text-slate-900">✓ Authetification complète</span></p>
                            <p className="text-slate-600"><span className="font-semibold text-slate-900">✓ Parcours utilisateur complet</span></p>
                            <p className="text-slate-600"><span className="font-semibold text-slate-900">✓ Gestion des commandes et des stocks fonctionnelles</span></p>
                        </div>
                        <a href="https://github.com/S-Moreira06/piwee-laravel" target="_blank">
                            <button className="text-blue-600 font-semibold hover:text-blue-700 transition flex items-center gap-2">
                                Voir le projet →
                            </button>
                        </a>
                    </div>
                </div>
                
                {/* <!-- Projet 2 --> */}
                <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Les repas de Lili</h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Dashboard et application permettant des restaurateur partenaire de mettre a disposition des repas gratuit pour des associations.
                        </p>
                        <div className="flex gap-2 flex-wrap mb-6">
                            <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
                            <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                            <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">Zod</span>
                            <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">ShadCN/Ui</span>
                            <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">GitHubProject</span>
                            <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">Team AGILE</span>
                        </div>
                        <div className="space-y-2 mb-6">
                            <p className="text-slate-600"><span className="font-semibold text-slate-900">✓ Travail en équipe, en sprint</span></p>
                            <p className="text-slate-600"><span className="font-semibold text-slate-900">✓ Organisations et partage des taches</span></p>
                            <p className="text-slate-600"><span className="font-semibold text-slate-900">✓ Respect du CDC</span></p>
                        </div>
                        <a href="https://github.com/laplateformeio/lili-cdpi-cannes-grp2">
                            <button className="text-cyan-600 font-semibold hover:text-cyan-700 transition flex items-center gap-2">
                                Voir le projet →
                            </button>
                        </a>
                    </div>
                    <div className="order-1 md:order-2 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl h-80 flex items-center justify-center text-white text-2xl font-bold">
                        <Image src={ImgLili} alt="La petite Lili" />
                    </div>
                </div>
            </div>
        </section>
    );
};