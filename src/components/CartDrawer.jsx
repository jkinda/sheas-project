import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
    const total = items.reduce((sum, item) => sum + (item.product.prix * item.quantity), 0);
    const whatsappNumber = "22676289229";

    const handleCheckout = () => {
        let message = "Bonjour Shea's, je souhaite commander :\n\n";
        items.forEach(item => {
            message += `- ${item.quantity}x ${item.product.nom} (${item.product.badge || 'Standard'}) : ${item.product.prix * item.quantity} FCFA\n`;
        });
        message += `\n*TOTAL: ${total.toLocaleString('fr-FR')} FCFA*`;
        message += "\n\nPouvez-vous me confirmer la disponibilité ?";

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-amber-50/50">
                        <h2 className="font-serif text-2xl text-amber-900 flex items-center gap-2">
                            <ShoppingBag size={24} />
                            Votre Panier
                        </h2>
                        <button onClick={onClose} className="p-2 hover:bg-amber-100 rounded-full transition-colors text-gray-500">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Items */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {items.length === 0 ? (
                            <div className="text-center py-20 text-gray-400">
                                <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
                                <p>Votre panier est vide</p>
                                <button onClick={onClose} className="mt-4 text-amber-600 font-bold hover:underline">
                                    Découvrir nos produits
                                </button>
                            </div>
                        ) : (
                            items.map(item => (
                                <div key={item.product.id} className="flex gap-4">
                                    <div className="w-20 h-20 bg-amber-50 rounded-lg overflow-hidden flex-shrink-0 border border-amber-100">
                                        <img src={item.product.image} alt={item.product.nom} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-bold text-amber-900 line-clamp-1">{item.product.nom}</h3>
                                            <p className="text-amber-600 font-medium">{item.product.prix.toLocaleString('fr-FR')} FCFA</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center gap-3 bg-gray-50 rounded-full px-3 py-1 border border-gray-200">
                                                <button
                                                    onClick={() => onUpdateQuantity(item.product.id, -1)}
                                                    className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-amber-600 disabled:opacity-30"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="font-bold text-gray-700 w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => onUpdateQuantity(item.product.id, 1)}
                                                    className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-amber-600"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => onRemove(item.product.id)}
                                                className="text-red-400 hover:text-red-600 p-2"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="p-6 border-t border-gray-100 bg-gray-50">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-600 font-medium">Total (hors livraison)</span>
                                <span className="text-2xl font-bold text-amber-900">
                                    {total.toLocaleString('fr-FR')} FCFA
                                </span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-700 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                            >
                                <span>Commander sur WhatsApp</span>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Réponse rapide assurée
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
