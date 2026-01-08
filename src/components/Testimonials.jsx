import { Star } from 'lucide-react';
import { temoignages } from '../data/data';

// Composant étoiles
const Stars = ({ note }) => (
    <div className="flex gap-1" role="img" aria-label={`Note : ${note} sur 5 étoiles`}>
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={18}
                className={i < note ? "fill-amber-400 text-amber-400" : "text-gray-300"}
            />
        ))}
    </div>
);

const Testimonials = () => (
    <section id="temoignages" className="py-20 px-6 bg-white" aria-labelledby="temoignages-title">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <p className="text-amber-600 font-medium mb-2 uppercase tracking-wider">Témoignages</p>
                <h2 id="temoignages-title" className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">
                    Elles ont adopté le karité
                </h2>
                <p className="text-gray-600">
                    Plus de 3 000 clientes satisfaites en Europe et en Afrique
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {temoignages.map(t => (
                    <article
                        key={t.id}
                        className="bg-amber-50 rounded-2xl p-6 shadow-md border border-amber-100 flex gap-4 md:gap-6 items-start"
                    >
                        <div className="flex-shrink-0">
                            <img
                                src={t.image}
                                alt={t.nom}
                                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                            />
                        </div>
                        <div className="flex-grow">
                            <Stars note={t.note} />
                            <blockquote className="mt-2 text-gray-700 italic leading-relaxed text-sm md:text-base">
                                "{t.texte}"
                            </blockquote>
                            <footer className="mt-3 flex items-center justify-between">
                                <div>
                                    <cite className="font-semibold text-amber-800 not-italic block">{t.nom}</cite>
                                    <span className="text-xs text-gray-500">{t.ville}</span>
                                </div>
                                <time className="text-xs text-gray-400">{t.date}</time>
                            </footer>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Testimonials;
