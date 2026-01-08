const Community = () => (
    <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <img
                    src="assets/images/family.png"
                    alt="Famille heureuse utilisant les produits Shea's"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8 md:p-16">
                    <div className="max-w-2xl text-white">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Pour toute la famille
                        </h2>
                        <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-xl">
                            Des soins naturels, sûrs et efficaces pour chaque génération. De la peau délicate de bébé aux besoins
                            spécifiques des aînés, Shea's accompagne vos moments de partage.
                        </p>
                        <a
                            href="#produits"
                            className="inline-block bg-white text-amber-900 font-bold px-8 py-3 rounded-full hover:bg-amber-100 transition-colors"
                        >
                            Voir la gamme famille
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Community;
