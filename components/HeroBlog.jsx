export default function HeroBlog () {
    return (
        <section id="blog" className="section-gradient py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Blog & Articles</h2>
                    <p className="text-lg text-slate-600">Je documente mon apprentissage et partage des ressources</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* <!-- Article 1 --> */}
                    <div className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200">
                        <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-4xl">
                            ⚡
                        </div>
                        <div className="p-6">
                            <div className="flex gap-2 mb-3">
                                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">React</span>
                                <span className="text-xs font-semibold text-slate-600">8 mins</span>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Comment optimiser React en 2025</h3>
                            <p className="text-slate-600 text-sm mb-4">Découvrez les dernières techniques pour optimiser vos apps React.</p>
                            <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Lire l'article →</a>
                        </div>
                    </div>
                    
                    {/* <!-- Article 2 --> */}
                    <div className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200">
                        <div className="h-48 bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-4xl">
                            🚀
                        </div>
                        <div className="p-6">
                            <div className="flex gap-2 mb-3">
                                <span className="text-xs font-semibold text-cyan-600 bg-cyan-100 px-2 py-1 rounded">Next.js</span>
                                <span className="text-xs font-semibold text-slate-600">12 mins</span>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Next.js 14: App Router vs Pages Router</h3>
                            <p className="text-slate-600 text-sm mb-4">Guide de migration complet et bonnes pratiques.</p>
                            <a href="#" className="text-cyan-600 text-sm font-semibold hover:underline">Lire l'article →</a>
                        </div>
                    </div>
                    
                    {/* <!-- Article 3 --> */}
                    <div className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200">
                        <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-4xl">
                            🎮
                        </div>
                        <div className="p-6">
                            <div className="flex gap-2 mb-3">
                                <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">Career</span>
                                <span className="text-xs font-semibold text-slate-600">6 mins</span>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Streamer + Dev: Équilibrer les deux</h3>
                            <p className="text-slate-600 text-sm mb-4">Mon expérience en tant que streamer et développeur.</p>
                            <a href="#" className="text-purple-600 text-sm font-semibold hover:underline">Lire l'article →</a>
                        </div>
                    </div>
                </div>
                
                <div className="text-center mt-12">
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition text-lg">
                        Lire tous les articles →
                    </button>
                </div>
            </div>
        </section>
    )
}