let currentLang = 'el';

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    

    currentLang = localStorage.getItem('selectedLanguage') || 'el';
    changeLanguage(currentLang);
});


function toggleMenu() {
    const categories = document.getElementById('categories');
    const navButton = document.querySelector('.nav-button');
    const menuContent = document.getElementById('menu-content');
    const mainMenu = document.querySelector('.main-menu');
    const carouselPrev = document.querySelector('#carousel-control-prev');
    const carouselNext = document.querySelector('#carousel-control-next');

    if (categories.classList.contains('hidden')) {
        // Εμφάνιση κατηγοριών
        categories.classList.remove('hidden');
        categories.style.display = 'grid';
        menuContent.style.display = 'none';
        mainMenu.style.backdropFilter = 'blur(10px)';
        carouselPrev.style.display = 'none';
        carouselNext.style.display = 'none';
        navButton.textContent = translations[currentLang].close;
    } else {
        // Απόκρυψη κατηγοριών
        categories.classList.add('hidden');
        categories.style.display = 'none';
        menuContent.style.display = 'none';
        mainMenu.style.backdropFilter = 'none';
        carouselPrev.style.display = 'block';
        carouselNext.style.display = 'block';
        navButton.textContent = translations[currentLang].menu;
    }
}

function showCategory(category) {
    const categories = document.getElementById('categories');
    const navButton = document.querySelector('.nav-button');
    const menuContent = document.getElementById('menu-content');

    // Απόκρυψη κατηγοριών
    categories.style.display = 'none';
    categories.classList.add('hidden');

    // Εμφάνιση περιεχομένου μενού
    menuContent.style.display = 'block';
    
    // Ενημέρωση κουμπιού
    navButton.textContent = translations[currentLang].back;

    // Εμφάνιση επιλεγμένης κατηγορίας
    clearCategories();
    document.querySelector(`[data-category="${category}"]`).style.display = 'block';
}

function clearCategories() {
    document.querySelectorAll('.menu-section').forEach(section => {
        section.style.display = 'none';
    });
}


function changeLanguage(lang) {

    // Update menu button
    const navButton = document.querySelector('.nav-button');
    if (navButton.textContent === translations[currentLang].menu) {
        navButton.textContent = translations[lang].menu;
    }
    else if (navButton.textContent === translations[currentLang].close) {
        navButton.textContent = translations[lang].close;
    }
    else if (navButton.textContent === translations[currentLang].back) {
        navButton.textContent = translations[lang].back;
    }
    else {
        navButton.textContent = translations[lang].menu;
    }

    // Update back button
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.textContent = translations[lang].back;
    }

    // Update category cards
    document.querySelectorAll('.category-card h2').forEach(heading => {
        const category = heading.parentElement.getAttribute('onclick').match(/'([^']+)'/)[1];
        if (translations[lang][category]) {
            heading.textContent = translations[lang][category];
        }
    });

    // Update menu sections and items
    document.querySelectorAll('.menu-section').forEach(section => {
        const category = section.getAttribute('data-category');

        // Update section title
        const titleElement = section.querySelector('h2');
        if (titleElement && translations[lang][`${category}_title`]) {
            titleElement.textContent = translations[lang][`${category}_title`];
        }

        // Update menu items
        section.querySelectorAll('.menu-item').forEach(item => {
            const nameDiv = item.querySelector('div:first-child');
            if (!nameDiv) return;

            // Get the original Greek text if not already stored
            if (!nameDiv.dataset.original) {
                nameDiv.dataset.original = nameDiv.textContent.trim();
            }

            const originalText = nameDiv.dataset.original;

            // Check if item has description
            if (nameDiv.children.length > 0) {
                const titleDiv = nameDiv.querySelector('div');
                const descDiv = nameDiv.querySelector('small');

                if (titleDiv) {
                    if (!titleDiv.dataset.original) {
                        titleDiv.dataset.original = titleDiv.textContent.trim();
                    }
                    const originalTitle = titleDiv.dataset.original;
                    if (translations[lang][`${category}_items`]?.[originalTitle]) {
                        titleDiv.textContent = translations[lang][`${category}_items`][originalTitle];
                    }
                }

                if (descDiv) {
                    if (!descDiv.dataset.original) {
                        descDiv.dataset.original = descDiv.textContent.trim();
                    }
                    const originalDesc = descDiv.dataset.original;
                    const descKey = `${category}_desc`;
                    if (translations[lang][`${category}_items`]?.[descKey]) {
                        descDiv.textContent = translations[lang][`${category}_items`][descKey];
                    }
                }
            } else {
                // Simple item without description
                if (translations[lang][`${category}_items`]?.[originalText]) {
                    nameDiv.textContent = translations[lang][`${category}_items`][originalText];
                }
            }
        });
    });

    // Update footer
    document.querySelector('#address-text').textContent = translations[lang].address;
    document.querySelector('.developer-link').textContent = translations[lang].developed;

    // Update syrup card (if present)
    const syrupCard = document.querySelector('.syrup-card');
    if (syrupCard) {
        const titleEl = syrupCard.querySelector('.syrup-title');
        if (titleEl) {
            if (!titleEl.dataset.original) titleEl.dataset.original = titleEl.textContent.trim();
            if (translations[lang]?.syrup_info_title) {
                titleEl.textContent = translations[lang].syrup_info_title;
            } else {
                titleEl.textContent = titleEl.dataset.original;
            }
        }

        syrupCard.querySelectorAll('.syrup-name').forEach(nameEl => {
            if (!nameEl.dataset.original) nameEl.dataset.original = nameEl.textContent.trim();
            const original = nameEl.dataset.original;
            if (translations[lang]?.syrup_items?.[original]) {
                nameEl.textContent = translations[lang].syrup_items[original];
            } else {
                nameEl.textContent = original;
            }
        });
    }

    // Save language preference
    localStorage.setItem('selectedLanguage', lang);

    currentLang = lang;
}