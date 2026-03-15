// === INITIAL STATE ===
const defaultData = {
    config: {
        name: 'Plattô Arquitetura',
        slogan: 'Arquitetura e Design de Interiores de alto padrão.',
        password: 'platto2024'
    },
    hero: {
        label: 'ARQUITETURA & DESIGN DE INTERIORES',
        title1: 'Espaços que',
        title2: 'contam histórias.',
        subtext: 'Criamos ambientes que equilibram forma, função e emoção. Cada projeto é uma narrativa única, projetada para durar.',
        hasButtons: true,
        btn1: 'Ver Projetos',
        btn2: 'Conheça o Escritório'
    },
    sobre: {
        title: 'Uma visão além do espaço',
        p1: 'Na Plattô Arquitetura, acreditamos que cada espaço possui uma vocação única. Nosso trabalho é descobrir essa essência e traduzi-la em formas, texturas e luz.',
        p2: 'Com mais de 10 anos de mercado, nosso escritório se consolidou na criação de projetos residenciais e comerciais de alto padrão, sempre guiados pela atemporalidade e pelo conforto.',
        signature: 'Plattô Arquitetura'
    },
    contadores: [
        { id: 1, label: 'Projetos de Interiores', value: 124 },
        { id: 2, label: 'Projetos Residenciais', value: 86 },
        { id: 3, label: 'Projetos Comerciais', value: 42 },
        { id: 4, label: 'Anos de Atuação', value: 12 }
    ],
    projetos: [
        { id: 1, title: 'Casa Horizonte', category: 'Residencial', year: '2023', area: '450m²', desc: 'Uma residência concebida para integrar a paisagem externa à rotina familiar.', color: 'linear-gradient(145deg, #1c1c1c, #0a0a0a)' },
        { id: 2, title: 'Loft Botânico', category: 'Interiores', year: '2024', area: '120m²', desc: 'Apartamento com conceito aberto e uso extensivo de materiais naturais.', color: 'linear-gradient(145deg, #2a2a2a, #111111)' },
        { id: 3, title: 'Galeria M', category: 'Comercial', year: '2023', area: '300m²', desc: 'Espaço minimalista para exposição de arte contemporânea.', color: 'linear-gradient(145deg, #1f1f1f, #0d0d0d)' },
        { id: 4, title: 'Apartamento Neo', category: 'Interiores', year: '2022', area: '180m²', desc: 'Reforma completa focada em iluminação e texturas.', color: 'linear-gradient(145deg, #222222, #050505)' },
        { id: 5, title: 'Sede FinTech', category: 'Comercial', year: '2024', area: '800m²', desc: 'Escritório corporativo com foco em bem-estar.', color: 'linear-gradient(145deg, #333333, #1a1a1a)' },
        { id: 6, title: 'Vila Flora', category: 'Residencial', year: '2021', area: '600m²', desc: 'Conjunto de casas de campo com arquitetura vernacular.', color: 'linear-gradient(145deg, #2c2c2c, #0a0a0a)' }
    ],
    servicos: [
        { id: 1, title: 'Arquitetura Residencial', desc: 'Projetos completos do zero, focados em conforto e durabilidade.' },
        { id: 2, title: 'Design de Interiores', desc: 'Conceituação e detalhamento de ambientes internos, mobiliário e iluminação.' },
        { id: 3, title: 'Arquitetura Comercial', desc: 'Espaços de varejo e corporativos que traduzem a identidade da marca.' },
        { id: 4, title: 'Consultoria e Reforma', desc: 'Intervenções otimizadas para renovar e valorizar imóveis existentes.' },
        { id: 5, title: 'Paisagismo', desc: 'Integração da natureza à arquitetura, criando refúgios urbanos.' }
    ],
    processo: [
        { id: 1, title: 'Briefing & Escuta', desc: 'Entendemos profundamente seus desejos, necessidades e rotina.' },
        { id: 2, title: 'Conceito & Referências', desc: 'Apresentação do partido arquitetônico e moodboards visuais.' },
        { id: 3, title: 'Desenvolvimento do Projeto', desc: 'Detalhamento técnico completo de todas as disciplinas envolvidas.' },
        { id: 4, title: 'Execução & Acompanhamento', desc: 'Visitas técnicas à obra para garantir a fidelidade do projeto.' },
        { id: 5, title: 'Entrega & Pós-obra', desc: 'Finalização impecável e suporte para sua completa adaptação.' }
    ],
    depoimentos: [
        { id: 1, text: 'A Plattô transformou nossa forma de viver. O apartamento reflete exatamente quem somos, mas com uma sofisticação que não conseguiríamos sozinhos.', author: 'Marina Silva', city: 'São Paulo/SP' },
        { id: 2, text: 'Profissionalismo do começo ao fim. Cumpriram todos os prazos e o resultado comercial superou as expectativas dos nossos clientes.', author: 'Carlos Mendes', city: 'Campinas/SP' },
        { id: 3, text: 'O processo foi leve e surpreendente. Eles entenderam nosso estilo de vida e desenharam a casa dos nossos sonhos.', author: 'Família Costa', city: 'Belo Horizonte/MG' }
    ],
    contato: {
        whatsapp: '(11) 99999-9999',
        telefone: '(11) 3333-3333',
        email: 'contato@platto.com.br',
        instagram: '@plattoarquitetura',
        endereco: 'Rua das Flores, 123 — Jardins, São Paulo/SP'
    }
};

let siteData = JSON.parse(localStorage.getItem('plattoData')) || defaultData;
let hasUnsavedChanges = false;

// === SVG ICONS ===
const icons = {
    residencia: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    interiores: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
    comercial: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-4m6 4v-4m-6 0h6"></path></svg>',
    reforma: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    paisagismo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22v-7M12 8a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 0a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0 7a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"></path></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
    telefone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    endereco: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'
};

function getServiceIcon(index) {
    const keys = Object.keys(icons).slice(0,5);
    return icons[keys[index % 5]] || icons.residencia;
}

// === RENDER FUNCTIONS ===
function renderSite() {
    document.title = siteData.config.name;
    document.getElementById('nav-logo').innerText = siteData.config.name.split(' ')[0] || 'PLATTÔ';
    document.querySelector('.footer-logo').innerText = siteData.config.name.split(' ')[0] || 'PLATTÔ';
    document.getElementById('footer-slogan').innerText = siteData.config.slogan;
    document.getElementById('current-year').innerText = new Date().getFullYear();

    // Hero
    document.getElementById('hero-label').innerText = siteData.hero.label;
    document.getElementById('hero-title').innerHTML = `${siteData.hero.title1}<br>${siteData.hero.title2}`;
    document.getElementById('hero-subtext').innerText = siteData.hero.subtext;
    document.getElementById('hero-btn1').innerText = siteData.hero.btn1;
    document.getElementById('hero-btn2').innerText = siteData.hero.btn2;
    document.querySelector('.hero-buttons').style.display = siteData.hero.hasButtons ? 'flex' : 'none';
    
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        if (siteData.hero.bgImage) {
            heroBg.style.backgroundImage = `linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%), url('${siteData.hero.bgImage}')`;
        } else {
            heroBg.style.backgroundImage = `linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)`;
        }
        heroBg.style.backgroundSize = 'cover';
        heroBg.style.backgroundPosition = 'center';
    }

    // Sobre
    document.getElementById('sobre-title').innerText = siteData.sobre.title;
    document.getElementById('sobre-paragraphs').innerHTML = `<p>${siteData.sobre.p1}</p><p>${siteData.sobre.p2}</p>`;
    document.getElementById('sobre-signature').innerText = siteData.sobre.signature;
    
    const mainImg = document.querySelector('.main-img');
    const subImg = document.querySelector('.sub-img');
    if (mainImg) {
        mainImg.style.backgroundImage = siteData.sobre.img1 ? `url('${siteData.sobre.img1}')` : 'linear-gradient(to bottom right, #1a1a1a, #0d0d0d)';
        mainImg.style.backgroundSize = 'cover'; mainImg.style.backgroundPosition = 'center';
    }
    if (subImg) {
        subImg.style.backgroundImage = siteData.sobre.img2 ? `url('${siteData.sobre.img2}')` : 'linear-gradient(to top left, #222, #111)';
        subImg.style.backgroundSize = 'cover'; subImg.style.backgroundPosition = 'center';
    }

    // Contadores
    const ctContainer = document.getElementById('contadores-container');
    ctContainer.innerHTML = siteData.contadores.map(c => `
        <div class="counter-item reveal">
            <div class="counter-line"></div>
            <div class="counter-number" data-target="${c.value}">0</div>
            <div class="counter-label">${c.label}</div>
        </div>
    `).join('');

    // Projetos
    renderProjetos();

    // Serviços
    const servContainer = document.getElementById('servicos-list');
    servContainer.innerHTML = siteData.servicos.map((s, i) => `
        <div class="servico-item reveal delay-1 hoverable">
            <h3 class="servico-title">${getServiceIcon(i)} ${s.title}</h3>
            <p class="servico-desc">${s.desc}</p>
        </div>
    `).join('');

    // Processo
    const procContainer = document.getElementById('processo-timeline');
    procContainer.innerHTML = siteData.processo.map((p, i) => `
        <div class="timeline-item reveal delay-${i%3}">
            <div class="timeline-num">0${i+1}</div>
            <h4 class="timeline-title">${p.title}</h4>
            <p class="timeline-desc">${p.desc}</p>
        </div>
    `).join('');

    // Depoimentos
    const depContainer = document.getElementById('depoimentos-slider');
    depContainer.innerHTML = siteData.depoimentos.map((d, i) => `
        <div class="slide ${i===0?'active':''}">
            <div class="quote-icon">"</div>
            <p class="quote-text">${d.text}</p>
            <span class="quote-author">${d.author}</span>
            <span class="quote-city">${d.city}</span>
        </div>
    `).join('');
    initSlider();

    // Contato
    const contContainer = document.getElementById('contato-list');
    contContainer.innerHTML = `
        <li class="hoverable">${icons.whatsapp} <span>${siteData.contato.whatsapp}</span></li>
        <li class="hoverable">${icons.telefone} <span>${siteData.contato.telefone}</span></li>
        <li class="hoverable">${icons.email} <span>${siteData.contato.email}</span></li>
        <li class="hoverable">${icons.instagram} <span>${siteData.contato.instagram}</span></li>
        <li class="hoverable">${icons.endereco} <span>${siteData.contato.endereco}</span></li>
    `;
    
    // WA FAB
    const cleanWaObj = siteData.contato.whatsapp.replace(/\D/g, '');
    document.getElementById('fab-whatsapp').href = `https://wa.me/55${cleanWaObj}`;
    document.getElementById('footer-wa').href = `https://wa.me/55${cleanWaObj}`;
    document.getElementById('footer-ig').href = `https://instagram.com/${siteData.contato.instagram.replace('@','')}`;

    initObservers();
}

function renderProjetos(filter = 'all') {
    const grid = document.getElementById('projetos-grid');
    const filtered = filter === 'all' ? siteData.projetos : siteData.projetos.filter(p => p.category === filter);
    
    grid.innerHTML = filtered.map((p, i) => `
        <div class="projeto-card hoverable reveal delay-${i%3}" onclick="openProjectModal(${p.id})">
            <div class="projeto-img" style="${p.image ? `background-image: url('${p.image}'); background-size: cover; background-position: center;` : `background: ${p.color};`}"></div>
            <div class="projeto-overlay">
                <div class="projeto-icon">+</div>
                <h3 class="projeto-title">${p.title}</h3>
                <span class="projeto-cat">${p.category}</span>
            </div>
        </div>
    `).join('');
    
    // Re-trigger reveal just for projects
    setTimeout(() => {
        document.querySelectorAll('.projeto-card.reveal').forEach(el => el.classList.add('active'));
    }, 50);
}


// Scroll & Navbar
const scrollProgress = document.querySelector('.scroll-progress');
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    let scrollVal = document.documentElement.scrollTop;
    let maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollProgress.style.width = `${(scrollVal / maxScroll) * 100}%`;
    
    if (scrollVal > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// Reveal Observer & CountUp
function initObservers() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('counter-item') && !entry.target.dataset.counted) {
                    const el = entry.target.querySelector('.counter-number');
                    countUp(el, parseInt(el.getAttribute('data-target')));
                    entry.target.dataset.counted = true;
                }
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('active'); // reset
        observer.observe(el);
    });
}

function countUp(el, target) {
    let count = 0;
    const duration = 2000;
    const interval = 20;
    const step = target / (duration / interval);
    
    const timer = setInterval(() => {
        count += step;
        if (count >= target) {
            el.innerText = target;
            clearInterval(timer);
        } else {
            el.innerText = Math.floor(count);
        }
    }, interval);
}

// Project Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderProjetos(this.dataset.filter);
    });
});

// Modal
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
document.querySelector('.modal-close').addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', e => { if (e.target.classList.contains('modal-overlay')) modal.classList.remove('active'); });

window.openProjectModal = function(id) {
    const proj = siteData.projetos.find(p => p.id === id);
    if(!proj) return;
    
    modalBody.innerHTML = `
        <div class="modal-gallery">
            <div class="modal-img-placeholder" style="${proj.image ? `background-image: url('${proj.image}'); background-size: cover; background-position: center;` : `background:${proj.color}`}"></div>
        </div>
        <div class="modal-info">
            <div class="modal-meta">
                <span>${proj.category}</span>
                <span>${proj.year}</span>
                <span>${proj.area}</span>
            </div>
            <h3>${proj.title}</h3>
            <p style="margin-top:20px; color:var(--color-text-muted); font-size:1.1rem">${proj.desc}</p>
        </div>
    `;
    modal.classList.add('active');
};

// Slider
let currentSlide = 0;
let slideInterval;
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    if(!slides.length) return;
    
    const nextBtn = document.querySelector('.slider-arrow.next');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const wrapper = document.querySelector('.slider-wrapper');
    
    const showSlide = (idx) => {
        slides.forEach(s => s.classList.remove('active'));
        slides[idx].classList.add('active');
    };
    
    const nextSlide = () => { currentSlide = (currentSlide + 1) % slides.length; showSlide(currentSlide); };
    const prevSlide = () => { currentSlide = (currentSlide - 1 + slides.length) % slides.length; showSlide(currentSlide); };
    
    nextBtn.onclick = nextSlide;
    prevBtn.onclick = prevSlide;
    
    const startAuto = () => { clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 5000); };
    wrapper.onmouseenter = () => clearInterval(slideInterval);
    wrapper.onmouseleave = startAuto;
    startAuto();
}

// === ADMIN PANEL ===
// Auth
document.querySelector('.admin-link').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('public-site').style.display = 'none';
    document.getElementById('admin-view').style.display = 'block';
    
    // Auto login if already authenticated in this session
    if (sessionStorage.getItem('plattoAdminAuth') === 'true') {
        showAdminDashboard();
    }
});
document.getElementById('back-to-site').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('admin-view').style.display = 'none';
    document.getElementById('public-site').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', e => {
    e.preventDefault();
    const pass = document.getElementById('admin-pass').value;
    if (pass === siteData.config.password) {
        sessionStorage.setItem('plattoAdminAuth', 'true');
        showAdminDashboard();
    } else {
        document.getElementById('login-error').innerText = 'Senha incorreta.';
    }
});

function showAdminDashboard() {
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'flex';
    renderAdminForms();
    
    // Add event listeners to tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            document.querySelectorAll('.admin-section').forEach(sec => sec.classList.remove('active'));
            document.getElementById(tab.dataset.target).classList.add('active');
        });
    });
}

document.getElementById('admin-logout').addEventListener('click', () => {
    sessionStorage.removeItem('plattoAdminAuth');
    document.getElementById('admin-pass').value = '';
    document.getElementById('admin-login').style.display = 'flex';
    document.getElementById('admin-dashboard').style.display = 'none';
});

document.getElementById('admin-view-site').addEventListener('click', () => {
    document.getElementById('admin-view').style.display = 'none';
    document.getElementById('public-site').style.display = 'block';
});

// Admin Form Rendering
function renderAdminForms() {
    const container = document.getElementById('admin-forms-container');
    container.innerHTML = `
        <!-- HERO -->
        <div id="admin-hero" class="admin-section active">
            <div class="admin-card">
                <h4>Hero - Cabeçalho</h4>
                <div class="form-group">
                    <label>Imagem de Fundo</label>
                    <input type="file" accept="image/*" onChange="handleImageUpload(event, 'hero', 'bgImage')" style="margin-top: 5px; padding: 0.5rem 0; border: none;">
                    ${siteData.hero.bgImage ? `<div style="margin-top:10px;"><img src="${siteData.hero.bgImage}" style="max-width:200px; aspect-ratio:16/9; object-fit:cover; border:1px solid var(--color-border);"></div>` : ''}
                </div>
                <div class="form-group">
                    <label>Label</label>
                    <input type="text" id="ai-hero-label" value="${siteData.hero.label}" onInput="updateData('hero', 'label', this.value)">
                </div>
                <div class="form-group">
                    <label>Título Linha 1</label>
                    <input type="text" id="ai-hero-t1" value="${siteData.hero.title1}" onInput="updateData('hero', 'title1', this.value)">
                </div>
                <div class="form-group">
                    <label>Título Linha 2</label>
                    <input type="text" id="ai-hero-t2" value="${siteData.hero.title2}" onInput="updateData('hero', 'title2', this.value)">
                </div>
                <div class="form-group">
                    <label>Subtexto</label>
                    <textarea onInput="updateData('hero', 'subtext', this.value)">${siteData.hero.subtext}</textarea>
                </div>
            </div>
        </div>
        
        <!-- SOBRE -->
        <div id="admin-sobre" class="admin-section">
            <div class="admin-card">
                <h4>Sobre o Escritório</h4>
                <div class="form-group">
                    <label>Imagem 1 (Principal)</label>
                    <input type="file" accept="image/*" onChange="handleImageUpload(event, 'sobre', 'img1')" style="margin-top: 5px; padding: 0.5rem 0; border: none;">
                    ${siteData.sobre.img1 ? `<div style="margin-top:10px;"><img src="${siteData.sobre.img1}" style="max-width:100px; aspect-ratio:3/4; object-fit:cover; border:1px solid var(--color-border);"></div>` : ''}
                </div>
                <div class="form-group">
                    <label>Imagem 2 (Secundária)</label>
                    <input type="file" accept="image/*" onChange="handleImageUpload(event, 'sobre', 'img2')" style="margin-top: 5px; padding: 0.5rem 0; border: none;">
                    ${siteData.sobre.img2 ? `<div style="margin-top:10px;"><img src="${siteData.sobre.img2}" style="max-width:100px; aspect-ratio:3/4; object-fit:cover; border:1px solid var(--color-border);"></div>` : ''}
                </div>
                <div class="form-group">
                    <label>Título</label>
                    <input type="text" value="${siteData.sobre.title}" onInput="updateData('sobre', 'title', this.value)">
                </div>
                <div class="form-group">
                    <label>Parágrafo 1</label>
                    <textarea onInput="updateData('sobre', 'p1', this.value)">${siteData.sobre.p1}</textarea>
                </div>
                <div class="form-group">
                    <label>Parágrafo 2</label>
                    <textarea onInput="updateData('sobre', 'p2', this.value)">${siteData.sobre.p2}</textarea>
                </div>
                <div class="form-group">
                    <label>Assinatura</label>
                    <input type="text" value="${siteData.sobre.signature}" onInput="updateData('sobre', 'signature', this.value)">
                </div>
            </div>
        </div>

        <!-- CONTADORES -->
        <div id="admin-contadores" class="admin-section">
            <div class="admin-card">
                <h4>Estatísticas (Contadores)</h4>
                ${siteData.contadores.map((c, i) => `
                    <div style="display:flex; gap:1rem; margin-bottom:1rem;">
                        <input type="text" value="${c.label}" onInput="updateArr('contadores', ${i}, 'label', this.value)">
                        <input type="number" value="${c.value}" onInput="updateArr('contadores', ${i}, 'value', this.value)">
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- PROJETOS -->
        <div id="admin-projetos" class="admin-section">
            <div class="admin-card">
                <h4>Projetos do Portfólio</h4>
                <button class="btn btn-outline w-100" style="margin-bottom: 2rem;" onclick="addNewProject()">+ Adicionar Novo Projeto</button>
                <div class="item-list" id="admin-proj-list">
                    ${adminListProjetos()}
                </div>
            </div>
        </div>

        <!-- SERVIÇOS -->
        <div id="admin-servicos" class="admin-section">
            <div class="admin-card">
                <h4>Serviços</h4>
                ${siteData.servicos.map((s, i) => `
                    <div class="form-group" style="margin-bottom:2rem; padding-bottom:1rem; border-bottom:1px solid var(--color-border)">
                        <input type="text" style="margin-bottom:0.5rem" value="${s.title}" onInput="updateArr('servicos', ${i}, 'title', this.value)">
                        <textarea onInput="updateArr('servicos', ${i}, 'desc', this.value)">${s.desc}</textarea>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- PROCESSO -->
        <div id="admin-processos" class="admin-section">
            <div class="admin-card">
                <h4>Processo de Trabalho</h4>
                ${siteData.processo.map((p, i) => `
                    <div class="form-group" style="margin-bottom:1.5rem">
                        <label>Etapa ${i+1}</label>
                        <input type="text" style="margin-bottom:0.5rem" value="${p.title}" onInput="updateArr('processo', ${i}, 'title', this.value)">
                        <input type="text" value="${p.desc}" onInput="updateArr('processo', ${i}, 'desc', this.value)">
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- DEPOIMENTOS -->
        <div id="admin-depoimentos" class="admin-section">
            <div class="admin-card">
                <h4>Depoimentos</h4>
                ${siteData.depoimentos.map((d, i) => `
                    <div class="form-group" style="margin-bottom:2rem; border-bottom:1px solid var(--color-border); padding-bottom:1rem">
                        <textarea style="margin-bottom:0.5rem" onInput="updateArr('depoimentos', ${i}, 'text', this.value)">${d.text}</textarea>
                        <div style="display:flex; gap:1rem;">
                            <input type="text" value="${d.author}" placeholder="Autor" onInput="updateArr('depoimentos', ${i}, 'author', this.value)">
                            <input type="text" value="${d.city}" placeholder="Cidade" onInput="updateArr('depoimentos', ${i}, 'city', this.value)">
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- CONTATO/CONFIG -->
        <div id="admin-contato" class="admin-section">
            <div class="admin-card">
                <h4>Informações de Contato</h4>
                <div class="form-group"><label>WhatsApp</label><input type="text" value="${siteData.contato.whatsapp}" onInput="updateData('contato', 'whatsapp', this.value)"></div>
                <div class="form-group"><label>Telefone</label><input type="text" value="${siteData.contato.telefone}" onInput="updateData('contato', 'telefone', this.value)"></div>
                <div class="form-group"><label>Email</label><input type="text" value="${siteData.contato.email}" onInput="updateData('contato', 'email', this.value)"></div>
                <div class="form-group"><label>Instagram</label><input type="text" value="${siteData.contato.instagram}" onInput="updateData('contato', 'instagram', this.value)"></div>
                <div class="form-group"><label>Endereço</label><input type="text" value="${siteData.contato.endereco}" onInput="updateData('contato', 'endereco', this.value)"></div>
            </div>
            <div class="admin-card">
                <h4>Configurações Gerais</h4>
                <div class="form-group"><label>Nome do Escritório</label><input type="text" value="${siteData.config.name}" onInput="updateData('config', 'name', this.value)"></div>
                <div class="form-group"><label>Slogan (Rodapé)</label><input type="text" value="${siteData.config.slogan}" onInput="updateData('config', 'slogan', this.value)"></div>
                <div class="form-group"><label>Nova Senha (Admin)</label><input type="text" placeholder="Deixe em branco para manter" onInput="if(this.value) updateData('config', 'password', this.value)"></div>
            </div>
        </div>
    `;
}

let openProjectFormIndex = null;
window.toggleProjectForm = function(i) {
    openProjectFormIndex = openProjectFormIndex === i ? null : i;
    renderAdminForms();
};
window.addNewProject = function() {
    siteData.projetos.unshift({
        id: Date.now(),
        title: 'Novo Projeto',
        category: 'Residencial',
        year: new Date().getFullYear().toString(),
        area: '0m²',
        desc: 'Descrição do novo projeto.',
        color: 'linear-gradient(145deg, #1c1c1c, #0a0a0a)',
        image: ''
    });
    openProjectFormIndex = 0;
    markUnsaved();
    renderAdminForms();
};
window.removeProject = function(i) {
    if (confirm('Tem certeza que deseja remover este projeto?')) {
        siteData.projetos.splice(i, 1);
        if (openProjectFormIndex === i) openProjectFormIndex = null;
        markUnsaved();
        renderAdminForms();
    }
};

function adminListProjetos() {
    return siteData.projetos.map((p, i) => `
        <div class="list-item" style="flex-direction: column; align-items: stretch; gap: 1rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div class="list-item-content">
                    <div class="list-item-title">${p.title} <span style="font-size:0.8rem; font-weight:normal; color:var(--color-accent)">[${p.category}]</span></div>
                    <div class="list-item-desc">${p.area} • ${p.year}</div>
                </div>
                <div class="list-item-actions">
                    <button class="btn btn-outline" style="padding: 5px 15px;" onclick="toggleProjectForm(${i})">${openProjectFormIndex === i ? 'Fechar' : 'Editar'}</button>
                    <button class="btn btn-outline" style="padding: 5px 15px; color:#ff5555; border-color:#ff5555;" onclick="removeProject(${i})">X</button>
                </div>
            </div>
            <div class="project-form" style="display: ${openProjectFormIndex === i ? 'block' : 'none'}; margin-top:1rem; border-top:1px solid var(--color-border); padding-top:1rem;">
                <div class="form-group"><label>Título</label><input type="text" value="${p.title}" onInput="updateArr('projetos', ${i}, 'title', this.value)"></div>
                <div class="form-group"><label>Categoria</label><input type="text" value="${p.category}" onInput="updateArr('projetos', ${i}, 'category', this.value)"></div>
                <div class="form-group"><label>Ano</label><input type="text" value="${p.year}" onInput="updateArr('projetos', ${i}, 'year', this.value)"></div>
                <div class="form-group"><label>Área</label><input type="text" value="${p.area}" onInput="updateArr('projetos', ${i}, 'area', this.value)"></div>
                <div class="form-group"><label>Descrição</label><textarea onInput="updateArr('projetos', ${i}, 'desc', this.value)">${p.desc}</textarea></div>
                <div class="form-group"><label>Imagem de Capa (Upload)</label>
                    <input type="file" accept="image/*" onChange="handleArrayImageUpload(event, 'projetos', ${i}, 'image')" style="margin-top: 5px; padding: 0.5rem 0; border: none;">
                    ${p.image ? `<div style="margin-top:10px;"><img src="${p.image}" style="max-width:100px; aspect-ratio:3/4; object-fit:cover; border:1px solid var(--color-border);"></div>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Image Handlers
window.handleImageUpload = function(event, section, field) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            updateData(section, field, e.target.result);
            renderAdminForms(); // re-render to preview
        };
        reader.readAsDataURL(file);
    }
};
window.handleArrayImageUpload = function(event, section, index, field) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            updateArr(section, index, field, e.target.result);
            renderAdminForms(); // re-render to preview
        };
        reader.readAsDataURL(file);
    }
};

// Data Handling
let saveTimeout;
function markUnsaved() {
    const status = document.getElementById('save-status');
    status.innerText = 'Salvando alterações...';
    status.classList.add('unsaved');
    
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        saveData();
    }, 1000); // Debounce save
}

window.updateData = function(section, field, value) {
    siteData[section][field] = value;
    markUnsaved();
};

window.updateArr = function(section, index, field, value) {
    siteData[section][index][field] = value;
    markUnsaved();
};

function saveData() {
    localStorage.setItem('plattoData', JSON.stringify(siteData));
    const status = document.getElementById('save-status');
    status.innerText = 'Todas as alterações salvas.';
    status.classList.remove('unsaved');
    renderSite(); // Live preview update
    showToast();
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Export/Import JSON
document.getElementById('admin-export').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(siteData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "platto_config.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
});

document.getElementById('admin-import').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            siteData = data;
            saveData();
            renderAdminForms();
            alert('Configurações importadas com sucesso!');
        } catch(err) {
            alert('Erro ao importar arquivo JSON.');
        }
    };
    reader.readAsText(file);
});

// Run Init
window.addEventListener('DOMContentLoaded', renderSite);
