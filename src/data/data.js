import { Heart, Sparkles, Leaf, Sun } from 'lucide-react';

export const produits = [
  {
    id: 1,
    nom: "L'Essentiel – Petite Boîte",
    description: "L'hydratation pure à emporter partout. Idéal pour le sac à main.",
    prix: 2000,
    image: "/assets/images/product-small.png",
    alt: "Petit pot de beurre de karité Shea's",
    badge: "Best-seller",
    ingredients: "100% Beurre de Karité brut (Butyrospermum Parkii Butter), non raffiné, grade A.",
    usage: "Réchauffez une noisette dans la paume de la main et appliquez sur les zones sèches (lèvres, mains, coudes)."
  },
  {
    id: 2,
    nom: "Le Quotidien – Moyenne Boîte",
    description: "Le format parfait pour votre routine beauté quotidienne.",
    prix: 3000,
    image: "/assets/images/product-medium.png",
    alt: "Pot moyen de beurre de karité Shea's",
    badge: "Populaire",
    ingredients: "100% Beurre de Karité brut (Butyrospermum Parkii Butter), non raffiné, grade A.",
    usage: "Utilisez quotidiennement comme hydratant corporel après la douche ou comme masque capillaire avant shampoing."
  },
  {
    id: 3,
    nom: "Le Familial – Grande Boîte",
    description: "Un pot généreux pour prendre soin de toute la famille.",
    prix: 5000,
    image: "/assets/images/product-large.png",
    alt: "Grand pot de beurre de karité Shea's",
    badge: "Économique",
    ingredients: "100% Beurre de Karité brut (Butyrospermum Parkii Butter), non raffiné, grade A.",
    usage: "Idéal pour les massages de bébé, les peaux atopiques de toute la famille, et la prévention des vergetures."
  },
  {
    id: 4,
    nom: "Le Trésor – Coffret Intégral",
    description: "Les 3 formats réunis – Le cadeau parfait pour ceux que vous aimez.",
    prix: 8000,
    image: "/assets/images/product-set.png",
    alt: "Coffret cadeau Shea's avec les trois formats",
    badge: "Coffret Cadeau",
    ingredients: "100% Beurre de Karité brut (Butyrospermum Parkii Butter), non raffiné, grade A.",
    usage: "Offrez le soin complet : le petit pour le sac, le moyen pour la salle de bain, le grand pour la chambre."
  }
];

export const temoignages = [
  {
    id: 1,
    nom: "Aminata K.",
    ville: "Paris, France",
    note: 5,
    texte: "Enfin un vrai beurre de karité comme celui de ma grand-mère au Burkina ! L'odeur naturelle de noisette me rappelle mon enfance.",
    date: "Novembre 2024",
    image: "/assets/images/testimonial-1.jpeg" // Using existing image
  },
  {
    id: 2,
    nom: "Claire M.",
    ville: "Bruxelles, Belgique",
    note: 5,
    texte: "J'utilise le beurre fouetté quotidiennement. Il pénètre rapidement sans laisser de film gras. Parfait sous le maquillage.",
    date: "Octobre 2024",
    image: "/assets/images/testimonial-2.jpeg" // Using existing image
  },
  {
    id: 3,
    nom: "Mama Sarata",
    ville: "Ouagadougou, Burkina Faso",
    note: 5,
    texte: "À mon âge, la peau devient très sèche. Ce karité est un miracle. Il redonne vie à ma peau et mes cheveux gris brillent comme jamais.",
    date: "Septembre 2024",
    image: "/assets/images/elderly.png" // The NEW elderly woman image
  },
  {
    id: 4,
    nom: "Sophie L.",
    ville: "Lyon, France",
    note: 5,
    texte: "Mes cheveux crépus adorent ce karité ! J'ai enfin trouvé un produit 100% naturel qui définit mes boucles.",
    date: "Août 2024",
    image: "/assets/images/testimonial-3.jpeg" // Using existing image
  }
];

export const faqData = [
  {
    question: "D'où provient votre beurre de karité ?",
    reponse: "Notre karité provient exclusivement de coopératives de femmes dans les régions du Centre-Ouest et des Hauts-Bassins au Burkina Faso. Nous travaillons directement avec plus de 200 femmes productrices dans les villages de Léo, Bobo-Dioulasso et Koudougou."
  },
  {
    question: "Quelle est la différence entre karité raffiné et non raffiné ?",
    reponse: "Le karité non raffiné (grade A) conserve toutes ses propriétés : vitamines A, E, F, antioxydants et acides gras essentiels. Il a une couleur jaune-ivoire et une légère odeur de noisette. Le karité raffiné est blanc, inodore mais perd une grande partie de ses bienfaits. Nous ne vendons que du karité non raffiné."
  },
  {
    question: "Comment conserver le beurre de karité ?",
    reponse: "Conservez-le à température ambiante (15-25°C), à l'abri de la lumière directe. Il se solidifie en dessous de 20°C et fond au-dessus de 35°C – c'est normal ! Sa durée de conservation est de 24 mois. En été, vous pouvez le garder au réfrigérateur."
  },
  {
    question: "Le beurre de karité convient-il à tous les types de peau ?",
    reponse: "Oui ! Le karité est hypoallergénique et convient aux peaux sensibles, sèches, atopiques, et même aux bébés. Il est non comédogène malgré sa richesse. Pour les peaux grasses, nous recommandons notre version fouettée, plus légère."
  },
  {
    question: "Peut-on utiliser le karité sur les cheveux ?",
    reponse: "Absolument ! Le karité est excellent pour les cheveux secs, crépus, frisés ou abîmés. Utilisez-le en masque avant-shampoing, en soin sans rinçage sur les pointes, ou pour sceller l'hydratation. Notre huile de karité est spécialement formulée pour les cheveux."
  },
  {
    question: "Comment soutenez-vous les productrices ?",
    reponse: "Nous pratiquons le commerce équitable : prix d'achat 40% au-dessus du marché, paiement à la commande, préfinancement des récoltes. 5% de nos bénéfices financent des projets locaux (scolarisation des filles, puits, centres de santé). Chaque pot indique le nom de la coopérative productrice."
  },
  {
    question: "Livrez-vous en Afrique ?",
    reponse: "Oui ! Nous livrons dans toute l'Afrique de l'Ouest (Burkina Faso, Côte d'Ivoire, Mali, Sénégal, Bénin, Togo) ainsi qu'en Europe. Les frais et délais varient selon la destination. Contactez-nous pour les autres pays africains."
  }
];

export const bienfaits = [
  { icon: Heart, titre: "Hydratation intense", desc: "Nourrit les peaux les plus sèches grâce aux acides gras essentiels" },
  { icon: Sparkles, titre: "Anti-âge naturel", desc: "Riche en vitamines A et E antioxydantes" },
  { icon: Leaf, titre: "Apaisant & cicatrisant", desc: "Calme irritations, eczéma et vergetures" },
  { icon: Sun, titre: "Protection solaire", desc: "SPF naturel 6-10, protège des UV" }
];
