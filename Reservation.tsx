import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Reservation.css';

// Remplacer par l'URL Calendly de Patrice quand il crée son compte
// Ex: https://calendly.com/despotesaufeu/reservation
const CALENDLY_URL = 'https://calendly.com/despotesaufeu/reservation';

export default function Reservation() {
  const [showCalendly, setShowCalendly] = useState(false);
  const ref = useScrollReveal();

  return (
    <div className="resa-page" ref={ref}>
      {/* HERO */}
      <section className="resa__hero">
        <img src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1400&q=80" alt="Table dressée au restaurant" />
        <div className="resa__hero-overlay" />
        <div className="resa__hero-content">
          <div className="section-label" style={{ color: 'var(--or)' }}>Votre table</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>Réserver</h1>
        </div>
      </section>

      {/* INFO BAR */}
      <div className="resa__infobar">
        <div className="container resa__infobar-inner">
          <div className="resa__info">
            <span>📅</span>
            <div><strong>Réservation instantanée</strong><span>Créneau confirmé en temps réel</span></div>
          </div>
          <div className="resa__info-sep" />
          <div className="resa__info">
            <span>📱</span>
            <div><strong>Confirmation SMS</strong><span>Reçue immédiatement après réservation</span></div>
          </div>
          <div className="resa__info-sep" />
          <div className="resa__info">
            <span>🔔</span>
            <div><strong>Rappel automatique</strong><span>SMS la veille de votre venue</span></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="resa__grid">
          {/* WIDGET CALENDLY */}
          <div className="resa__calendly reveal">
            <div className="resa__calendly-header">
              <div className="section-label">Réservation en ligne</div>
              <h2 className="section-title">Choisissez votre créneau</h2>
            </div>

            {!showCalendly ? (
              <div className="resa__calendly-placeholder">
                <div className="resa__placeholder-icon">📅</div>
                <h3>Réservez votre table en ligne</h3>
                <p className="serif">
                  Choisissez votre date, votre heure et votre nombre de couverts.
                  Confirmation immédiate par SMS.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => setShowCalendly(true)}
                >
                  Voir les créneaux disponibles
                </button>
              </div>
            ) : (
              <div className="resa__calendly-frame">
                <iframe
                  src={CALENDLY_URL}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Réservation en ligne — Des Potes au Feu"
                />
                <p className="resa__calendly-fallback">
                  Si le widget ne s'affiche pas,{' '}
                  <a href={CALENDLY_URL} target="_blank" rel="noopener">
                    cliquez ici pour réserver
                  </a>
                  {' '}ou appelez-nous directement.
                </p>
              </div>
            )}
          </div>

          {/* INFOS PRATIQUES */}
          <div className="resa__infos reveal" style={{ transitionDelay: '0.15s' }}>
            {/* Horaires */}
            <div className="resa__card">
              <h3>🕐 Horaires d'ouverture</h3>
              <div className="resa__horaires">
                <div className="resa__saison">
                  <span className="resa__saison-label">Été (juil–août)</span>
                  <table>
                    <tbody>
                      <tr><td>Lun–Ven</td><td>12h–14h · 19h–21h30</td></tr>
                      <tr><td>Samedi</td><td>19h–21h30 (soir)</td></tr>
                      <tr><td className="ferme">Dimanche</td><td className="ferme">Fermé</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="resa__saison">
                  <span className="resa__saison-label">Hors saison</span>
                  <table>
                    <tbody>
                      <tr><td>Lundi</td><td>12h–14h (midi)</td></tr>
                      <tr><td>Mar–Ven</td><td>12h–14h · 19h–21h30</td></tr>
                      <tr><td className="ferme">Sam & Dim</td><td className="ferme">Fermé</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Capacité */}
            <div className="resa__card">
              <h3>🪑 Capacité & groupes</h3>
              <div className="resa__infos-list">
                <div className="resa__info-row">
                  <span>Capacité salle</span>
                  <strong>40 couverts</strong>
                </div>
                <div className="resa__info-row">
                  <span>Terrasse ombragée</span>
                  <strong>40 couverts</strong>
                </div>
                <div className="resa__info-row">
                  <span>Groupes &gt; 10 pers.</span>
                  <strong>Par téléphone</strong>
                </div>
              </div>
            </div>

            {/* Téléphone */}
            <div className="resa__card resa__card--phone">
              <h3>📞 Réservation par téléphone</h3>
              <p className="serif">Pour les groupes ou si vous préférez nous parler directement :</p>
              <a href="tel:+33XXXXXXXXX" className="resa__phone-btn">
                Numéro à configurer
              </a>
            </div>

            {/* Bénéfices */}
            <div className="resa__card resa__card--benefits">
              <h3>✨ Pourquoi réserver en ligne ?</h3>
              <ul className="resa__benefits">
                <li>
                  <span className="resa__benefit-icon">📉</span>
                  <div>
                    <strong>No-shows -30 à 40%</strong>
                    <p>Les rappels SMS automatiques font toute la différence</p>
                  </div>
                </li>
                <li>
                  <span className="resa__benefit-icon">🔔</span>
                  <div>
                    <strong>Notification sur votre téléphone</strong>
                    <p>Patrice est alerté dès qu'une réservation est prise</p>
                  </div>
                </li>
                <li>
                  <span className="resa__benefit-icon">🔒</span>
                  <div>
                    <strong>Créneaux auto-bloqués</strong>
                    <p>Impossible de sur-réserver — le planning est toujours juste</p>
                  </div>
                </li>
                <li>
                  <span className="resa__benefit-icon">⭐</span>
                  <div>
                    <strong>Avis Google automatisés</strong>
                    <p>Un SMS demande un avis après chaque service</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
