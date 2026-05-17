import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Avis.css';

const AVIS = [
  {
    texte: 'Allez-y les yeux fermés mais pas sans réserver. La cuisine est digne d\'un semi-gastronomique, dans un cadre convivial et chaleureux.',
    auteur: 'Avis Pages Jaunes',
    note: 5,
    source: 'Pages Jaunes',
    initiales: 'PJ',
  },
  {
    texte: 'Cuisine digne d\'un semi-gastronomique, accueil parfait. Une belle surprise à Millau.',
    auteur: 'Styl\'Hair',
    note: 5,
    source: 'Google',
    initiales: 'SH',
  },
  {
    texte: 'Un moment parfait… tout y était. L\'accueil, les saveurs, l\'ambiance. On reviendra sans hésiter.',
    auteur: 'Styl\'Hair',
    note: 5,
    source: 'Google',
    initiales: 'SH',
  },
  {
    texte: 'Très bien accueilli dès l\'arrivée. Le Pot-au-Feu de la Mer est exceptionnel. Un vrai 10/10. Je recommande chaudement.',
    auteur: 'Séverine Balleux',
    note: 5,
    source: 'Google',
    date: 'janvier 2025',
    initiales: 'SB',
  },
  {
    texte: 'Plats de qualité. Service irréprochable. Une belle découverte à Millau que je conseille à tous les amateurs de poisson.',
    auteur: 'Avis Mappy',
    note: 5,
    source: 'Mappy',
    initiales: 'MA',
  },
];

export default function Avis() {
  const ref = useScrollReveal();

  return (
    <div className="avis-page" ref={ref}>
      {/* HERO */}
      <section className="avis__hero">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80" alt="Ambiance restaurant" />
        <div className="avis__hero-overlay" />
        <div className="avis__hero-content">
          <div className="section-label" style={{ color: 'var(--or)' }}>Ce qu'ils disent</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>Les Avis</h1>
          <div className="avis__hero-rating">
            <span className="avis__hero-stars">★★★★★</span>
            <span className="avis__hero-score">4.8</span>
            <span className="avis__hero-count">sur 398 avis Google</span>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="avis__statbar">
        <div className="container avis__statbar-inner">
          <div className="avis__stat">
            <strong>4.8</strong>
            <span>Note moyenne Google</span>
          </div>
          <div className="avis__stat-sep" />
          <div className="avis__stat">
            <strong>398</strong>
            <span>Avis Google</span>
          </div>
          <div className="avis__stat-sep" />
          <div className="avis__stat">
            <strong>100%</strong>
            <span>Recommanderaient</span>
          </div>
          <div className="avis__stat-sep" />
          <div className="avis__stat">
            <strong>1990</strong>
            <span>Depuis</span>
          </div>
        </div>
      </div>

      {/* AVIS GRID */}
      <section className="container">
        <div className="avis__header reveal">
          <div className="section-label">Témoignages</div>
          <h2 className="section-title">Ce que nos clients partagent</h2>
        </div>

        <div className="avis__grid">
          {AVIS.map((a, i) => (
            <div key={i} className="avis__card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="avis__card-top">
                <div className="avis__avatar">{a.initiales}</div>
                <div>
                  <div className="avis__auteur">{a.auteur}</div>
                  {a.date && <div className="avis__date">{a.date}</div>}
                  <div className="avis__stars">{'★'.repeat(a.note)}</div>
                </div>
                <div className="avis__source avis__source--{a.source.toLowerCase()}">{a.source}</div>
              </div>
              <blockquote className="avis__texte serif">"{a.texte}"</blockquote>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="avis__google-cta reveal">
          <div className="avis__google-cta-inner">
            <div>
              <h3>398 avis sur Google Maps</h3>
              <p className="serif">Rejoignez les clients satisfaits et partagez votre expérience</p>
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a
                href="https://www.google.com/maps/place/Restaurant+«+DES+POTES+AU+FEU+»/@44.0962136,3.0768971,17z"
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                Voir sur Google Maps
              </a>
              <Link to="/reservation" className="btn-vert">Réserver une table</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
