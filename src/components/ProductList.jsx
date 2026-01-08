import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { produits } from '../data/data';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemAnim = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const ProductList = ({ onAjouter, produitsAjoutes, onQuickView }) => (
    <section id="produits" className="py-20 px-6 bg-amber-50" aria-labelledby="produits-title">
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <p className="text-amber-600 font-medium mb-2 uppercase tracking-wider">Nos produits</p>
                <h2 id="produits-title" className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">
                    Le meilleur du karité burkinabè
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Tous nos produits sont fabriqués à partir de beurre de karité Grade A, non raffiné,
                    pressé à froid pour conserver toutes ses propriétés.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                role="list"
            >
                {produits.map(produit => (
                    <motion.div key={produit.id} variants={itemAnim} role="listitem">
                        <ProductCard
                            produit={produit}
                            onAjouter={onAjouter}
                            onQuickView={onQuickView}
                            ajouteRecemment={produitsAjoutes.includes(produit.id)}
                        />
                    </motion.div>
                ))}

                {/* Promo Card - Inspiration Santé */}
                <motion.article
                    variants={itemAnim}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl shadow-lg overflow-hidden relative group h-full min-h-[400px]"
                >
                    <img
                        src="/assets/images/promo-health.png"
                        alt="Bien-être naturel"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                        <h3 className="text-2xl font-serif font-bold mb-3 leading-tight">
                            Votre santé, votre meilleur atout
                        </h3>
                        <p className="text-amber-100 font-medium text-lg">
                            Investissez en vous dès aujourd'hui.
                        </p>
                    </div>
                </motion.article>
            </motion.div>
        </div>
    </section>
);

export default ProductList;
