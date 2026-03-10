import { Service, PortfolioItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Coupe Signature Femme',
    description: 'Une coupe personnalisée adaptée à la morphologie de votre visage et à la texture de vos cheveux.',
    price: 'à partir de 65€',
    category: 'Coupe'
  },
  {
    id: '2',
    name: 'Balayage Créatif',
    description: 'Technique de coloration sur mesure pour un effet naturel et lumineux.',
    price: 'à partir de 120€',
    category: 'Coloration'
  },
  {
    id: '3',
    name: 'Coloration Haute Couture',
    description: 'Une couleur profonde et brillante avec des produits respectueux de la fibre capillaire.',
    price: 'à partir de 85€',
    category: 'Coloration'
  },
  {
    id: '4',
    name: 'Soin Profond Kératine',
    description: 'Traitement intensif pour restaurer la brillance et la force de vos cheveux.',
    price: '55€',
    category: 'Soin'
  },
  {
    id: '5',
    name: 'Coiffure Événementielle',
    description: 'Chignons, tresses ou boucles pour vos moments inoubliables.',
    price: 'à partir de 75€',
    category: 'Événement'
  },
  {
    id: '6',
    name: 'Extensions Premium',
    description: 'Volume et longueur naturelle avec des cheveux de haute qualité. Sur devis.',
    price: 'Sur devis',
    category: 'Événement'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Blond Polaire',
    category: 'Blonds',
    imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=800&auto=format&fit=crop',
    description: 'Transformation radicale vers un blond froid et lumineux.'
  },
  {
    id: 'p2',
    title: 'Wavy Bohème',
    category: 'Coiffures de Soirée',
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
    description: 'Boucles souples pour un look naturel et élégant.'
  },
  {
    id: 'p3',
    title: 'Carré Structuré',
    category: 'Transformations',
    imageUrl: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800&auto=format&fit=crop',
    description: 'Coupe moderne et dynamique.'
  },
  {
    id: 'p4',
    title: 'Cuivré Intense',
    category: 'Colorations',
    imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop',
    description: 'Reflets chauds et vibrants.'
  },
  {
    id: 'p5',
    title: 'Chignon Mariée',
    category: 'Événement',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    description: 'Élégance intemporelle pour le grand jour.'
  },
  {
    id: 'p6',
    title: 'Balayage Caramel',
    category: 'Blonds',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop',
    description: 'Douceur et lumière pour les brunes.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sophie L.',
    content: "Wal est un véritable artiste. Il a su comprendre exactement ce que je voulais et le résultat dépasse mes espérances. Mon balayage est sublime !",
    rating: 5
  },
  {
    id: 't2',
    name: 'Marc A.',
    content: "Une expérience exceptionnelle. Le salon est magnifique et l'accueil est chaleureux. La coupe est parfaite, très moderne.",
    rating: 5
  },
  {
    id: 't3',
    name: 'Elena R.',
    content: "Je ne confie mes cheveux qu'à Wal Stach. Son expertise en coloration est inégalée. Je recommande les yeux fermés.",
    rating: 5
  }
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/walstach_art/',
  facebook: 'https://www.facebook.com/walstach/',
  twitter: 'https://twitter.com/walstach',
  tiktok: 'https://www.tiktok.com/@walstach_art'
};
