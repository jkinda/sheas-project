import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import PromoBanner from './PromoBanner';

const Navigation = ({ panier, toggleMenu, menuOuvert, onOpenCart }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const liens = [
        { href: "#produits", label: "Nos Produits" },
        { href: "#histoire", label: "Notre Histoire" },
        { href: "#bienfaits", label: "Bienfaits" },
        { href: "#faq", label: "FAQ" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
            }`}>
            {/* Promo Banner displayed ONLY when not scrolled or always? Let's keep it visible but maybe hide on scroll to save space? 
                Let's keep it simple: always visible or maybe hide when scrolled for cleaner look. 
                For "desire to buy", keeping it visible is good. */}
            <PromoBanner />

            <nav
                className={`w-full transition-all duration-300 ${scrolled ? 'py-0' : 'py-2'}`}
                role="navigation"
                aria-label="Navigation principale"
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <a href="#" className="font-serif text-xl font-bold flex items-center gap-2">
                        <img src="assets/images/logo_v2.jpg" alt="Shea's" className="h-16 w-auto transition-all duration-300 transform hover:scale-105" />
                    </a>

                    {/* Menu desktop */}
                    <div className="hidden lg:flex items-center gap-8">
                        {liens.map(lien => (
                            <a
                                key={lien.href}
                                href={lien.href}
                                className={`transition-all duration-300 text-xs font-bold uppercase tracking-widest hover:text-amber-500 relative group ${scrolled ? 'text-amber-900' : 'text-white'
                                    }`}
                            >
                                {lien.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <button
                            onClick={onOpenCart}
                            className="relative p-2.5 rounded-full bg-amber-600/90 text-white hover:bg-amber-700 transition-all hover:shadow-lg"
                            aria-label={`Panier, ${panier} articles`}
                        >
                            <ShoppingCart size={18} />
                            {panier > 0 && (
                                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                                    {panier}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Menu mobile toggle */}
                    <div className="lg:hidden flex items-center gap-3">
                        <button
                            onClick={onOpenCart}
                            className="relative p-2 rounded-full bg-amber-600 text-white"
                            aria-label={`Panier, ${panier} articles`}
                        >
                            <ShoppingCart size={20} />
                            {panier > 0 && (
                                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {panier}
                                </span>
                            )}
                        </button>
                        <button
                            className="p-2"
                            onClick={toggleMenu}
                            aria-expanded={menuOuvert}
                            aria-controls="mobile-menu"
                            aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
                        >
                            {menuOuvert ? (
                                <X size={24} className={scrolled ? 'text-amber-800' : 'text-white'} />
                            ) : (
                                <Menu size={24} className={scrolled ? 'text-amber-800' : 'text-white'} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                <div
                    id="mobile-menu"
                    className={`lg:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${menuOuvert ? 'max-h-96' : 'max-h-0'
                        }`}
                >
                    <div className="px-4 py-4 flex flex-col gap-4">
                        {liens.map(lien => (
                            <a
                                key={lien.href}
                                href={lien.href}
                                className="text-amber-800 hover:text-amber-600 transition-colors py-2 border-b border-amber-100"
                                onClick={toggleMenu}
                            >
                                {lien.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
