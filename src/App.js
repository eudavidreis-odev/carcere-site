import { useState } from 'react';
import banner from './imgs/banner.jpeg';
import Agenda from './components/Agenda';
import InstagramFeed from './components/InstagramFeed';
import { FaSpotify, FaInstagram, FaWhatsapp, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './styles/base.css';
import './styles/header.css';
import './styles/main.css';
import './styles/footer.css';
import './styles/responsive.css';

const tourDates = [
  { date: '25/10/2025', city: 'São Paulo, SP', place: 'Manifesto Bar', ticketsUrl: '#' },
  { date: '15/11/2025', city: 'Curitiba, PR', place: 'Tork \'n Roll', ticketsUrl: '#' },
  { date: '06/12/2025', city: 'Belo Horizonte, MG', place: 'Mister Rock', ticketsUrl: '#' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <header 
        className="App-header"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`App-nav ${isMenuOpen ? 'mobile-nav' : ''}`}>
          <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          <a href="#musica" onClick={() => setIsMenuOpen(false)}>Música</a>
          <a href="#agenda" onClick={() => setIsMenuOpen(false)}>Agenda</a>
          <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
        </nav>
        <div className="hero">
          <h1>CARCERE</h1>
          <p>DEATHCORE</p>
        </div>
      </header>
      <main>
        <section id="sobre">
          <h2>Sobre Nós</h2>
          <p>A Carcere é uma banda de Metal nascida no coração do Vale do Paraíba, direto de Pindamonhangaba/SP, trazendo no som a fúria das ruas, o peso da realidade e a brutalidade sonora que arrasta tudo por onde passa.</p>
        </section>
        <section id="musica">
          <h2>Música</h2>
          <div className="music-player">
            <iframe title="Spotify Embed" data-testid="embed-iframe" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/artist/2lwSEGS7WCKrT9ybi926yR?utm_source=generator" width="100%" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="spotify-embed"></iframe>
          </div>
        </section>
        <InstagramFeed />
        <Agenda shows={tourDates} />
      </main>
      <footer>
        <section id="contato">
          <h2>Contato</h2>
          <p>Para shows e imprensa, entre em contato:</p>
          <div className="contact-links">
            <a href="https://www.instagram.com/carcere_mv?igsh=dTdjbGpuN3Z4Mm1y" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="instagram" />
            </a>
            <a href="https://open.spotify.com/intl-pt/artist/2lwSEGS7WCKrT9ybi926yR" target="_blank" rel="noopener noreferrer">
              <FaSpotify className="spotify" />
            </a>
            <a href="mailto:carceredeath@gmail.com">
              <FaEnvelope className="email" />
            </a>
            <a href="https://wa.me/12988071214?text=Oi%20Jocca,%20vi%20o%20site%20de%20vocês%20e%20estou%20entrando%20em%20contato!" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="whatsapp" />
            </a>
            <a href="https://wa.me/12988233799?text=Oi%20Chuck,%20vi%20o%20site%20de%20vocês%20e%20estou%20entrando%20em%20contato!" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="whatsapp inverted" />
            </a>
          </div>
        </section>
        <p>&copy; 2025 Carcere. Todos os direitos reservados.</p>
        <p>Desenvolvido por <a href="https://mrdev.dev.br" target="_blank" rel="noopener noreferrer">mrdev.dev.br</a></p>
      </footer>
    </div>
  );
}

export default App;
