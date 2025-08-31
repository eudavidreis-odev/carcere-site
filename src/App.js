import banner from './imgs/banner.jpeg';
import Agenda from './components/Agenda';
import InstagramFeed from './components/InstagramFeed';
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

const SpotifyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-spotify" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
  </svg>
);

function App() {
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
        <nav className="App-nav">
          <a href="#sobre">Sobre</a>
          <a href="#musica">Música</a>
          <a href="#agenda">Agenda</a>
          <a href="#contato">Contato</a>
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
        <section id="contato">
          <h2>Contato</h2>
          <p>Para shows e imprensa, entre em contato:</p>
          <a href="mailto:carcere_death@gmail.com">carcere_death@gmail.com</a>
        </section>
      </main>
      <footer>
        <div className="social-links">
          <a href="https://open.spotify.com/intl-pt/artist/2lwSEGS7WCKrT9ybi926yR" target="_blank" rel="noopener noreferrer">
            <SpotifyIcon />
          </a>
          <a href="https://www.instagram.com/carcere_mv?igsh=dTdjbGpuN3Z4Mm1y" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </div>
        <p>&copy; 2025 Carcere. Todos os direitos reservados.</p>
        <p>Desenvolvido por <a href="https://mrdev.dev.br" target="_blank" rel="noopener noreferrer">mrdev.dev.br</a></p>
      </footer>
    </div>
  );
}

export default App;
