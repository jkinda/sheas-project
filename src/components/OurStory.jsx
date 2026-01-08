const OurStory = () => (
    <section id="histoire" className="py-20 px-6 bg-amber-50" aria-labelledby="histoire-title">
        <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-amber-600 font-medium mb-2 uppercase tracking-wider">Notre histoire</p>
                    <h2 id="histoire-title" className="text-3xl md:text-4xl font-serif text-amber-900 mb-6">
                        L'aventure Shea's commence avec vous
                    </h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Tout a commencé avec la naissance de notre bébé. Comme de nombreux parents, nous cherchions
                            des solutions naturelles et douces pour prendre soin de sa peau fragile et de la nôtre,
                            fatiguée par les nuits blanches. C'est là que nous avons découvert le beurre de karité pur
                            du Burkina Faso, un trésor ancestral utilisé depuis des siècles par les femmes africaines.
                        </p>
                        <p>
                            Nous l'avons appliqué sur les petites irritations de bébé et sur nos propres gerçures –
                            et les résultats ont été magiques ! Sa richesse en vitamines A, E et F hydrate en profondeur
                            sans alourdir la peau, réduit les inflammations et les rougeurs, et favorise même la
                            cicatrisation des petites plaies. Sans additifs, il est idéal pour les peaux sensibles,
                            y compris celles des nourrissons, en soulageant les éruptions cutanées et l'eczéma.
                        </p>
                        <p>
                            Émerveillés par ses vertus anti-inflammatoires, antioxydantes et anti-âge prouvées,
                            nous nous sommes dit : <em>« Pourquoi garder ce secret pour nous ? »</em> Nous avons décidé
                            de vulgariser ce joyau naturel, issu de coopératives de femmes burkinabées, pour que tout
                            le monde puisse expérimenter sa magie régénérante.
                        </p>
                        <p className="font-medium text-amber-800">
                            Chez <strong>Shea's</strong>, chaque pot est une invitation à rejoindre notre communauté :
                            des familles qui choisissent le pur, l'équitable et le bien-être durable. Partagez votre
                            histoire avec nous – ensemble, célébrons les merveilles de la nature !
                        </p>
                    </div>

                    {/* Statistiques */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                            <p className="text-3xl font-bold text-amber-600">100%</p>
                            <p className="text-sm text-gray-600">Pur & Naturel</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                            <p className="text-3xl font-bold text-amber-600">3000+</p>
                            <p className="text-sm text-gray-600">Familles satisfaites</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                            <p className="text-3xl font-bold text-amber-600">🇧🇫</p>
                            <p className="text-sm text-gray-600">Direct du Burkina</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/assets/images/story.png"
                            alt="Maman africaine prenant soin de son bébé"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    {/* Badge flottant */}
                    <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-4 rounded-xl shadow-lg">
                        <p className="font-bold">100% Naturel</p>
                        <p className="text-sm text-amber-100">Parfait pour bébé</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default OurStory;
