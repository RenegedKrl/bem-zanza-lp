import { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  CheckCircle,
  Truck,
  Heart,
  Star,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Shirt,
  Users,
  Play,
  MapPin,
  Clock,
  Phone,
  Menu
} from 'lucide-react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % looks.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + looks.length) % looks.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "5511917557412"; 
  const msgAtacado = "Olá! Gostaria de comprar no atacado. Como funciona?";
  const msgCatalogo = "Olá! Gostaria de receber o catálogo com as peças disponíveis hoje, por favor.";
  const msgConsultora = "Olá! Quero revender as peças da Bem Zânza e gostaria de falar com uma consultora sobre as condições especiais.";
  const msgContato = "Olá! Gostaria de entrar em contato para tirar algumas dúvidas.";
  const msgFlutuante = "Olá! Estou no site da Bem Zânza e gostaria de atendimento.";
  
  const wpAtacado = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msgAtacado)}`;
  const wpCatalogo = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msgCatalogo)}`;
  const wpConsultora = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msgConsultora)}`;
  const wpContato = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msgContato)}`;
  const wpFlutuante = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msgFlutuante)}`;

  const looks = [
    { id: 1, image: '/1.jpg', alt: 'Look Bem Zânza 1' },
    { id: 2, image: '/2.jpg', alt: 'Look Bem Zânza 2' },
    { id: 3, image: '/3.jpg', alt: 'Look Bem Zânza 3' },
    { id: 4, image: '/4.jpg', alt: 'Look Bem Zânza 4' },
    { id: 5, image: '/5.jpg', alt: 'Look Bem Zânza 5' },
    { id: 6, image: '/6.jpg', alt: 'Look Bem Zânza 6' },
    { id: 7, image: '/7.jpg', alt: 'Look Bem Zânza 7' },
    { id: 8, image: '/8.jpg', alt: 'Look Bem Zânza 8' }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'shadow-md' : ''}`}>
        <div className="container">
          <div className="logo-container">
            <img src="/logo.png" alt="Bem Zânza" className="logo-img" />
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</a>
            <a href="#colecao" onClick={() => setMobileMenuOpen(false)}>Coleção</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre Nós</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="container">
          <div className="hero-content animate-fade-in">
            <span className="hero-tag">✨ Atacado e Varejo</span>
            <h1>Moda com estilo, conforto e <span style={{color: 'var(--primary-red)'}}>personalidade</span></h1>
            <p>Descubra nossa nova coleção. Peças versáteis e confortáveis para o seu dia a dia. Pedido mínimo de 6 peças para atacado!</p>
            <div className="hero-buttons">
              <a href={wpAtacado} target="_blank" rel="noreferrer" className="btn btn-primary">
                Comprar no Atacado
              </a>
              <a href="#colecao" className="btn btn-outline">
                Ver Coleção Completa
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper animate-fade-in delay-200">
            <div className="hero-decor"></div>
            <img 
              src="/6.jpg" 
              alt="Modelo Bem Zânza" 
              className="hero-main-image"
              style={{
                width: '100%', 
                height: '100%',
                maxHeight: '600px',
                objectFit: 'cover',
                objectPosition: 'top center',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 1,
                position: 'relative',
                display: 'block'
              }}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={28} />
              </div>
              <div className="feature-text">
                <h3>Conforto Diário</h3>
                <p>Moda casual pensada para o seu bem-estar o dia todo.</p>
              </div>
            </div>
            <div className="feature-card delay-100">
              <div className="feature-icon">
                <CheckCircle size={28} />
              </div>
              <div className="feature-text">
                <h3>Qualidade Premium</h3>
                <p>Tecidos selecionados e acabamento impecável em cada peça.</p>
              </div>
            </div>
            <div className="feature-card delay-200">
              <div className="feature-icon">
                <Truck size={28} />
              </div>
              <div className="feature-text">
                <h3>Envio para todo Brasil</h3>
                <p>Receba suas peças no conforto de casa ou na sua loja física.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section id="colecao" className="section products">
        <div className="container">
          <div className="section-header">
            <h2>Nosso Estilo</h2>
            <p>Conheça a essência da Bem Zânza. Peças versáteis, confortáveis e atemporais, perfeitas para compor looks incríveis no dia a dia.</p>
          </div>
          
          <div className="lookbook-grid">
            {looks.map((look, index) => (
              <div key={look.id} className="look-card" onClick={() => openLightbox(index)}>
                <div className="look-image-container">
                  {/* Se a imagem não carregar, mostra o placeholder */}
                  <img 
                    src={look.image} 
                    alt={look.alt} 
                    className="look-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="look-placeholder" style={{display: 'none'}}>
                    [Foto {look.id}]
                  </div>
                  <div className="look-overlay">
                    <Heart size={24} color="white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lookbook-action">
            <p>Quer ver as peças que temos disponíveis hoje?</p>
            <a href={wpCatalogo} target="_blank" rel="noreferrer" className="btn btn-primary">
              Ver Catálogo no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Pensou em renovar? A gente tem de tudo.</h2>
            <p>De looks casuais a peças essenciais para o seu negócio, renove seu estoque aqui.</p>
          </div>
          
          <div className="categories-grid">
            <div className="category-card">
              <h3 style={{ color: 'var(--primary-blue)' }}>Feminino</h3>
              <p>O sonho de toda mulher, armário sempre renovado.</p>
              <div className="category-img-wrapper">
                <img src="/2.jpg" alt="Feminino" />
              </div>
            </div>
            <div className="category-card">
              <h3 style={{ color: 'var(--primary-red)' }}>Moda Casual</h3>
              <p>Roupas versáteis para todos os gostos e idades.</p>
              <div className="category-img-wrapper">
                <img src="/3.jpg" alt="Moda Casual" />
              </div>
            </div>
            <div className="category-card">
              <h3 style={{ color: 'var(--primary-blue)' }}>Essenciais</h3>
              <p>Itens exclusivos para o seu guarda-roupa você encontra aqui.</p>
              <div className="category-img-wrapper">
                <img src="/4.jpg" alt="Essenciais" />
              </div>
            </div>
            <div className="category-card">
              <h3 style={{ color: 'var(--primary-red)' }}>Lançamentos</h3>
              <p>Peças incríveis para o seu look no dia a dia.</p>
              <div className="category-img-wrapper">
                <img src="/5.jpg" alt="Lançamentos" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2>Fundamentos de qualidade, parcerias e estilo</h2>
            <p>Uma relação que favorece o seu negócio, baseada em princípios.</p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <Shirt size={60} color="var(--primary-red)" strokeWidth={1.5} />
              <span className="stat-prefix">Mais de</span>
              <span className="stat-number" style={{ color: 'var(--primary-red)' }}>50.000</span>
              <span className="stat-suffix">peças enviadas anualmente</span>
            </div>
            <div className="stat-card">
              <ShoppingBag size={60} color="var(--primary-blue)" strokeWidth={1.5} />
              <span className="stat-prefix">Mais de</span>
              <span className="stat-number" style={{ color: 'var(--primary-blue)' }}>5.000</span>
              <span className="stat-suffix">revendedoras pelo Brasil</span>
            </div>
          </div>
          

        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Pronta para revender Moda Criativa?</h2>
            <p>💫 Pedido mínimo de apenas 6 peças no atacado. Garanta as melhores peças para suas clientes com condições especiais.</p>
            <a href={wpConsultora} target="_blank" rel="noreferrer" className="btn btn-primary cta-btn">
              Falar com Consultora Agora
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contato" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Venha nos visitar</h2>
            <p>Estamos esperando por você em nossa loja física no coração do Brás. Venha conhecer nossas peças de perto!</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info-container">
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <MapPin size={24} className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h3>Endereço</h3>
                  <p>Rua Eliza Whitaker • 59</p>
                  <p>Térreo: Rua-E / Loja-36T</p>
                  <p>Brás, São Paulo, SP - 03009-000</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <Clock size={24} className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h3>Horário de Funcionamento</h3>
                  <p>Segunda a Sexta: 08h às 18h</p>
                  <p>Sábado: 09h às 13h</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-wrapper" style={{ backgroundColor: '#25D366' }}>
                  <img src="/whatsapp.png" alt="WhatsApp" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
                </div>
                <div className="contact-details">
                  <h3>Contato</h3>
                  <p>WhatsApp: (11) 91755-7412</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-details social-networks">
                  <h3>Siga nossas Redes Sociais</h3>
                  <div className="social-links-contact">
                    <a href="https://www.instagram.com/bemzanza/" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                      <img src="/instagram.png" alt="Instagram" style={{ width: '24px', height: '24px' }} />
                    </a>
                    <a href="https://www.facebook.com/BemZanza" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-map">
              <iframe 
                src="https://maps.google.com/maps?q=Rua%20Eliza%20Whitaker%2059%20Sao%20Paulo&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border: 0, borderRadius: '20px', minHeight: '400px'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Bem Zânza"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="sobre" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <img src="/logo.png" alt="Bem Zânza" className="logo-img-footer" />
              <p>Moda feminina casual para o dia a dia. Vendemos no atacado em loja física e atendemos todo o Brasil com peças versáteis, confortáveis e acessíveis.</p>
              <div className="social-links">
                <a href="https://www.instagram.com/bemzanza/" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                  <img src="/instagram.png" alt="Instagram" style={{ width: '20px', height: '20px' }} />
                </a>
                <a href="https://www.facebook.com/BemZanza" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Links Úteis</h4>
              <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#colecao">Coleção</a></li>
                <li><a href="#sobre">Quem Somos</a></li>
                <li><a href={wpContato}>Contato</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Atendimento</h4>
              <ul>
                <li>Segunda a Sexta: 08h às 18h</li>
                <li>Sábado: 09h às 13h</li>
                <li><br/></li>
                <li><strong>📍 Loja Física</strong></li>
                <li>Rua Eliza Whitaker • 59</li>
                <li>Térreo: Rua-E / Loja-36T</li>
                <li>São Paulo, SP - 03009-000</li>
                <li><br/></li>
                <li>📦 Atacado: Mínimo 6 peças</li>
                <li>🚚 Enviamos para todo Brasil</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Bem Zânza. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href={wpFlutuante} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <img src="/whatsapp.png" alt="WhatsApp" style={{ width: '28px', height: '28px', filter: 'brightness(0) invert(1)' }} />
        <span className="whatsapp-text">Fale Conosco</span>
      </a>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          
          <button className="lightbox-nav prev" onClick={prevImage}>
            <ChevronLeft size={40} />
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={looks[selectedImageIndex].image} 
              alt={looks[selectedImageIndex].alt} 
            />
          </div>
          
          <button className="lightbox-nav next" onClick={nextImage}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
