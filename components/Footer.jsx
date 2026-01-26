export default function Footer () {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="font-bold text-white mb-4">Navigation</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition">Accueil</a></li>
                            <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Social</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition">GitHub</a></li>
                            <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition">Twitch</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition">CV</a></li>
                            <li><a href="#" className="hover:text-white transition">Sitemap</a></li>
                            <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                            <li><a href="#" className="hover:text-white transition">Terms</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Stack</h4>
                        <p className="text-sm">Next.js • Tailwind CSS</p>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center text-sm">
                    <p>© 2025 S-Mor06. Built with Next.js & Tailwind CSS.</p>
                </div>
            </div>
        </footer>
    )
}