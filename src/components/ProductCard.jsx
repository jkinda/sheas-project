import { ShoppingCart, Check, Eye } from 'lucide-react';

const ProductCard = ({ produit, onAjouter, onQuickView, ajouteRecemment }) => (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group h-full flex flex-col">
        {produit.badge && (
            <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white z-20 ${produit.badge === 'Best-seller' ? 'bg-green-600' :
                produit.badge === 'Nouveau' ? 'bg-amber-600' :
                    'bg-purple-600'
                }`}>
                {produit.badge}
            </span>
        )}

        {/* Image Container with Quick View Overlay */}
        <div
            className="aspect-square overflow-hidden bg-amber-100 relative cursor-pointer"
            onClick={() => onQuickView && onQuickView(produit)}
        >
            <img
                src={produit.image}
                alt={produit.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
            />

            {/* Overlay Button */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white/90 text-amber-900 px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-white shadow-lg">
                    <Eye size={16} /> Aperçu
                </button>
            </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
            <h3
                className="text-lg font-serif text-amber-900 mb-2 leading-tight cursor-pointer hover:text-amber-600 transition-colors"
                onClick={() => onQuickView && onQuickView(produit)}
            >
                {produit.nom}
            </h3>
            <p className="text-gray-600 text-sm mb-4 flex-1">{produit.description}</p>
            <div className="flex items-center justify-between mt-auto">
                <p className="text-2xl font-bold text-amber-600">
                    {produit.prix.toLocaleString('fr-FR')} FCFA
                </p>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAjouter(produit);
                    }}
                    className={`p-3 rounded-full transition-all focus:outline-none focus:ring-4 focus:ring-amber-300 ${ajouteRecemment
                        ? 'bg-green-600 text-white'
                        : 'bg-amber-600 hover:bg-amber-700 text-white hover:scale-110'
                        }`}
                    aria-label={ajouteRecemment ? `${produit.nom} ajouté` : `Ajouter ${produit.nom} au panier`}
                >
                    {ajouteRecemment ? <Check size={20} /> : <ShoppingCart size={20} />}
                </button>
            </div>
        </div>
    </article>
);

export default ProductCard;
