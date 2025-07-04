// Portfólio Gustavo Moura - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Navegação suave
    initSmoothScrolling();
    
    // Animações de scroll
    initScrollAnimations();
    
    // Header dinâmico
    initDynamicHeader();
    
    // Animações de habilidades
    initSkillsAnimation();
    
    // Formulário de contato
    initContactForm();
    
    // Efeitos de hover nos cards
    initCardEffects();
    
    // Menu mobile (se necessário)
    initMobileMenu();
});

// Navegação suave entre seções
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Atualizar link ativo
                updateActiveNavLink(targetId);
            }
        });
    });
}

// Atualizar link ativo na navegação
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// Animações de scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animação especial para barras de habilidades
                if (entry.target.classList.contains('habilidades')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.projeto-card, .timeline-item, .habilidade-categoria, .habilidades');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Header dinâmico
function initDynamicHeader() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Adicionar/remover classe de scroll
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Esconder/mostrar header baseado na direção do scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        
        // Atualizar navegação ativa baseada na seção visível
        updateActiveNavOnScroll();
    });
}

// Atualizar navegação ativa baseada no scroll
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    
    if (currentSection) {
        updateActiveNavLink(currentSection);
    }
}

// Animação das barras de habilidades
function initSkillsAnimation() {
    // Esta função será chamada quando a seção de habilidades entrar na tela
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.habilidade-progresso');
    
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }, index * 200);
    });
}

// Formulário de contato
function initContactForm() {
    const form = document.querySelector('.form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            if (validateForm(form)) {
                submitForm(form);
            }
        });
        
        // Validação em tempo real
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Remover mensagens de erro anteriores
    clearFieldError(field);
    
    // Validação de campo obrigatório
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Este campo é obrigatório');
        isValid = false;
    }
    
    // Validação de email
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Por favor, insira um email válido');
            isValid = false;
        }
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = '#dc2626';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

function submitForm(form) {
    // Mostrar estado de carregamento
    form.classList.add('loading');
    
    // Simular envio (substituir por integração real)
    setTimeout(() => {
        form.classList.remove('loading');
        
        // Mostrar mensagem de sucesso
        showMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
        
        // Limpar formulário
        form.reset();
    }, 2000);
}

function showMessage(text, type) {
    // Remover mensagens anteriores
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    const form = document.querySelector('.form');
    form.parentNode.insertBefore(message, form);
    
    // Remover mensagem após 5 segundos
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Efeitos nos cards de projeto
function initCardEffects() {
    const projectCards = document.querySelectorAll('.projeto-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Menu mobile (para futuras implementações)
function initMobileMenu() {
    // Implementar se necessário um menu hambúrguer para mobile
    const nav = document.querySelector('.nav');
    
    // Verificar se o menu precisa ser colapsado em telas pequenas
    if (window.innerWidth <= 768) {
        // Lógica para menu mobile
    }
}

// Utilitários
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Adicionar classe CSS para header scrolled
const style = document.createElement('style');
style.textContent = `
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: var(--shadow-md);
    }
    
    .nav a.active {
        color: var(--primary-color);
    }
    
    .nav a.active::after {
        width: 100%;
    }
    
    .field-error {
        display: block;
    }
    
    .form-group input.error,
    .form-group textarea.error {
        border-color: #dc2626;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    }
`;
document.head.appendChild(style);

// Performance: usar requestAnimationFrame para animações suaves
function smoothAnimation(callback) {
    requestAnimationFrame(callback);
}

// Lazy loading para imagens (se necessário)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Adicionar efeito de typing no hero (opcional)
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero h1 span');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Iniciar após um pequeno delay
        setTimeout(typeWriter, 500);
    }
}

// Adicionar partículas de fundo (opcional)
function initParticles() {
    // Implementação de partículas animadas no background
    // Pode ser adicionada posteriormente para mais dinamismo
}

console.log('🚀 Portfólio Gustavo Moura carregado com sucesso!');


// Funcionalidades adicionais

// Inicializar funcionalidades avançadas
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidades já existentes...
    
    // Novas funcionalidades
    initScrollIndicator();
    initBackToTop();
    initAdvancedAnimations();
    initPerformanceOptimizations();
    initAccessibilityFeatures();
});

// Indicador de progresso de scroll
function initScrollIndicator() {
    // Criar elemento do indicador
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<div class="scroll-progress"></div>';
    document.body.appendChild(scrollIndicator);
    
    const progressBar = scrollIndicator.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Botão de voltar ao topo
function initBackToTop() {
    // Criar botão
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
    document.body.appendChild(backToTopBtn);
    
    // Mostrar/esconder baseado no scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Funcionalidade de clique
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animações avançadas
function initAdvancedAnimations() {
    // Observador para animações mais específicas
    const advancedObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Animações específicas por tipo de elemento
                if (element.classList.contains('projeto-card')) {
                    element.style.animationDelay = Math.random() * 0.5 + 's';
                    element.classList.add('fade-in-up', 'visible');
                }
                
                if (element.classList.contains('timeline-item')) {
                    const isEven = Array.from(element.parentNode.children).indexOf(element) % 2 === 0;
                    element.classList.add(isEven ? 'fade-in-left' : 'fade-in-right', 'visible');
                }
                
                if (element.classList.contains('habilidade-categoria')) {
                    element.classList.add('fade-in-up', 'visible');
                    // Animar barras de progresso
                    setTimeout(() => {
                        animateSkillBarsInElement(element);
                    }, 300);
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar elementos específicos
    document.querySelectorAll('.projeto-card, .timeline-item, .habilidade-categoria').forEach(el => {
        advancedObserver.observe(el);
    });
}

// Animar barras de habilidades em um elemento específico
function animateSkillBarsInElement(element) {
    const skillBars = element.querySelectorAll('.habilidade-progresso');
    
    skillBars.forEach((bar, index) => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, index * 150);
    });
}

// Otimizações de performance
function initPerformanceOptimizations() {
    // Lazy loading para imagens de background
    const observerOptions = {
        rootMargin: '50px'
    };
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.add('loaded');
                imageObserver.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observar seções com backgrounds
    document.querySelectorAll('.hero, .projetos, .habilidades, .experiencia').forEach(section => {
        imageObserver.observe(section);
    });
    
    // Debounce para eventos de scroll
    const debouncedScrollHandler = debounce(function() {
        // Handlers de scroll otimizados
        updateActiveNavOnScroll();
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
}

// Recursos de acessibilidade
function initAccessibilityFeatures() {
    // Navegação por teclado melhorada
    document.addEventListener('keydown', function(e) {
        // Esc para fechar modais ou voltar ao topo
        if (e.key === 'Escape') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Enter ou Space para ativar elementos clicáveis
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('projeto-card')) {
            e.preventDefault();
            const link = e.target.querySelector('a');
            if (link) link.click();
        }
    });
    
    // Indicadores de foco melhorados
    document.addEventListener('focusin', function(e) {
        e.target.classList.add('focused');
    });
    
    document.addEventListener('focusout', function(e) {
        e.target.classList.remove('focused');
    });
    
    // Anúncios para leitores de tela
    const announceToScreenReader = (message) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.style.position = 'absolute';
        announcement.style.left = '-10000px';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    };
    
    // Anunciar mudanças de seção
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionTitle = entry.target.querySelector('h2, h1');
                if (sectionTitle) {
                    announceToScreenReader(`Seção: ${sectionTitle.textContent}`);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
}

// Melhorias no formulário de contato
function enhanceContactForm() {
    const form = document.querySelector('.form');
    if (!form) return;
    
    // Validação em tempo real melhorada
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Feedback visual imediato
        input.addEventListener('input', function() {
            const isValid = validateField(this);
            this.classList.toggle('valid', isValid);
            this.classList.toggle('invalid', !isValid);
        });
        
        // Salvar rascunho no localStorage
        input.addEventListener('input', debounce(function() {
            localStorage.setItem(`form_${this.name}`, this.value);
        }, 500));
        
        // Restaurar rascunho
        const savedValue = localStorage.getItem(`form_${input.name}`);
        if (savedValue) {
            input.value = savedValue;
        }
    });
    
    // Limpar rascunho após envio bem-sucedido
    form.addEventListener('submit', function() {
        inputs.forEach(input => {
            localStorage.removeItem(`form_${input.name}`);
        });
    });
}

// Efeitos de parallax sutil
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero, .projetos::before, .habilidades::after');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            if (element.style) {
                element.style.transform = `translateY(${rate}px)`;
            }
        });
    }, { passive: true });
}

// Sistema de notificações
function createNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos inline para a notificação
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px'
    });
    
    // Cores baseadas no tipo
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após duração especificada
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
}

// Melhorar função de envio do formulário
function submitForm(form) {
    form.classList.add('loading');
    
    // Simular envio com feedback melhorado
    setTimeout(() => {
        form.classList.remove('loading');
        
        // Usar sistema de notificações
        createNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
        
        // Limpar formulário
        form.reset();
        
        // Anunciar sucesso para leitores de tela
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'assertive');
        announcement.style.position = 'absolute';
        announcement.style.left = '-10000px';
        announcement.textContent = 'Formulário enviado com sucesso';
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }, 2000);
}

// Inicializar melhorias adicionais
document.addEventListener('DOMContentLoaded', function() {
    enhanceContactForm();
    initParallaxEffects();
});

// Adicionar estilos CSS dinamicamente para notificações
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    
    .form-group input.valid,
    .form-group textarea.valid {
        border-color: var(--accent-color);
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
    }
    
    .form-group input.invalid,
    .form-group textarea.invalid {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .focused {
        outline: 2px solid var(--secondary-color);
        outline-offset: 2px;
    }
`;
document.head.appendChild(notificationStyles);

console.log('🎉 Funcionalidades avançadas do portfólio carregadas!');

