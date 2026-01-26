export default function CTA () {
    return (
        <section className="hero-gradient text-white py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold mb-6">Prêt pour votre prochain projet ?</h2>
                <p className="text-xl text-blue-100 mb-8">
                    Je suis disponible pour freelance, CDI, ou collaborations. Parlons de votre vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
                        Me Contacter
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition">
                        Télécharger CV
                    </button>
                </div>
            </div>
        </section>
    )
}