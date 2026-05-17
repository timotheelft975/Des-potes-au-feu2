import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMenu } from '../../hooks/useMenu';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Carte.css';

export default function Carte() {
  const { menu, loading, fromSheet } = useMenu();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const ref = useScrollReveal();

  const filtered = activeCategory ? menu.filter(c => c.id === activeCategory) : menu;

  return (
    <div className="carte" ref={ref}>
      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Menu",
        "name": "Carte Des Potes au Feu",
        "inLanguage": "fr",
        "hasMenuSection": menu.map(c => ({
          "@type": "MenuSection",
          "name": c.titre,
          "hasMenuItem": c.items.map(i => ({
            "@type": "MenuItem",
            "name": i.nom,
            "description": i.description,
            "offers": { "@type": "Offer", "price": i.prix ?? "Variable", "priceCurrency": "EUR" }
          }))
        }))
      })}} />

      {/* HERO */}
      <section className="carte__hero">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80" alt="Cuisine gastronomique" />
        <div className="carte__hero-overlay" />
        <div className="carte__hero-content">
          <div className="section-label" style={{ color: 'var(--or)' }}>Le menu</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>Notre Carte</h1>
        </div>
      </section>

      {/* INFO BAR */}
      <div className="carte__infobar">
        <div className="container carte__infobar-inner">
          <div className="carte__info-item">
            <span className="carte__info-icon">🍽️</span>
            <div>
              <strong>Formule complète</strong>
              <span>Entrée · Plat · Dessert — <b>38€</b></span>
            </div>
          </div>
          <div className="carte__info-sep" />
          <div className="carte__info-item">
            <span className="carte__info-icon">🐟</span>
            <div>
              <strong>Produits frais</strong>
              <span>Arrivages du marché · De saison</span>
            </div>
          </div>
          <div className="carte__info-sep" />
          <div className="carte__info-item">
            <span className="carte__info-icon">💶</span>
            <div>
              <strong>Tarifs</strong>
              <span>Menu enfant 12€ · Plats de 10€ à 38€</span>
            </div>
          </div>
          {fromSheet && (
            <>
              <div className="carte__info-sep" />
              <div className="carte__info-item">
                <span className="carte__info-icon">✅</span>
                <div><strong>Menu en direct</strong><span>Mis à jour par Patrice</span></div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* MENU */}
      <div className="container">
        {/* FILTRES */}
        <div className="carte__filters reveal">
          <button
            className={`carte__filter-btn ${!activeCategory ? 'active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            Tout voir
          </button>
          {menu.map(c => (
            <button
              key={c.id}
              className={`carte__filter-btn ${activeCategory === c.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(c.id)}
            >
              {c.emoji} {c.titre}
            </button>
          ))}
        </div>

        {loading && (
          <div className="carte__loading">Mise à jour du menu…</div>
        )}

        {/* CATEGORIES */}
        {filtered.map(cat => (
          <section key={cat.id} className="carte__categorie reveal">
            <div className="carte__cat-header">
              <span className="carte__cat-emoji">{cat.emoji}</span>
              <h2>{cat.titre}</h2>
              <div className="carte__cat-line" />
            </div>
            <div className="carte__items-grid">
              {cat.items.map(item => (
                <div key={item.id} className={`carte__item ${item.tag ? 'carte__item--tagged' : ''}`}>
                  <div className="carte__item-top">
                    <div className="carte__item-nom">
                      {item.nom}
                      {item.tag && <span className="carte__item-tag">{item.tag}</span>}
                    </div>
                    <div className="carte__item-prix">
                      {item.prix !== null ? `${item.prix}€` : item.prixTexte ?? '—'}
                    </div>
                  </div>
                  <p className="carte__item-desc serif">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* VINS */}
        <section className="carte__vins reveal">
          <div className="carte__cat-header">
            <span className="carte__cat-emoji">🍷</span>
            <h2>Vins au Verre</h2>
            <div className="carte__cat-line" />
          </div>
          <div className="carte__vins-grid">
            {[
              { nom: 'Blanc du moment', desc: 'Sélection maison', prix: '~5€' },
              { nom: 'Rosé de Provence', desc: 'Frais et fruité', prix: '~5€' },
              { nom: 'Rouge du Sud-Ouest', desc: 'Charpenté, tanins soyeux', prix: '~5€' },
            ].map(v => (
              <div key={v.nom} className="carte__vin">
                <span className="carte__vin-nom">{v.nom}</span>
                <span className="carte__vin-sep" />
                <span className="carte__vin-desc serif">{v.desc}</span>
                <span className="carte__vin-prix">{v.prix}</span>
              </div>
            ))}
          </div>
          <p className="carte__allergenes">
            ⚠️ Liste des allergènes consultable au bar · Produits frais selon arrivages
          </p>
        </section>

        {/* CTA */}
        <div className="carte__cta reveal">
          <p className="serif">Envie de réserver votre table ?</p>
          <Link to="/reservation" className="btn-primary">Réserver une table</Link>
        </div>
      </div>
    </div>
  );
}
