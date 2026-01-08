import { Sun, Mail, ArrowRight, ShieldCheck, Truck, Heart } from 'lucide-react';

const Footer = () => (
    <footer className="bg-amber-950 text-amber-50" role="contentinfo">
        {/* Newsletter Section - Trust Builder */}
        <div className="border-b border-amber-900/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pattern-circles)" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left max-w-lg">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2 text-white">Rejoignez la famille Shea's</h3>
                    <p className="text-amber-200">
                        Inscrivez-vous pour recevoir des conseils beauté exclusifs et <span className="text-amber-400 font-bold">-10% sur votre première commande</span>.
                    </p>
                </div>
                <div className="w-full max-w-md">
                    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative flex-1">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="w-full bg-amber-900/30 border border-amber-800 text-white pl-12 pr-4 py-3 rounded-full focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder-amber-500/50 transition-all"
                            />
                        </div>
                        <button className="bg-amber-600 text-white px-6 py-3 rounded-full font-bold hover:bg-amber-500 transition-all hover:scale-105 flex items-center gap-2">
                            <span className="hidden sm:inline">S'inscrire</span>
                            <ArrowRight size={20} />
                        </button>
                    </form>
                    <p className="text-xs text-amber-500 mt-3 pl-4">Pas de spam, c'est promis. Désinscription à tout moment.</p>
                </div>
            </div>
        </div>

        {/* Main Footer Info */}
        <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <Sun size={32} className="text-amber-400" />
                        <h3 className="font-serif text-2xl font-bold tracking-tight">Shea's</h3>
                    </div>
                    <p className="text-amber-200/80 text-sm leading-relaxed mb-6">
                        L'excellence du karité burkinabè.
                        Une marque engagée pour la beauté naturelle et l'autonomisation des femmes.
                    </p>
                    <div className="flex gap-4">
                        {/* Fake Social Icons */}
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-amber-900 flex items-center justify-center text-amber-400 hover:bg-amber-800 hover:text-white transition-colors cursor-pointer">
                                <span className="text-xs">IG</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Explorer</h4>
                    <ul className="space-y-3 text-sm text-amber-200/80">
                        <li><a href="#produits" className="hover:text-amber-400 transition-colors inline-block hover:translate-x-1">Nos collections</a></li>
                        <li><a href="#histoire" className="hover:text-amber-400 transition-colors inline-block hover:translate-x-1">Notre impact</a></li>
                        <li><a href="#bienfaits" className="hover:text-amber-400 transition-colors inline-block hover:translate-x-1">Le Karité</a></li>
                        <li><a href="#blog" className="hover:text-amber-400 transition-colors inline-block hover:translate-x-1">Journal de beauté</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Aide</h4>
                    <ul className="space-y-3 text-sm text-amber-200/80">
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Suivre ma commande</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Livraison et retours</a></li>
                        <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
                        <li><a href="#contact" className="hover:text-amber-400 transition-colors">Nous contacter</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Engagement</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3 items-start">
                            <ShieldCheck className="text-green-400 shrink-0" size={20} />
                            <span className="text-sm text-amber-100">Paiement 100% Sécurisé<br /><span className="text-xs text-amber-500">Mobile Money & Cartes</span></span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <Truck className="text-blue-400 shrink-0" size={20} />
                            <span className="text-sm text-amber-100">Expédition Rapide<br /><span className="text-xs text-amber-500">Sous 24/48h</span></span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <Heart className="text-pink-400 shrink-0" size={20} />
                            <span className="text-sm text-amber-100">Produit Éthique<br /><span className="text-xs text-amber-500">Soutient les communautés</span></span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-amber-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-amber-500/60">
                <p>
                    &copy; 2025 Shea's. Fait avec passion au 🇧🇫 Burkina Faso.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-amber-400">CGV</a>
                    <a href="#" className="hover:text-amber-400">Confidentialité</a>
                    <a href="#" className="hover:text-amber-400">Mentions Légales</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
