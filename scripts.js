let currentLang = 'el';

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'el';
    
    // Only call changeLanguage if the saved language is different from the default (el)
    // This ensures originalEl captures the Greek text from HTML first
    if (savedLang !== 'el') {
        changeLanguage(savedLang);
    } else {
        currentLang = 'el';
    }
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

            // Store original text for the main name div (only once, from Greek)
            if (!nameDiv.dataset.originalEl) {
                nameDiv.dataset.originalEl = nameDiv.textContent.trim();
            }

            const originalText = nameDiv.dataset.originalEl;

            // Check if nameDiv has nested structure (div + small inside)
            const nestedDiv = nameDiv.querySelector('div');
            const nestedSmall = nameDiv.querySelector('small');

            if (nestedDiv || nestedSmall) {
                // Complex structure with nested elements
                if (nestedDiv) {
                    if (!nestedDiv.dataset.originalEl) {
                        nestedDiv.dataset.originalEl = nestedDiv.textContent.trim();
                    }
                    const originalTitle = nestedDiv.dataset.originalEl;
                    if (translations[lang][`${category}_items`]?.[originalTitle]) {
                        nestedDiv.textContent = translations[lang][`${category}_items`][originalTitle];
                    } else {
                        nestedDiv.textContent = originalTitle;
                    }
                }

                if (nestedSmall) {
                    if (!nestedSmall.dataset.originalEl) {
                        nestedSmall.dataset.originalEl = nestedSmall.textContent.trim();
                    }
                    const originalDesc = nestedSmall.dataset.originalEl;
                    if (translations[lang][`${category}_items`]?.[originalDesc]) {
                        nestedSmall.textContent = translations[lang][`${category}_items`][originalDesc];
                    } else if (translations[lang]?.descriptions?.[originalDesc]) {
                        nestedSmall.textContent = translations[lang].descriptions[originalDesc];
                    } else {
                        nestedSmall.textContent = originalDesc;
                    }
                }
            } else {
                // Simple item - just translate the text directly
                if (translations[lang][`${category}_items`]?.[originalText]) {
                    nameDiv.textContent = translations[lang][`${category}_items`][originalText];
                } else {
                    nameDiv.textContent = originalText;
                }
            }

            // Also handle small tags in the price column (second div)
            const priceDiv = item.querySelector('div:nth-child(2)');
            if (priceDiv) {
                priceDiv.querySelectorAll('small').forEach(smallEl => {
                    if (!smallEl.dataset.originalEl) {
                        smallEl.dataset.originalEl = smallEl.textContent.trim();
                    }
                    const originalDesc = smallEl.dataset.originalEl;
                    if (translations[lang]?.descriptions?.[originalDesc]) {
                        smallEl.textContent = translations[lang].descriptions[originalDesc];
                    } else {
                        smallEl.textContent = originalDesc;
                    }
                });
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
            if (!titleEl.dataset.originalEl) titleEl.dataset.originalEl = titleEl.textContent.trim();
            if (translations[lang]?.syrup_info_title) {
                titleEl.textContent = translations[lang].syrup_info_title;
            } else {
                titleEl.textContent = titleEl.dataset.originalEl;
            }
        }

        syrupCard.querySelectorAll('.syrup-name').forEach(nameEl => {
            if (!nameEl.dataset.originalEl) nameEl.dataset.originalEl = nameEl.textContent.trim();
            const original = nameEl.dataset.originalEl;
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