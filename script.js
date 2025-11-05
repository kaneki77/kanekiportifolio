// ===== NAVEGAÇÃO MOBILE =====
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu mobile
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
}

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    if (navToggle) {
      navToggle.classList.remove('active');
    }
  });
});

// ===== SCROLL SUAVE E HIGHLIGHT DO MENU =====
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active');
    } else {
      navLink?.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', highlightNavigation);

// ===== HEADER TRANSPARENTE/SÓLIDO NO SCROLL =====
const header = document.querySelector('.header');

function handleHeaderScroll() {
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleHeaderScroll);

// ===== FILTROS DO PORTFÓLIO =====
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remover active de todos os botões
    filterBtns.forEach(b => b.classList.remove('active'));
    // Adicionar active ao botão clicado
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      const category = item.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 10);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

// ===== MODAL DE VISUALIZAÇÃO DE MÍDIA =====
const mediaModal = document.getElementById('mediaModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');
const mediaViewBtns = document.querySelectorAll('.media-view-btn');

// Abrir modal ao clicar no botão de visualização
function setupMediaViewButtons() {
  const buttons = document.querySelectorAll('.media-view-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = btn.getAttribute('data-type');
      const src = btn.getAttribute('data-src');

      if (type === 'image') {
        modalImage.src = src;
        modalImage.classList.add('active');
        modalVideo.classList.remove('active');
        modalVideo.pause();
      } else if (type === 'video') {
        modalVideo.querySelector('source').src = src;
        modalVideo.load();
        modalVideo.classList.add('active');
        modalImage.classList.remove('active');
      }

      mediaModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}

// Inicializar botões de visualização
setupMediaViewButtons();

// Fechar modal
function closeModal() {
  mediaModal.classList.remove('active');
  modalImage.classList.remove('active');
  modalVideo.classList.remove('active');
  modalVideo.pause();
  document.body.style.overflow = 'auto';
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

// Fechar modal ao clicar fora do conteúdo
mediaModal?.addEventListener('click', (e) => {
  if (e.target === mediaModal) {
    closeModal();
  }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mediaModal.classList.contains('active')) {
    closeModal();
  }
});

// ===== ANIMAÇÕES DE SCROLL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar elementos para animação
const animateElements = document.querySelectorAll('.projeto-card, .habilidade-card, .portfolio-item, .timeline-item');
animateElements.forEach(el => observer.observe(el));

// ===== SCROLL INDICATOR =====
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    const sobreSection = document.getElementById('sobre');
    sobreSection?.scrollIntoView({ behavior: 'smooth' });
  });
}

// ===== SMOOTH SCROLL PARA NAVEGAÇÃO =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== ADICIONAR VÍDEOS DINAMICAMENTE =====
// Esta função permite que o usuário adicione vídeos facilmente
// Basta chamar addVideoToPortfolio(videoSrc, title, description, category)

function addVideoToPortfolio(videoSrc, title, description, category) {
  const portfolioGrid = document.querySelector('.portfolio-grid');
  
  const videoItem = document.createElement('div');
  videoItem.className = 'portfolio-item';
  videoItem.setAttribute('data-category', category);
  
  videoItem.innerHTML = `
    <div class="portfolio-media">
      <video src="${videoSrc}" style="width: 100%; height: 100%; object-fit: cover;"></video>
      <div class="portfolio-overlay">
        <button class="media-view-btn" data-type="video" data-src="${videoSrc}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="portfolio-info">
      <h4>${title}</h4>
      <p>${description}</p>
    </div>
  `;
  
  portfolioGrid.appendChild(videoItem);
  
  // Reinicializar botões de visualização
  setupMediaViewButtons();
  
  console.log(`✅ Vídeo "${title}" adicionado com sucesso!`);
}

// ===== ADICIONAR IMAGENS DINAMICAMENTE =====
// Esta função permite que o usuário adicione imagens facilmente
// Basta chamar addImageToPortfolio(imageSrc, title, description, category)

function addImageToPortfolio(imageSrc, title, description, category) {
  const portfolioGrid = document.querySelector('.portfolio-grid');
  
  const imageItem = document.createElement('div');
  imageItem.className = 'portfolio-item';
  imageItem.setAttribute('data-category', category);
  
  imageItem.innerHTML = `
    <div class="portfolio-media">
      <img src="${imageSrc}" alt="${title}">
      <div class="portfolio-overlay">
        <button class="media-view-btn" data-type="image" data-src="${imageSrc}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="portfolio-info">
      <h4>${title}</h4>
      <p>${description}</p>
    </div>
  `;
  
  portfolioGrid.appendChild(imageItem);
  
  // Reinicializar botões de visualização
  setupMediaViewButtons();
  
  console.log(`✅ Imagem "${title}" adicionada com sucesso!`);
}

// ===== REMOVER PLACEHOLDERS DE VÍDEO =====
// Esta função remove os placeholders de vídeo do portfólio
function removePlaceholders() {
  const placeholders = document.querySelectorAll('.video-placeholder');
  placeholders.forEach(placeholder => {
    placeholder.parentElement.remove();
  });
  console.log('✅ Placeholders removidos!');
}

// ===== PERFORMANCE: LAZY LOADING DE IMAGENS =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===== CONSOLE LOG PARA DEBUG E INSTRUÇÕES =====
console.log('%c🚀 Portfólio de Gustavo Moura carregado com sucesso!', 'color: #fff; background: #0a0a0a; padding: 10px; font-size: 14px; font-weight: bold;');
console.log('%c📸 Como adicionar imagens ao portfólio:', 'color: #a0a0a0; font-size: 12px;');
console.log('addImageToPortfolio("assets/minha-foto.jpg", "Título", "Descrição", "automation")');
console.log('%c🎥 Como adicionar vídeos ao portfólio:', 'color: #a0a0a0; font-size: 12px;');
console.log('addVideoToPortfolio("assets/meu-video.mp4", "Título", "Descrição", "iot")');
console.log('%c🗑️ Para remover placeholders:', 'color: #a0a0a0; font-size: 12px;');
console.log('removePlaceholders()');
console.log('%c📂 Categorias disponíveis:', 'color: #a0a0a0; font-size: 12px;');
console.log('- automation (Automação)');
console.log('- iot (IoT)');
console.log('- development (Desenvolvimento)');
console.log('- all (Todos)');

// ===== EXEMPLO DE USO (COMENTADO) =====
/*
// Para adicionar uma imagem:
addImageToPortfolio('assets/minha-foto.jpg', 'Título da Imagem', 'Descrição do trabalho', 'automation');

// Para adicionar um vídeo:
addVideoToPortfolio('assets/meu-video.mp4', 'Título do Vídeo', 'Descrição do trabalho', 'iot');

// Para remover os placeholders de vídeo:
removePlaceholders();
*/
