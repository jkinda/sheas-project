import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ShoppingCart, Info, Droplet } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
    if (!product || !isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                    className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
                >
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto bg-amber-50 relative group">
                        <img
                            src={product.image}
                            alt={product.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {product.badge && (
                            <span className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                {product.badge}
                            </span>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Beurre de Karité Premium</p>
                                <h2 className="text-3xl font-serif text-amber-900 leading-tight">{product.nom}</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>

                        <p className="text-2xl font-bold text-amber-600 mb-6">
                            {product.prix.toLocaleString('fr-FR')} FCFA
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Details Grid */}
                        <div className="space-y-6 mb-8">
                            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                                <h3 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                                    <Droplet size={18} /> Ingrédients
                                </h3>
                                <p className="text-sm text-amber-900/80 leading-relaxed italic">
                                    {product.ingredients}
                                </p>
                            </div>

                            <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                                <h3 className="font-bold text-green-800 flex items-center gap-2 mb-2">
                                    <Info size={18} /> Conseils d'utilisation
                                </h3>
                                <p className="text-sm text-green-900/80 leading-relaxed">
                                    {product.usage}
                                </p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-auto pt-6 border-t border-gray-100 flex gap-4">
                            <button
                                onClick={() => {
                                    onAddToCart(product);
                                    onClose();
                                }}
                                className="flex-1 bg-amber-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-800 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-900/20"
                            >
                                <ShoppingCart size={20} />
                                Ajouter au Panier
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductModal;
