import type { MenuCategory } from './../mocks/menu';
import { useState, useEffect } from 'react';
import { menuData } from '../mocks/menu';

// Pour connecter le vrai Google Sheet de Patrice :
// 1. Fichier → Publier sur le web → CSV
// 2. Remplacer GOOGLE_SHEET_URL par l'URL obtenue
// Format attendu : Catégorie | Nom | Description | Prix | Tag
const GOOGLE_SHEET_URL = ''; // Coller l'URL ici

interface UseMenuReturn {
  menu: MenuCategory[];
  loading: boolean;
  fromSheet: boolean;
}

export function useMenu(): UseMenuReturn {
  const [menu, setMenu] = useState<MenuCategory[]>(menuData);
  const [loading, setLoading] = useState(false);
  const [fromSheet, setFromSheet] = useState(false);

  useEffect(() => {
    if (!GOOGLE_SHEET_URL) return;

    const fetchSheet = async () => {
      setLoading(true);
      try {
        const res = await fetch(GOOGLE_SHEET_URL);
        const csv = await res.text();
        const parsed = parseCSV(csv);
        if (parsed.length > 0) {
          setMenu(parsed);
          setFromSheet(true);
        }
      } catch {
        // Fallback silencieux sur les données locales
        console.log('Google Sheet indisponible — données locales utilisées');
      } finally {
        setLoading(false);
      }
    };

    fetchSheet();
    const interval = setInterval(fetchSheet, 60_000); // Refresh toutes les 60s
    return () => clearInterval(interval);
  }, []);

  return { menu, loading, fromSheet };
}

function parseCSV(csv: string): MenuCategory[] {
  const lines = csv.split('\n').filter(Boolean);
  if (lines.length < 2) return [];

  const categoryMap = new Map<string, MenuCategory>();

  for (let i = 1; i < lines.length; i++) {
    const [categorie, nom, description, prix, tag] = lines[i].split(',').map(s => s.trim().replace(/^"|"$/g, ''));
    if (!categorie || !nom) continue;

    if (!categoryMap.has(categorie)) {
      categoryMap.set(categorie, {
        id: categorie.toLowerCase().replace(/\s+/g, '-'),
        titre: categorie,
        emoji: '🍽️',
        items: []
      });
    }

    categoryMap.get(categorie)!.items.push({
      id: `${i}`,
      nom,
      description: description || '',
      prix: prix ? parseFloat(prix) : null,
      tag: tag || undefined,
    });
  }

  return Array.from(categoryMap.values());
}
