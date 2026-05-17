import { useState, useEffect } from 'react';

export type OpenStatus = 'ouvert' | 'ferme-bientot' | 'ferme';

interface HoraireJour {
  midi?: { open: string; close: string };
  soir?: { open: string; close: string };
  ferme?: boolean;
}

// Horaires été (juillet–août)
const horairesEte: Record<number, HoraireJour> = {
  0: { ferme: true }, // Dimanche
  1: { midi: { open: '12:00', close: '14:00' }, soir: { open: '19:00', close: '21:30' } },
  2: { midi: { open: '12:00', close: '14:00' }, soir: { open: '19:00', close: '21:30' } },
  3: { midi: { open: '12:00', close: '14:00' }, soir: { open: '19:00', close: '21:30' } },
  4: { midi: { open: '12:00', close: '14:00' }, soir: { open: '19:00', close: '21:30' } },
  5: { midi: { open: '12:00', close: '14:00' }, soir: { open: '19:00', close: '21:30' } },
  6: { soir: { open: '19:00', close: '21:30' } }, // Samedi : soir seulement
};

// Horaires hors-saison
const horairesSaison: Record<number, HoraireJour> = {
  0: { ferme: true },
  1: { midi: { open: '12:00', close: '14:00' } },
  2: { midi: { open: '12:00', close: '14:00' }, soir: { open: '19:00', close: '21:30' } },
  3: { midi: { open: '12:00', close: '14:00' }, soir: { open: '19:00', close: '21:30' } },
  4: { midi: { open: '12:00', close: '14:00' }, soir: { open: '19:00', close: '21:30' } },
  5: { midi: { open: '12:00', close: '14:00' }, soir: { open: '19:00', close: '21:30' } },
  6: { ferme: true },
};

function isEte(date: Date): boolean {
  const month = date.getMonth() + 1; // 1-12
  return month === 7 || month === 8;
}

function toMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function getCurrentMinutes(date: Date): number {
  return date.getHours() * 60 + date.getMinutes();
}

export interface BusinessHoursResult {
  status: OpenStatus;
  label: string;
  nextInfo: string;
  isEteSaison: boolean;
  horairesDuJour: HoraireJour;
}

export function useBusinessHours(): BusinessHoursResult {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const ete = isEte(now);
  const horaires = ete ? horairesEte : horairesSaison;
  const dayOfWeek = now.getDay();
  const currentMinutes = getCurrentMinutes(now);
  const jour = horaires[dayOfWeek];

  let status: OpenStatus = 'ferme';
  let label = 'Fermé';
  let nextInfo = '';

  if (!jour?.ferme) {
    const creneaux = [jour?.midi, jour?.soir].filter(Boolean);
    
    for (const creneau of creneaux) {
      if (!creneau) continue;
      const openMin = toMinutes(creneau.open);
      const closeMin = toMinutes(creneau.close);
      
      if (currentMinutes >= openMin && currentMinutes < closeMin) {
        if (closeMin - currentMinutes <= 30) {
          status = 'ferme-bientot';
          label = 'Ferme bientôt';
          nextInfo = `Ferme à ${creneau.close}`;
        } else {
          status = 'ouvert';
          label = 'Ouvert';
          nextInfo = `Jusqu\'à ${creneau.close}`;
        }
        break;
      }
    }
    
    if (status === 'ferme') {
      // Trouver le prochain créneau du jour
      for (const creneau of creneaux) {
        if (!creneau) continue;
        const openMin = toMinutes(creneau.open);
        if (currentMinutes < openMin) {
          nextInfo = `Ouvre à ${creneau.open}`;
          break;
        }
      }
      if (!nextInfo) {
        nextInfo = 'Ouvre demain';
      }
    }
  } else {
    nextInfo = 'Fermé aujourd\'hui';
  }

  return {
    status,
    label,
    nextInfo,
    isEteSaison: ete,
    horairesDuJour: jour,
  };
}

export const HORAIRES_ETE = horairesEte;
export const HORAIRES_SAISON = horairesSaison;
export const JOURS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
