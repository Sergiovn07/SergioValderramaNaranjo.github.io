// Theme management
let currentTheme = 'ai';
let isDarkMode = true; // Set dark mode as default
let currentLanguage = 'es';


// Content management
function populateContent(content) {
    // Header
    document.querySelector('.header-title').textContent = content.HEADER_TITLE;
    document.querySelector('.footer-text').textContent = content.FOOTER_NOTE;

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
                <img src="${item.logo}" alt="logo">
                <div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');

    document.querySelector('#formacion .section-title').textContent = content.FORMACION_TITLE;
    document.querySelector('#formacion .grid').innerHTML = content.FORMACION_ITEMS
        .map(item => `
           <div class="card">
                <img src="${item.logo}" alt="logo">
                <div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');

    document.querySelector('#proyectos .section-title').textContent = content.PROYECTOS_TITLE;
    document.querySelector('#proyectos .grid').innerHTML = content.PROYECTOS_ITEMS
        .map(item => `
            <div class="card">
                <div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');

    document.querySelector('#habilidades .section-title').textContent = content.HABILIDADES_TITLE;
    document.querySelector('#habilidades .skills-grid').innerHTML = content.HABILIDADES_ITEMS
        .map(skill => `<div class="skill-card">${skill}</div>`).join('');

    document.querySelector('#contacto .section-title').textContent = content.CONTACTO_TITLE;
    document.querySelector('#contacto .email').textContent = content.CONTACTO_EMAIL;

    // Social links
    const socialLinks = content.CONTACTO_SOCIAL;
    if (socialLinks.LINKEDIN) {
        document.querySelector('.social-link.linkedin').href = socialLinks.LINKEDIN;
    }
    if (socialLinks.GITHUB) {
        document.querySelector('.social-link.github').href = socialLinks.GITHUB;
    }
    if (socialLinks.TWITTER) {
        document.querySelector('.social-link.twitter').href = socialLinks.TWITTER;
    }
}

function setEngineeringTheme(theme) {
    document.body.setAttribute('data-engineering-theme', theme);
    currentTheme = theme;
    document.querySelectorAll('.theme-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Set initial dark mode
    document.body.setAttribute('data-theme', 'dark');
    
    // Theme buttons
    document.querySelectorAll('.theme-button').forEach(button => {
        button.addEventListener('click', () => setEngineeringTheme(button.dataset.theme));
    });

    // Dark mode toggle
    document.querySelector('.dark-mode-toggle')?.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    });

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', () => {
            currentLanguage = button.dataset.lang;

            // Apply the corresponding language content
            if (currentLanguage === 'es') {
                populateContent(contentEs);
            } else if (currentLanguage === 'en') {
                populateContent(contentEn);
            } else if (currentLanguage === 'fr') {
                populateContent(contentFr);
            }

            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
            });
        });
    });

    // Initial content load
    populateContent(contentEn);
    setEngineeringTheme(currentTheme);

    // Copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});