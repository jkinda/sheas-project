import { Truck, Gift } from 'lucide-react';

const PromoBanner = () => {
    return (
        <div className="bg-amber-900 text-amber-50 text-xs md:text-sm py-2 px-4 text-center font-medium tracking-wide relative z-50 flex items-center justify-center gap-4 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap md:animate-none flex gap-4 md:gap-8">
                <span className="flex items-center gap-2">
                    <Truck size={14} className="text-amber-400" />
                    Livraison GRATUITE dès 10 000 FCFA
                </span>
                <span className="hidden md:inline text-amber-600">•</span>
                <span className="flex items-center gap-2">
                    <Gift size={14} className="text-amber-400" />
                    -10% sur votre 1ère commande avec le code SHEA10
                </span>
            </div>
        </div>
    );
};

export default PromoBanner;
