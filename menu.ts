export interface MenuItem {
  id: string;
  nom: string;
  description: string;
  prix: number | null;
  tag?: string;
  prixTexte?: string;
}

export interface MenuCategory {
  id: string;
  titre: string;
  emoji: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'formules',
    titre: 'Nos Formules',
    emoji: '🍽️',
    items: [
      { id: 'f1', nom: 'Entrée – Plat – Dessert', description: 'La formule complète pour profiter de tout notre savoir-faire', prix: 38, tag: 'Recommandé' },
      { id: 'f2', nom: 'Entrée – Plat', description: 'Deux temps pour composer votre repas', prix: 35 },
      { id: 'f3', nom: 'Plat – Dessert', description: 'Pour terminer en beauté', prix: 33 },
    ]
  },
  {
    id: 'entrees',
    titre: 'Entrées',
    emoji: '🥗',
    items: [
      { id: 'e1', nom: 'Marinade du Pêcheur', description: 'Poissons marinés aux herbes fraîches, vinaigrette citronnée', prix: 18 },
      { id: 'e2', nom: 'Tulipe Gourmande', description: 'Présentation originale en tulipe, garniture de saison', prix: 18 },
      { id: 'e3', nom: 'Tataki de Bœuf', description: 'Bœuf légèrement saisi, sauce ponzu maison, roquette', prix: 18 },
      { id: 'e4', nom: 'Assiette Estivale', description: 'Fraîcheur de saison, légumes du marché et produits locaux', prix: 16 },
      { id: 'e5', nom: 'Déclinaison de Tomates', description: 'Tomates de variétés, burrata, basilic frais', prix: 16 },
      { id: 'e6', nom: 'Gaspacho', description: 'Gaspacho maison, fraîcheur et légèreté', prix: 16 },
    ]
  },
  {
    id: 'plats',
    titre: 'Nos Spécialités Poissons',
    emoji: '🐟',
    items: [
      { id: 'p1', nom: 'Poisson Entier à la Plancha', description: 'Pêche du jour, cuisson à la plancha, légumes de saison', prix: 24 },
      { id: 'p2', nom: 'Parillade de la Mer', description: 'Assortiment de poissons et fruits de mer grillés à la plancha', prix: 26, tag: 'Signature' },
      { id: 'p3', nom: 'Assortiment de Poissons Plancha', description: 'Sélection du jour cuits à la plancha, jus de citron et herbes', prix: 25 },
      { id: 'p4', nom: 'Gambas Grillées', description: 'Gambas entières grillées, beurre à l\'ail et persil', prix: 26 },
      { id: 'p5', nom: 'Pot-au-Feu de la Mer', description: 'Notre plat emblématique : poissons nobles et légumes en bouillon parfumé', prix: 32, tag: 'Spécialité' },
      { id: 'p6', nom: 'Suggestion du Chef', description: 'Selon les arrivages du marché — demandez en salle', prix: null, prixTexte: 'Selon arrivage (+5€ au menu)' },
    ]
  },
  {
    id: 'viandes',
    titre: 'Pour les Carnivores',
    emoji: '🥩',
    items: [
      { id: 'v1', nom: 'Ris d\'Agneau', description: 'Ris d\'agneau poêlés, jus lié aux herbes, garniture du moment', prix: 25 },
      { id: 'v2', nom: 'Magret de Canard', description: 'Magret rosé, sauce au miel et thym, légumes de saison', prix: 25 },
      { id: 'v3', nom: 'Parillade de Viandes', description: 'Assortiment de viandes grillées au feu de bois', prix: 26 },
    ]
  },
  {
    id: 'desserts',
    titre: 'Desserts',
    emoji: '🍮',
    items: [
      { id: 'd1', nom: 'Dessert du Moment', description: 'Création de notre chef pâtissier selon la saison', prix: 10 },
      { id: 'd2', nom: 'Tarte aux Fruits', description: 'Tarte fine de saison, crème pâtissière légère', prix: 10 },
      { id: 'd3', nom: 'Bolet Chocolat Blanc-Passion', description: 'Mousse chocolat blanc, insert fruit de la passion, biscuit cacao', prix: 10 },
      { id: 'd4', nom: 'Verrine Eton Mess', description: 'Meringue, crème fouettée, fraises fraîches', prix: 10 },
      { id: 'd5', nom: 'Lingot Chocolat', description: 'Moelleux intense au chocolat noir, cœur coulant', prix: 10 },
      { id: 'd6', nom: 'Fromages Locaux', description: 'Sélection de fromages de l\'Aveyron, confiture maison', prix: 11 },
      { id: 'd7', nom: 'Coupe Glacée', description: 'Au choix : parfum du moment ou classique vanille', prix: 10 },
    ]
  },
  {
    id: 'enfants',
    titre: 'Menu P\'tit Pote',
    emoji: '👦',
    items: [
      { id: 'en1', nom: 'Menu Enfant (jusqu\'à 12 ans)', description: 'Entrée + plat + dessert adaptés aux petits', prix: 12 },
    ]
  }
];

export const vinsData = [
  { nom: 'Vin Blanc', desc: 'Sélection du moment', prix: '~5€' },
  { nom: 'Vin Rosé', desc: 'Rosé de Provence', prix: '~5€' },
  { nom: 'Vin Rouge', desc: 'Cépages du Sud-Ouest', prix: '~5€' },
];
