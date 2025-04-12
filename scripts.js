let currentLang = 'el';

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('categories').style.display = 'none';

    currentLang = localStorage.getItem('selectedLanguage') || 'el';
    changeLanguage(currentLang);
});


function toggleMenu() {
    const categories = document.getElementById('categories');
    const navButton = document.querySelector('.nav-button');
    const mainMenu = document.querySelector('.main-menu');

    if (categories.style.display === 'none' || categories.style.display === '') {
        categories.style.display = 'grid';
        mainMenu.style.display = 'none';
        navButton.textContent = translations[currentLang].close;

        clearCategories();
    } else {
        categories.style.display = 'none';
        mainMenu.style.display = 'block';
        navButton.textContent = translations[currentLang].menu;
    }
}


function showCategory(category) {
    const navButton = document.querySelector('.nav-button');
    navButton.textContent = translations[currentLang].back;

    document.getElementById('categories').style.display = 'none';
    document.getElementById('menu-content').style.display = 'block';

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
    document.querySelector('.contact-info a:first-child').textContent = translations[lang].address;
    document.querySelector('.contact-info a:last-child').textContent = translations[lang].phone;
    document.querySelector('.social-section h3').textContent = translations[lang].social;
    document.querySelector('.developer-link').textContent = translations[lang].developed;

    // Save language preference
    localStorage.setItem('selectedLanguage', lang);

    currentLang = lang;
}