import { bienfaits } from '../data/data';

const Benefits = () => (
    <section id="bienfaits" className="py-20 px-6 bg-amber-900 text-white" aria-labelledby="bienfaits-title">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <p className="text-amber-300 font-medium mb-2 uppercase tracking-wider">Pourquoi le beurre de karité</p>
                <h2 id="bienfaits-title" className="text-3xl md:text-4xl font-serif mb-4">
                    Un trésor de bienfaits
                </h2>
                <p className="text-amber-200 max-w-2xl mx-auto">
                    Utilisé depuis des millénaires en Afrique, le beurre de karité est reconnu pour ses
                    propriétés exceptionnelles pour la peau et les cheveux.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bienfaits.map((item, index) => (
                    <div key={index} className="bg-amber-800/50 backdrop-blur rounded-2xl p-6 text-center hover:bg-amber-800 transition-colors">
                        <div className="w-14 h-14 mx-auto mb-4 bg-amber-500 rounded-full flex items-center justify-center">
                            <item.icon size={28} className="text-white" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.titre}</h3>
                        <p className="text-amber-200 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Utilisations */}
            <div className="mt-16 bg-amber-800/30 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Comment utiliser le beurre de karité ?</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div>
                        <p className="text-3xl mb-2">🧴</p>
                        <p className="font-medium">Visage</p>
                        <p className="text-sm text-amber-200">Crème de nuit nourrissante</p>
                    </div>
                    <div>
                        <p className="text-3xl mb-2">💆</p>
                        <p className="font-medium">Corps</p>
                        <p className="text-sm text-amber-200">Après la douche sur peau humide</p>
                    </div>
                    <div>
                        <p className="text-3xl mb-2">💇</p>
                        <p className="font-medium">Cheveux</p>
                        <p className="text-sm text-amber-200">Masque ou soin sans rinçage</p>
                    </div>
                    <div>
                        <p className="text-3xl mb-2">👶</p>
                        <p className="font-medium">Bébé</p>
                        <p className="text-sm text-amber-200">Change et massage</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Benefits;
