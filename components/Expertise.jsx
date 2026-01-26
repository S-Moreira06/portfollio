export default function Expertise () {
    return (
        <section id="expertise" className="section-gradient py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Mon Expertise</h2>
                    <p className="text-lg text-slate-600">Spécialisé en Full-Stack avec focus sur Frontend moderne</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* <!-- Frontend --> */}
                    <div className="card-hover bg-white rounded-2xl p-8 border border-slate-200">
                        <div className="text-4xl mb-4">⚛️</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Frontend</h3>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                React & Blade
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                Tailwind CSS & Bootstrap 
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                shadcn/ui & DaisyUi & Motion 
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                Performance & Accessibilité
                            </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-slate-200">
                            <span className="text-sm font-semibold text-blue-600">A venir: Liens vers articles de blog</span>
                        </div>
                    </div>
                    
                    {/* <!-- Backend --> */}
                    <div className="card-hover bg-white rounded-2xl p-8 border border-slate-200">
                        <div className="text-4xl mb-4">🔧</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Backend</h3>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                Laravel & Node.js & Next.js
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                MySql & Sqlite
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                REST APIs & Authentication
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                Testing & Best Practices
                            </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-slate-200">
                            <span className="text-sm font-semibold text-blue-600">A venir: Liens vers articles de blog</span>
                        </div>
                    </div>
                    
                    {/* <!-- DevOps --> */}
                    <div className="card-hover bg-white rounded-2xl p-8 border border-slate-200">
                        <div className="text-4xl mb-4">🚀</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">DevOps & Scaling</h3>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                Vercel & Fly.io (Débutant)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                Docker & GitHub Project
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                Monitoring & Performance
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">•</span>
                                Zero-Downtime Deployments
                            </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-slate-200">
                            <span className="text-sm font-semibold text-blue-600">A venir: Liens vers articles de blog</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}