import { Link } from 'react-router-dom';
import { useBusinessHours, HORAIRES_ETE, HORAIRES_SAISON, JOURS } from '../../hooks/useBusinessHours';
import { OpenStatusBadge } from '../../components/base/OpenStatusBadge';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

const GOOGLE_MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.1!2d3.0768971!3d44.0962136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b24bfcc6f9f131%3A0xbbdd9e5593a1d5a5!2sRestaurant%20%C2%AB%20DES%20POTES%20AU%20FEU%20%C2%BB!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr`;

const GOOGLE_MAPS_URL = `https://www.google.com/maps/place/Restaurant+%C2%AB+DES+POTES+AU+FEU+%C2%BB/@44.0962136,3.0768971,17z/data=!3m2!4b1!5s0x12b24b21bd61e075:0x906d7ce6c9d59e3f!4m6!3m5!1s0x12b24bfcc6f9f131:0xbbdd9e5593a1d5a5!8m2!3d44.0962136!4d3.079472!16s%2Fg%2F11t_nh5cnn`;

export default function Contact() {
  const { nextInfo, isEteSaison } = useBusinessHours();
  const ref = useScrollReveal();
  const horaires = isEteSaison ? HORAIRES_ETE : HORAIRES_SAISON;

  return (
    <div className="contact-page" ref={ref}>
      {/* Schema.org Restaurant */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Des Potes au Feu",
        "description": "Restaurant bistronomique spécialiste du poisson à Millau, Aveyron",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "20 Boulevard Richard",
          "addressLocality": "Millau",
          "postalCode": "12100",
          "addressRegion": "Aveyron",
          "addressCountry": "FR"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 44.0962136, "longitude": 3.079472 },
        "url": "https://despotesaufeu.fr",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "398" },
        "servesCuisine": ["Poissons", "Fruits de mer", "Bistronomique"],
        "priceRange": "€€",
        "openingHours": ["Mo-Fr 12:00-14:00", "Tu-Fr 19:00-21:30"]
      })}} />

      {/* HERO */}
      <section className="contact__hero">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=80" alt="Façade restaurant" />
        <div className="contact__hero-overlay" />
        <div className="contact__hero-content">
          <div className="section-label" style={{ color: 'var(--or)' }}>Nous trouver</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>Contact & Accès</h1>
          <div style={{ marginTop: 16 }}>
            <OpenStatusBadge />
            {nextInfo && <span className="contact__hero-next">· {nextInfo}</span>}
          </div>
        </div>
      </section>

      {/* SAISON BAR */}
      <div className="contact__seasonbar">
        <div className="container">
          <span>
            Horaires actuels :{' '}
            <strong>{isEteSaison ? '☀️ Été (juillet–août)' : '🍂 Hors saison'}</strong>
          </span>
        </div>
      </div>

      <div className="container">
        <div className="contact__grid">
          {/* INFOS */}
          <div className="contact__infos reveal">
            <div className="contact__card">
              <h3>📍 Adresse</h3>
              <p>20 Boulevard Richard<br />12100 Millau, Aveyron</p>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener" className="contact__map-btn">
                Ouvrir dans Google Maps →
              </a>
            </div>

            <div className="contact__card">
              <h3>📞 Téléphone</h3>
              <a href="tel:+33XXXXXXXXX" className="contact__phone">
                Numéro à configurer
              </a>
              <p className="contact__phone-note">Cliquable sur mobile · Du mardi au vendredi</p>
            </div>

            <div className="contact__card">
              <h3>💳 Moyens de paiement</h3>
              <div className="contact__paiements">
                {['Carte bancaire', 'American Express', 'Chèque', 'Espèces'].map(p => (
                  <span key={p} className="contact__paiement-badge">{p}</span>
                ))}
              </div>
            </div>

            <div className="contact__card">
              <h3>🏠 Le restaurant</h3>
              <div className="contact__infos-list">
                <div className="contact__info-row"><span>Capacité salle</span><strong>40 couverts</strong></div>
                <div className="contact__info-row"><span>Terrasse ombragée</span><strong>40 couverts</strong></div>
                <div className="contact__info-row"><span>Ambiance</span><strong>Contemporaine, jazzy</strong></div>
              </div>
            </div>

            <div className="contact__card">
              <h3>🌐 Retrouvez-nous</h3>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener" className="contact__social-btn">
                  Facebook
                </a>
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener" className="contact__social-btn">
                  Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* HORAIRES */}
          <div className="contact__horaires reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="section-label">Planning</div>
            <h2 className="section-title" style={{ marginBottom: 28 }}>Horaires d'ouverture</h2>

            <table className="contact__table">
              <thead>
                <tr>
                  <th>Jour</th>
                  <th>Midi</th>
                  <th>Soir</th>
                </tr>
              </thead>
              <tbody>
                {JOURS.map((jour, dayIdx) => {
                  const h = horaires[dayIdx];
                  const isClosed = h?.ferme;
                  const today = new Date().getDay() === dayIdx;
                  return (
                    <tr key={jour} className={`${isClosed ? 'ferme' : ''} ${today ? 'today' : ''}`}>
                      <td>
                        {jour}
                        {today && <span className="contact__today-badge">aujourd'hui</span>}
                      </td>
                      <td>
                        {isClosed ? '—' : h?.midi ? `${h.midi.open} – ${h.midi.close}` : '—'}
                      </td>
                      <td>
                        {isClosed ? '—' : h?.soir ? `${h.soir.open} – ${h.soir.close}` : '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="contact__status-live">
              <OpenStatusBadge />
              <p className="serif">Mis à jour automatiquement chaque minute</p>
            </div>

            {/* CTA */}
            <div className="contact__cta">
              <Link to="/reservation" className="btn-primary">Réserver une table</Link>
              <a href="tel:+33XXXXXXXXX" className="btn-vert">📞 Nous appeler</a>
            </div>
          </div>
        </div>

        {/* GOOGLE MAPS */}
        <div className="contact__map reveal">
          <div className="contact__map-header">
            <div className="section-label">Accès</div>
            <h2 className="section-title">Comment nous trouver</h2>
          </div>
          <div className="contact__map-frame">
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Des Potes au Feu — 20 Boulevard Richard, Millau"
            />
          </div>
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener" className="contact__itineraire-btn">
            Obtenir l'itinéraire →
          </a>
        </div>
      </div>
    </div>
  );
}
