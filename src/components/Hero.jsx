import { Leaf, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="assets/videos/hero.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
            </video>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="text-amber-200 text-lg md:text-xl uppercase tracking-[0.2em] mb-4">
                        Direct du Burkina Faso
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
                        L'Or des Femmes<br />
                        <span className="italic font-light">Pour votre Peau</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex justify-center items-center gap-6 text-white/90 text-sm md:text-base font-medium tracking-widest uppercase mb-10"
                >
                    <span>Nature</span>
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    <span>Équité</span>
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    <span>Brillance</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-gray-200 text-lg md:text-2xl max-w-2xl mb-10 leading-relaxed drop-shadow-md"
                >
                    Le beurre de karité le plus pur, pour une hydratation intense et naturelle qui respecte votre corps et soutient nos communautés.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-4"
                >
                    <a
                        href="#produits"
                        className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:bg-amber-700 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30"
                    >
                        Découvrir la Collection
                    </a>
                    <a
                        href="#histoire"
                        className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:bg-white/20 hover:scale-105"
                    >
                        Notre Histoire
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </motion.div>

            {/* Vague décorative */}
            <div className="absolute bottom-0 left-0 right-0 z-20 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-[calc(110%+1.3px)] h-[100px]" viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" fill="#fffbeb" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
