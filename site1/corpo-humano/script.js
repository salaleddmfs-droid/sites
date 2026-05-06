// Sistema de navegação entre seções
document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.system-section');

    // Função para trocar de seção
    function switchSection(systemId) {
        // Remove active de todas as seções
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Remove active de todos os botões
        navButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Adiciona active na seção selecionada
        const targetSection = document.getElementById(systemId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Adiciona active no botão clicado
        const activeButton = document.querySelector(`[data-system="${systemId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }

        // Scroll suave para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Salva a seção atual no localStorage
        localStorage.setItem('currentSection', systemId);
    }

    // Event listeners para os botões de navegação
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const systemId = this.getAttribute('data-system');
            switchSection(systemId);
        });
    });

    // Restaura a última seção visitada (se houver)
    const savedSection = localStorage.getItem('currentSection');
    if (savedSection) {
        switchSection(savedSection);
    }

    // Animação de entrada para os cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa todos os cards e componentes
    const animatedElements = document.querySelectorAll('.info-card, .component-card, .step, .info-box, .muscle-item');
    animatedElements.forEach(el => observer.observe(el));

    // Efeito de hover no SVG do corpo humano
    const humanBody = document.querySelector('.human-body');
    if (humanBody) {
        humanBody.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'scale(1.05)';
        });

        humanBody.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Contador animado para estatísticas
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toLocaleString('pt-BR');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start).toLocaleString('pt-BR');
            }
        }, 16);
    }

    // Adiciona efeito de pulso nos ícones do sistema
    const systemIcons = document.querySelectorAll('.system-icon');
    systemIcons.forEach(icon => {
        setInterval(() => {
            icon.style.animation = 'none';
            setTimeout(() => {
                icon.style.animation = 'bounce 2s infinite';
            }, 10);
        }, 5000);
    });

    // Tooltip para termos médicos (pode ser expandido)
    const medicalTerms = {
        'alvéolos': 'Pequenas bolsas de ar nos pulmões onde ocorre a troca gasosa',
        'neurônios': 'Células nervosas que transmitem sinais elétricos',
        'artérias': 'Vasos sanguíneos que levam sangue do coração para o corpo',
        'veias': 'Vasos sanguíneos que retornam sangue ao coração'
    };

    // Adiciona tooltips aos termos (se implementado no HTML)
    document.querySelectorAll('[data-term]').forEach(term => {
        term.addEventListener('mouseenter', function() {
            const termName = this.getAttribute('data-term');
            if (medicalTerms[termName]) {
                showTooltip(this, medicalTerms[termName]);
            }
        });
    });

    // Função para mostrar tooltip
    function showTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: #2c3e50;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 0.9rem;
            z-index: 1000;
            max-width: 200px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        tooltip.style.left = (rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)) + 'px';
        
        element.addEventListener('mouseleave', function() {
            tooltip.remove();
        }, { once: true });
    }

    // Adiciona efeito de parallax suave no header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
            header.style.opacity = 1 - (scrolled / 500);
        }
    });

    // Sistema de busca rápida (pode ser expandido)
    function createSearchFeature() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <input type="text" id="searchInput" placeholder="Buscar informações..." />
        `;
        
