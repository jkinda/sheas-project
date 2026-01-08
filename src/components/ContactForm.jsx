import { useState } from 'react';
import { Check } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        pays: '',
        sujet: '',
        message: ''
    });
    const [soumis, setSoumis] = useState(false);
    const [erreurs, setErreurs] = useState({});

    const valider = () => {
        const nouvellesErreurs = {};
        if (!formData.nom.trim()) nouvellesErreurs.nom = "Le nom est requis";
        if (!formData.email.trim()) {
            nouvellesErreurs.email = "L'email est requis";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            nouvellesErreurs.email = "Email invalide";
        }
        if (!formData.message.trim()) nouvellesErreurs.message = "Le message est requis";
        return nouvellesErreurs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nouvellesErreurs = valider();
        if (Object.keys(nouvellesErreurs).length > 0) {
            setErreurs(nouvellesErreurs);
            return;
        }
        setSoumis(true);
        setErreurs({});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (erreurs[name]) {
            setErreurs(prev => ({ ...prev, [name]: '' }));
        }
    };

    if (soumis) {
        return (
            <section id="contact" className="py-20 px-6 bg-white" aria-labelledby="contact-title">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-green-100 rounded-2xl p-12">
                        <div className="w-20 h-20 mx-auto mb-6 bg-green-600 rounded-full flex items-center justify-center">
                            <Check size={40} className="text-white" />
                        </div>
                        <h2 className="text-2xl font-serif text-green-800 mb-4">Message envoyé – A ni kié ! 🙏</h2>
                        <p className="text-gray-600">
                            Merci pour votre message. Notre équipe à Ouagadougou vous répondra sous 24-48h.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-20 px-6 bg-white" aria-labelledby="contact-title">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-amber-600 font-medium mb-2 uppercase tracking-wider">Contact</p>
                    <h2 id="contact-title" className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">
                        Parlons karité
                    </h2>
                    <p className="text-gray-600">
                        Une question sur nos produits ou nos coopératives partenaires ? Écrivez-nous !
                    </p>
                </div>

                <div className="bg-amber-50 rounded-2xl p-8 shadow-lg">
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="nom" className="block text-sm font-medium text-amber-800 mb-2">
                                    Nom complet <span className="text-red-500" aria-hidden="true">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${erreurs.nom ? 'border-red-500' : 'border-amber-200'
                                        } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                                    aria-required="true"
                                    aria-invalid={!!erreurs.nom}
                                    aria-describedby={erreurs.nom ? "nom-error" : undefined}
                                />
                                {erreurs.nom && (
                                    <p id="nom-error" className="mt-1 text-sm text-red-500" role="alert">
                                        {erreurs.nom}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-2">
                                    Email <span className="text-red-500" aria-hidden="true">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${erreurs.email ? 'border-red-500' : 'border-amber-200'
                                        } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                                    aria-required="true"
                                    aria-invalid={!!erreurs.email}
                                    aria-describedby={erreurs.email ? "email-error" : undefined}
                                />
                                {erreurs.email && (
                                    <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                                        {erreurs.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="pays" className="block text-sm font-medium text-amber-800 mb-2">
                                    Pays
                                </label>
                                <select
                                    id="pays"
                                    name="pays"
                                    value={formData.pays}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                                >
                                    <option value="">Sélectionner</option>
                                    <optgroup label="Afrique de l'Ouest">
                                        <option value="BF">🇧🇫 Burkina Faso</option>
                                        <option value="CI">🇨🇮 Côte d'Ivoire</option>
                                        <option value="ML">🇲🇱 Mali</option>
                                        <option value="SN">🇸🇳 Sénégal</option>
                                        <option value="BJ">🇧🇯 Bénin</option>
                                        <option value="TG">🇹🇬 Togo</option>
                                        <option value="GH">🇬🇭 Ghana</option>
                                        <option value="NE">🇳🇪 Niger</option>
                                    </optgroup>
                                    <optgroup label="Europe">
                                        <option value="FR">🇫🇷 France</option>
                                        <option value="BE">🇧🇪 Belgique</option>
                                        <option value="CH">🇨🇭 Suisse</option>
                                        <option value="LU">🇱🇺 Luxembourg</option>
                                        <option value="DE">🇩🇪 Allemagne</option>
                                    </optgroup>
                                    <option value="other">Autre pays</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="sujet" className="block text-sm font-medium text-amber-800 mb-2">
                                    Sujet
                                </label>
                                <select
                                    id="sujet"
                                    name="sujet"
                                    value={formData.sujet}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                                >
                                    <option value="">Choisir un sujet</option>
                                    <option value="commande">Question sur une commande</option>
                                    <option value="produit">Information produit</option>
                                    <option value="livraison">Livraison internationale</option>
                                    <option value="gros">Achat en gros / Professionnel</option>
                                    <option value="cooperative">Nos coopératives</option>
                                    <option value="autre">Autre</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-amber-800 mb-2">
                                Message <span className="text-red-500" aria-hidden="true">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-lg border ${erreurs.message ? 'border-red-500' : 'border-amber-200'
                                    } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none`}
                                aria-required="true"
                                aria-invalid={!!erreurs.message}
                                aria-describedby={erreurs.message ? "message-error" : undefined}
                            />
                            {erreurs.message && (
                                <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                                    {erreurs.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-300"
                        >
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
