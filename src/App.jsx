import { useState, useEffect, useRef } from 'react';
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
  Menu,
  ShieldCheck
} from 'lucide-react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const carouselRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupSeen, setPopupSeen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const bubbleTimer = setTimeout(() => {
      setShowBubble(true);
    }, 10000);
    return () => clearTimeout(bubbleTimer);
  }, []);

  useEffect(() => {
    // Só permite o popup de saída após 10 segundos no site para não assustar o usuário
    let isReadyToExitIntent = false;
    const readyTimer = setTimeout(() => {
      isReadyToExitIntent = true;
    }, 10000);

    const handleMouseLeave = (e) => {
      // clientY <= 0 indica que o mouse subiu para a barra de endereços/abas
      if (isReadyToExitIntent && e.clientY <= 0 && !popupSeen) {
        setShowPopup(true);
        setPopupSeen(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Mostra automaticamente após 45 segundos se não tiver saído antes
    const timer = setTimeout(() => {
      if (!popupSeen) {
        setShowPopup(true);
        setPopupSeen(true);
      }
    }, 45000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
      clearTimeout(readyTimer);
    };
  }, [popupSeen]);

  const closePopup = () => setShowPopup(false);

  const scrollNext = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const slideWidth = carouselRef.current.children[0].clientWidth;
        carouselRef.current.scrollBy({ left: slideWidth + 20, behavior: 'smooth' });
      }
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth } = carouselRef.current;
      if (scrollLeft <= 10) {
        carouselRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        const slideWidth = carouselRef.current.children[0].clientWidth;
        carouselRef.current.scrollBy({ left: -(slideWidth + 20), behavior: 'smooth' });
      }
    }
  };

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
    { id: 1, image: '/1 (1).jpg', alt: 'Look Bem Zânza 1' },
    { id: 2, image: '/1 (2).jpg', alt: 'Look Bem Zânza 2' },
    { id: 3, image: '/1 (3).jpg', alt: 'Look Bem Zânza 3' },
    { id: 4, image: '/1 (4).jpg', alt: 'Look Bem Zânza 4' },
    { id: 5, image: '/1 (5).jpg', alt: 'Look Bem Zânza 5' }
  ];

  const testimonials = [
    {
      id: 1,
      text: "Meninas, podem comprar sem medo! As saias 100% algodão são perfeitas, o caimento é impecável e minhas clientes tão levando de 3 em 3. Acabamento surreal, não fica transparente.",
      name: "Juliana T.",
      role: "Dona de Boutique em MG",
      initial: "J"
    },
    {
      id: 2,
      text: "Chegou super rápido! Pedi um lote com 15 peças pra testar a qualidade das camisetas e vendi tudo na primeira semana. A margem de lucro é muito boa, já tô pedindo reposição hoje mesmo.",
      name: "Amanda S.",
      role: "Revendedora Autônoma",
      initial: "A"
    },
    {
      id: 3,
      text: "Eu tinha muito medo de comprar atacado pela internet e vir tecido ruim, mas a Bem Zânza me surpreendeu. O tecido é muito fresco, as costuras são lisinhas. Minhas clientes amaram as calças!",
      name: "Carla M.",
      role: "Lojista em SP",
      initial: "C"
    },
    {
      id: 4,
      text: "Gente do céu, o que são esses broches?? Comprei pra dar um charme nas camisetas básicas e virou febre aqui na loja. Dá um ar super chique pra peça. Atendimento top pelo WhatsApp também.",
      name: "Beatriz R.",
      role: "Dona de Loja Online",
      initial: "B"
    },
    {
      id: 5,
      text: "Meninas, o tecido dessa saia é vida! Super fresquinho pra usar o dia todo e não aperta nada. Minhas clientes já tão pedindo de outras cores. Sucesso total, viu?!",
      name: "Renata P.",
      role: "Revendedora em GO",
      initial: "R"
    },
    {
      id: 6,
      text: "Sério, melhor investimento! Coloquei os broches na vitrine e o pessoal pira. As peças básicas viram outra coisa. O WhatsApp deles responde rapidinho também, zero perrengue pra comprar.",
      name: "Fernanda L.",
      role: "Lojista em RJ",
      initial: "F"
    },
    {
      id: 7,
      text: "Tô passada com a qualidade! Chegou tudo cheirosinho e bem embalado. A calça veste super bem e a modelagem é maravilhosa. Já vou fazer o segundo pedido da semana haha.",
      name: "Mariana C.",
      role: "Dona de Loja Online",
      initial: "M"
    },
    {
      id: 8,
      text: "Gente, vendi meu primeiro lote em dois dias!!! As camisetas são de um algodão muito gostoso, não dá nem vontade de tirar do corpo. Vale cada centavo pra revender.",
      name: "Patricia V.",
      role: "Revendedora Autônoma",
      initial: "P"
    },
    {
      id: 9,
      text: "A modelagem das calças é simplesmente incrível, veste muito bem e o caimento fica perfeito. Minhas clientes estão apaixonadas, já vou fazer outro pedido hoje!",
      name: "Camila S.",
      role: "Lojista no PR",
      initial: "C"
    },
    {
      id: 10,
      text: "Primeira vez comprando e já virei cliente fiel. O atendimento no WhatsApp foi super atencioso e as camisetas são de uma qualidade que não se acha em qualquer lugar.",
      name: "Luana B.",
      role: "Dona de Boutique em SP",
      initial: "L"
    },
    {
      id: 11,
      text: "Os broches esgotaram na primeira semana! Que ideia genial colocar esses acessórios junto com as peças. O lucro foi certo e rápido.",
      name: "Vanessa T.",
      role: "Revendedora Autônoma",
      initial: "V"
    },
    {
      id: 12,
      text: "Achei o máximo a variedade de cores das saias. O tecido de algodão é realmente diferenciado e faz muito sucesso aqui no Nordeste pelo clima quente. Recomendo muito!",
      name: "Aline F.",
      role: "Lojista em PE",
      initial: "A"
    },
    {
      id: 13,
      text: "Comprei o lote mínimo de 6 peças só pra conhecer e me arrependi de não ter pego mais! As blusinhas são super confortáveis e o cheirinho que vem na caixa é maravilhoso.",
      name: "Bruna M.",
      role: "Dona de Loja Online",
      initial: "B"
    },
    {
      id: 14,
      text: "Muito satisfeita com a minha compra! A margem de lucro é excelente e as clientes percebem o valor das roupas só de pegar no tecido. Acabamento impecável.",
      name: "Daniele C.",
      role: "Revendedora em SC",
      initial: "D"
    },
    {
      id: 15,
      text: "Fiz um pedido grande para a minha loja e chegou antes do prazo. As peças vieram bem dobradas, tudo certinho. É muito bom encontrar fornecedor de confiança.",
      name: "Roberta L.",
      role: "Lojista no RS",
      initial: "R"
    },
    {
      id: 16,
      text: "O que mais me chamou atenção foi o caimento das camisetas. Não encolhem, não desbotam e o toque é super macio. Minha clientela tá super exigente e a Bem Zânza atendeu todas as expectativas.",
      name: "Tatiane R.",
      role: "Revendedora Autônoma",
      initial: "T"
    }
  ];

  const testimonialsRef = useRef(null);

  const scrollNextTestimonial = () => {
    if (testimonialsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = testimonialsRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        testimonialsRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const slideWidth = testimonialsRef.current.children[0].clientWidth;
        testimonialsRef.current.scrollBy({ left: slideWidth + 20, behavior: 'smooth' });
      }
    }
  };

  const scrollPrevTestimonial = () => {
    if (testimonialsRef.current) {
      const { scrollLeft, scrollWidth } = testimonialsRef.current;
      if (scrollLeft <= 10) {
        testimonialsRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        const slideWidth = testimonialsRef.current.children[0].clientWidth;
        testimonialsRef.current.scrollBy({ left: -(slideWidth + 20), behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="app">
      <div className="top-banner">
        🔥 Catálogo atualizado hoje: Algumas estampas já estão esgotando. Garanta o seu lote com envio rápido!
      </div>
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
              src="/hero.png" 
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

      {/* Profit Banner */}
      <div className="profit-banner">
        <div className="container">
          <p>Trabalhe com peças de alto giro e <strong>margem de lucro de até 100%</strong>. Nossas saias e camisetas 100% algodão são desejo absoluto entre as clientes.</p>
        </div>
      </div>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={28} />
              </div>
              <div className="feature-text">
                <h3>100% Algodão</h3>
                <p>Respirabilidade e toque macio que só os tecidos naturais oferecem.</p>
              </div>
            </div>
            <div className="feature-card delay-100">
              <div className="feature-icon">
                <CheckCircle size={28} />
              </div>
              <div className="feature-text">
                <h3>Produção Premium</h3>
                <p>Acabamento impecável, desde as costuras até os mínimos detalhes.</p>
              </div>
            </div>
            <div className="feature-card delay-200">
              <div className="feature-icon">
                <Truck size={28} />
              </div>
              <div className="feature-text">
                <h3>Atacado e Varejo</h3>
                <p>Condições exclusivas para você revender ou usar, com envio para todo o Brasil.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <div className="container">
          <div className="section-header">
            <h2>Comprar no atacado é fácil e rápido</h2>
            <p>Sem burocracia. Veja como abastecer sua loja em 3 passos simples.</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Chame no WhatsApp</h3>
              <p>Fale com nossa consultora e receba o catálogo com as peças disponíveis hoje.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Monte seu Pedido</h3>
              <p>Escolha no mínimo 6 peças (pode mesclar saias, camisetas, calças e broches).</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Receba na sua Loja</h3>
              <p>Enviamos para todo o Brasil. Você também pode retirar na nossa loja física.</p>
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
          
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={scrollPrev} aria-label="Anterior">
              <ChevronLeft size={24} />
            </button>
            <div className="carousel-track-wrapper" ref={carouselRef}>
              {looks.map((look, index) => (
                <div key={look.id} className="look-card carousel-slide" onClick={() => openLightbox(index)}>
                  <div className="look-image-container">
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
            <button className="carousel-btn next" onClick={scrollNext} aria-label="Próximo">
              <ChevronRight size={24} />
            </button>
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
              <h3>Saias 100% Algodão</h3>
              <p>Caimento perfeito e frescor inigualável para compor looks elegantes.</p>
              <div className="category-img-wrapper">
                <img src="/1 (2).jpg" alt="Saias 100% Algodão" />
              </div>
            </div>
            <div className="category-card">
              <h3>Camisetas 100% Algodão</h3>
              <p>O básico essencial, com toque incrivelmente macio e durabilidade superior.</p>
              <div className="category-img-wrapper">
                <img src="/1 (3).jpg" alt="Camisetas 100% Algodão" />
              </div>
            </div>
            <div className="category-card">
              <h3>Calças</h3>
              <p>Modelagens atemporais e confortáveis que valorizam o corpo feminino.</p>
              <div className="category-img-wrapper">
                <img src="/1 (4).jpg" alt="Calças" />
              </div>
            </div>
            <div className="category-card">
              <h3>Broches Exclusivos</h3>
              <p>O detalhe indispensável que transforma e enriquece qualquer peça básica.</p>
              <div className="category-img-wrapper">
                <img src="/1 (5).jpg" alt="Broches" />
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
              <span className="stat-number" style={{ color: 'var(--primary-blue)' }}>50.000</span>
              <span className="stat-suffix">peças enviadas anualmente</span>
            </div>
            <div className="stat-card">
              <ShoppingBag size={60} color="var(--primary-red)" strokeWidth={1.5} />
              <span className="stat-prefix">Mais de</span>
              <span className="stat-number" style={{ color: 'var(--primary-blue)' }}>5.000</span>
              <span className="stat-suffix">revendedoras pelo Brasil</span>
            </div>
          </div>
          
          <div className="stats-action" style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href={wpConsultora} target="_blank" rel="noreferrer" className="btn btn-primary">
              Seja uma Revendedora
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>O que nossas revendedoras dizem</h2>
            <p>Histórias reais de quem confia e lucra revendendo Bem Zânza.</p>
          </div>
          
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={scrollPrevTestimonial} aria-label="Anterior">
              <ChevronLeft size={24} />
            </button>
            <div className="carousel-track-wrapper" ref={testimonialsRef}>
              {testimonials.map((test) => (
                <div key={test.id} className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <div className="testimonial-stars">
                    <Star size={16} fill="currentColor" stroke="none" />
                    <Star size={16} fill="currentColor" stroke="none" />
                    <Star size={16} fill="currentColor" stroke="none" />
                    <Star size={16} fill="currentColor" stroke="none" />
                    <Star size={16} fill="currentColor" stroke="none" />
                  </div>
                  <div className="testimonial-text">{test.text}</div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{test.initial}</div>
                    <div className="testimonial-author-info">
                      <h4>{test.name}</h4>
                      <span>{test.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn next" onClick={scrollNextTestimonial} aria-label="Próximo">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Dúvidas Frequentes</h2>
            <p>Tudo o que você precisa saber para se tornar nossa cliente e revendedora.</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Como funciona o atacado?</h4>
              <p>O pedido mínimo para compras no atacado é de apenas 6 peças. Você pode mesclar as saias 100% algodão, camisetas, calças e broches conforme a necessidade da sua loja.</p>
            </div>
            <div className="faq-item">
              <h4>As peças são mesmo 100% algodão?</h4>
              <p>Sim! Nosso grande diferencial são as saias e camisetas fabricadas em tecido 100% algodão, garantindo conforto térmico, durabilidade e caimento premium.</p>
            </div>
            <div className="faq-item">
              <h4>Como é feito o envio?</h4>
              <p>Enviamos para todo o Brasil através de transportadoras parceiras e Correios. Você também pode optar por retirar o seu pedido presencialmente em nossa loja física no Brás.</p>
            </div>
            <div className="faq-item">
              <h4>Posso comprar no varejo para uso próprio?</h4>
              <p>Claro! Atendemos tanto atacadistas quanto clientes finais (varejo) diretamente em nossa loja física em São Paulo ou agendando seu pedido pelo WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="guarantee-section">
        <div className="container">
          <div className="guarantee-box">
            <div className="guarantee-icon">
              <ShieldCheck size={48} />
            </div>
            <div className="guarantee-content">
              <h3>Garantia de Qualidade Risco Zero</h3>
              <p>Sabemos que qualidade é inegociável para quem revende. Por isso, <strong>todas as nossas peças são revisadas uma a uma</strong> antes do envio. Em caso de qualquer defeito de fábrica, garantimos a troca facilitada para você focar apenas em vender.</p>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.905485997046!2d-46.624209422921794!3d-23.53590156066052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce592b876d75ad%3A0xed6723b857cc7f7c!2sBem%20Zânza%20%7C%20Moda%20Feminina!5e0!3m2!1spt-BR!2sbr!4v1782321851154!5m2!1spt-BR!2sbr" 
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Links Úteis</h4>
              <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#colecao">Coleção</a></li>
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
      <a href={wpAtacado} target="_blank" rel="noreferrer" className="floating-whatsapp">
        {showBubble && <div className="whatsapp-bubble">Oi! Quer receber o catálogo?</div>}
        <div className="whatsapp-icon-wrapper">
          <img src="/whatsapp.png" alt="WhatsApp" style={{ width: '32px', height: '32px', filter: 'brightness(0) invert(1)' }} />
        </div>
      </a>

      {/* Exit Intent Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}><X size={24} /></button>
            <div className="popup-badge">🎁 Bônus Exclusivo</div>
            <h3>Espera! Não vá embora ainda...</h3>
            <p>Que tal <strong>5% OFF + Frete Fixo</strong> no seu primeiro pedido de atacado?</p>
            <a href={wpAtacado} target="_blank" rel="noreferrer" className="btn btn-primary popup-btn" onClick={closePopup}>
              QUERO MEU DESCONTO AGORA
            </a>
            <span className="popup-disclaimer">Válido apenas para compras realizadas hoje.</span>
          </div>
        </div>
      )}

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
