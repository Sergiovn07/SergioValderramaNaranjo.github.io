// Theme management
let currentTheme = 'robotics';
let isDarkMode = false;
let currentLanguage = 'es';

// Theme switching
function setEngineeringTheme(theme) {
    document.body.setAttribute('data-engineering-theme', theme);
    currentTheme = theme;
    document.querySelectorAll('.theme-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

// Dark mode toggle
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
}

// Language switching
async function setLanguage(lang) {
    try {
        const response = await fetch(`contents/content_${lang}.txt`);
        const text = await response.text();
        const content = parseContent(text);
        populateContent(content);
        currentLanguage = lang;
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    } catch (error) {
        console.error('Error loading language content:', error);
    }
}

// Content parsing
function parseContent(text) {
    const content = {};
    let currentKey = '';
    let currentItems = [];

    text.split('\n').forEach(line => {
        line = line.trim();
        if (!line) return;

        if (line.startsWith('#')) {
            if (currentItems.length > 0) {
                content[currentKey] = currentItems;
                currentItems = [];
            }
            currentKey = line.substring(2);
            return;
        }

        if (line.startsWith('[')) {
            const type = line.substring(1, line.indexOf(']')).trim();
            const value = line.substring(line.indexOf(']') + 1).trim();
            
            if (type === 'TITLE') {
                currentItems.push({ title: value });
            } else if (type === 'DESC') {
                currentItems[currentItems.length - 1].description = value;
            } else {
                content[currentKey] = content[currentKey] || {};
                content[currentKey][type.toLowerCase()] = value;
            }
        } else {
            if (currentItems.length > 0 || currentKey.endsWith('_ITEMS')) {
                currentItems.push(line);
            } else {
                content[currentKey] = line;
                if (currentKey === 'NAVIGATION') {
                    content[currentKey] = line.split(' ');
                }
            }
        }
    });

    if (currentItems.length > 0) {
        content[currentKey] = currentItems;
    }

    return content;
}

// Content population
function populateContent(content) {
    // Header
    document.querySelector('.header-title').textContent = content.HEADER_TITLE;
    document.querySelector('.footer-text').textContent = content.HEADER_TITLE;

    // Navigation
    const navItems = content.NAVIGATION;
    const navLists = document.querySelectorAll('.desktop-nav ul, .mobile-nav ul');
    navLists.forEach(navList => {
        navList.innerHTML = navItems.map(item => `
            <li><a href="#${item}">${item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}</a></li>
        `).join('');
    });

    // Sections
    document.querySelector('#inicio .section-title').textContent = content.INICIO_TITLE;
    document.querySelector('#inicio .profile-image').src = content.INICIO_IMAGE;
    document.querySelector('#inicio .intro-text').textContent = content.INICIO_DESCRIPTION;

    document.querySelector('#sobre-mi .section-title').textContent = content.SOBRE_MI_TITLE;
    document.querySelector('#sobre-mi .sobre-mi-content').innerHTML = `<p>${content.SOBRE_MI_DETAILS}</p>`;

    document.querySelector('#experiencia .section-title').textContent = content.EXPERIENCIA_TITLE;
    document.querySelector('#experiencia .grid').innerHTML = content.EXPERIENCIA_ITEMS
        .map(item => `
            <div class="card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');

    document.querySelector('#formacion .section-title').textContent = content.FORMACION_TITLE;
    document.querySelector('#formacion .grid').innerHTML = content.FORMACION_ITEMS
        .map(item => `
            <div class="card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');

    document.querySelector('#proyectos .section-title').textContent = content.PROYECTOS_TITLE;
    document.querySelector('#proyectos .grid').innerHTML = content.PROYECTOS_ITEMS
        .map(item => `
            <div class="card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');

    document.querySelector('#habilidades .section-title').textContent = content.HABILIDADES_TITLE;
    document.querySelector('#habilidades .skills-grid').innerHTML = content.HABILIDADES_ITEMS
        .map(skill => `<div class="skill-card">${skill}</div>`).join('');

    document.querySelector('#contacto .section-title').textContent = content.CONTACTO_TITLE;
    document.querySelector('#contacto .email').textContent = content.CONTACTO_EMAIL;

    // Social links
    const socialLinks = content.CONTACTO_SOCIAL;
    if (socialLinks.linkedin) {
        document.querySelector('.social-link.linkedin').href = socialLinks.linkedin;
    }
    if (socialLinks.github) {
        document.querySelector('.social-link.github').href = socialLinks.github;
    }
    if (socialLinks.twitter) {
        document.querySelector('.social-link.twitter').href = socialLinks.twitter;
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Theme buttons
    document.querySelectorAll('.theme-button').forEach(button => {
        button.addEventListener('click', () => setEngineeringTheme(button.dataset.theme));
    });

    // Dark mode toggle
    document.querySelector('.dark-mode-toggle').addEventListener('click', toggleDarkMode);

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    // Mobile menu
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileNav = document.querySelector('.mobile-nav');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Initial content load
    setLanguage(currentLanguage);
    setEngineeringTheme(currentTheme);
});