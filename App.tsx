import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/feature/Navbar';
import { Footer } from './components/feature/Footer';
import Home from './pages/home/Home';
import Carte from './pages/carte/Carte';
import Avis from './pages/avis/Avis';
import Reservation from './pages/reservation/Reservation';
import Contact from './pages/contact/Contact';
import './styles/globals.css';

function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, padding: 40, textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '4rem', color: 'var(--vert)' }}>404</h1>
      <p style={{ color: 'var(--gris)', fontSize: '1.1rem' }}>Cette page n'existe pas.</p>
      <a href="/" className="btn-primary">Retour à l'accueil</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
