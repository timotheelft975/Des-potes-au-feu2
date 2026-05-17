import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { OpenStatusBadge } from '../base/OpenStatusBadge';
import './Navbar.css';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/carte', label: 'La Carte' },
  { to: '/avis', label: 'Avis' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav className={`navbar ${scrolled || !isHome ? 'navbar--solid' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <span className="navbar__logo-main">Des Potes au Feu</span>
            <span className="navbar__logo-sub">Restaurant · Millau</span>
          </Link>

          <div className="navbar__center">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`navbar__link ${location.pathname === l.to ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="navbar__right">
            <OpenStatusBadge compact />
            <Link to="/reservation" className="navbar__cta">
              Réserver
            </Link>
            <button
              className={`navbar__burger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        <div className="navbar__mobile-inner">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="navbar__mobile-link">
              {l.label}
            </Link>
          ))}
          <Link to="/reservation" className="btn-primary" style={{ marginTop: 8, justifyContent: 'center' }}>
            Réserver une table
          </Link>
          <div style={{ marginTop: 16 }}>
            <OpenStatusBadge />
          </div>
        </div>
      </div>
    </>
  );
}
