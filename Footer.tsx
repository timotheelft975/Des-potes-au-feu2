import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">Des Potes au Feu</div>
            <p className="footer__tagline">Spécialiste du poisson à Millau</p>
            <p className="footer__desc">
              Un bistrot bistronomique chaleureux au cœur de l'Aveyron,
              où Patrice et Jérôme-David vous accueillent depuis 1990.
            </p>
          </div>

          <div className="footer__col">
            <h4>Navigation</h4>
            <nav>
              <Link to="/">Accueil</Link>
              <Link to="/carte">La Carte</Link>
              <Link to="/avis">Avis</Link>
              <Link to="/reservation">Réserver</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer__col">
            <h4>Horaires</h4>
            <div className="footer__horaires">
              <div>
                <span className="footer__season">Été (juil–août)</span>
                <p>Lun–Ven : midi & soir</p>
                <p>Samedi : soir uniquement</p>
                <p>Dimanche : fermé</p>
              </div>
              <div style={{ marginTop: 12 }}>
                <span className="footer__season">Hors saison</span>
                <p>Mar–Ven : midi & soir</p>
                <p>Lundi : midi seulement</p>
                <p>Sam & Dim : fermé</p>
              </div>
            </div>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <p>20 Boulevard Richard<br />12100 Millau, Aveyron</p>
            <a href="tel:+33XXXXXXXXX" className="footer__phone">
              📞 Numéro à configurer
            </a>
            <div className="footer__links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener">
                Facebook
              </a>
              <a href="https://www.google.com/maps/place/Restaurant+«+DES+POTES+AU+FEU+»/@44.0962136,3.0768971,17z" target="_blank" rel="noopener">
                Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Des Potes au Feu — Restaurant Millau</p>
          <p>20 Boulevard Richard, 12100 Millau · Aveyron</p>
        </div>
      </div>
    </footer>
  );
}
