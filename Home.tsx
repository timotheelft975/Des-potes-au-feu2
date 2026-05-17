import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Home.css';

const AVIS = [
  { texte: 'Allez-y les yeux fermés mais pas sans réserver. La cuisine est digne d\'un semi-gastronomique.', auteur: 'Pages Jaunes', note: 5 },
  { texte: 'Un moment parfait… tout y était. L\'accueil, les saveurs, l\'ambiance. On reviendra sans hésiter.', auteur: 'Styl\'Hair', note: 5 },
  { texte: 'Très bien accueilli. Le Pot-au-Feu de la Mer est exceptionnel. Un 10/10.', auteur: 'Séverine Balleux · Google', note: 5 },
  { texte: 'Plats de qualité. Service irréprochable. Une belle découverte à Millau.', auteur: 'Mappy', note: 5 },
  { texte: 'Le meilleur restaurant de poisson de la région. Patrice et Jérôme sont passionnés.', auteur: 'Google', note: 5 },
];

const PLATS_PHARES = [
  { nom: 'Pot-au-Feu de la Mer', desc: 'Notre plat emblématique : poissons nobles et légumes en bouillon parfumé', prix: '32€', tag: 'Spécialité', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80' },
  { nom: 'Parillade de la Mer', desc: 'Assortiment de poissons et fruits de mer grillés à la plancha', prix: '26€', tag: 'Signature', img: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80' },
  { nom: 'Gambas Grillées', desc: 'Gambas entières grillées, beurre à l\'ail et persil frais', prix: '26€', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80' },
  { nom: 'Magret de Canard', desc: 'Magret rosé, sauce au miel et thym, légumes de saison', prix: '25€', img: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80' },
];

export default function Home() {
  const ref = useScrollReveal();

  return (
    <div className="home" ref={ref}>
      {/* HERO */}
      <section className="home__hero">
        <div className="home__hero-bg">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85"
            alt="Terrasse du restaurant Des Potes au Feu"
          />
          <div className="home__hero-overlay" />
        </div>
        <div className="home__hero-content">
          <div className="home__hero-label">Restaurant Bistronomique · Millau · Aveyron</div>
          <h1 className="home__hero-title">
            Spécialiste du poisson<br />
            <em>à Millau</em>
          </h1>
          <p className="home__hero-sub">
            Depuis 1990, Patrice et Jérôme-David vous accueillent<br className="desktop-only" />
            dans une ambiance chaleureuse au cœur de l'Aveyron.
          </p>
          <div className="home__hero-actions">
            <Link to="/reservation" className="btn-primary">
              Réserver une table
            </Link>
            <Link to="/carte" className="btn-outline">
              Découvrir la carte
            </Link>
          </div>
        </div>
        <div className="home__hero-scroll">
          <span />
        </div>
      </section>

      {/* ABOUT */}
      <section className="home__about">
        <div className="container">
          <div className="home__about-grid">
            <div className="home__about-img reveal">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80"
                alt="Intérieur du restaurant"
              />
              <div className="home__about-badge">
                <span className="home__about-badge-num">4.8</span>
                <span className="home__about-badge-sub">★ sur Google</span>
              </div>
            </div>
            <div className="home__about-text reveal">
              <div className="section-label">Notre histoire</div>
              <h2 className="section-title">Des Potes au Feu</h2>
              <p className="home__about-body serif">
                À deux pas du Viaduc de Millau, notre restaurant vous propose
                une cuisine bistronomique centrée sur les produits de la mer — frais,
                de saison, cuisinés avec passion.
              </p>
              <p className="home__about-body serif" style={{ marginTop: 16 }}>
                Patrice en cuisine, Jérôme-David en salle : un duo complémentaire
                qui a repris et réinventé ce lieu en 2023 pour en faire le rendez-vous
                incontournable des amateurs de poisson en Aveyron.
              </p>
              <blockquote className="home__about-quote">
                "Allez-y les yeux fermés, mais pas sans réserver."
              </blockquote>
              <div className="home__about-stats">
                {[
                  { num: '40', label: 'Couverts' },
                  { num: '4.8', label: '/ 5 Google' },
                  { num: '398', label: 'Avis clients' },
                ].map(s => (
                  <div key={s.label} className="home__about-stat">
                    <span className="home__about-stat-num">{s.num}</span>
                    <span className="home__about-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATS PHARES */}
      <section className="home__menu">
        <div className="container">
          <div className="home__menu-header reveal">
            <div className="section-label">À la carte</div>
            <h2 className="section-title">Nos Plats Phares</h2>
            <p className="home__menu-sub serif">
              Produits frais, arrivages du marché, savoir-faire transmis.
              De 20€ à 38€ — formule complète disponible.
            </p>
          </div>
          <div className="home__menu-grid">
            {PLATS_PHARES.map((plat, i) => (
              <div key={plat.nom} className="home__plat reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="home__plat-img">
                  <img src={plat.img} alt={plat.nom} />
                  {plat.tag && <span className="home__plat-tag">{plat.tag}</span>}
                </div>
                <div className="home__plat-info">
                  <div className="home__plat-top">
                    <h3>{plat.nom}</h3>
                    <span className="home__plat-prix">{plat.prix}</span>
                  </div>
                  <p className="serif">{plat.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="home__menu-cta reveal">
            <Link to="/carte" className="btn-vert">Voir la carte complète</Link>
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section className="home__avis">
        <div className="home__avis-bg">
          <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1400&q=75" alt="" />
          <div className="home__avis-overlay" />
        </div>
        <div className="container home__avis-inner">
          <div className="home__avis-header reveal">
            <div className="section-label" style={{ color: 'var(--or)' }}>Ils nous font confiance</div>
            <h2 className="section-title" style={{ color: '#fff' }}>Ce qu'ils en disent</h2>
          </div>
          <div className="home__avis-grid">
            {AVIS.slice(0, 3).map((a, i) => (
              <div key={i} className="home__avis-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="home__avis-stars">{'★'.repeat(a.note)}</div>
                <p className="serif home__avis-texte">"{a.texte}"</p>
                <span className="home__avis-auteur">— {a.auteur}</span>
              </div>
            ))}
          </div>
          <div className="home__avis-cta reveal">
            <Link to="/avis" className="btn-outline">Voir tous les avis</Link>
          </div>
        </div>
      </section>

      {/* CTA RÉSERVATION */}
      <section className="home__cta">
        <div className="container">
          <div className="home__cta-inner reveal">
            <div className="section-label">Réservation en ligne</div>
            <h2 className="section-title">Une table vous attend</h2>
            <p className="serif home__cta-sub">
              Confirmation immédiate · Rappel SMS la veille · Zéro no-show
            </p>
            <div className="home__cta-actions">
              <Link to="/reservation" className="btn-primary">Réserver en ligne</Link>
              <a href="tel:+33XXXXXXXXX" className="btn-outline" style={{ color: 'var(--vert)', borderColor: 'var(--vert)' }}>
                📞 Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
