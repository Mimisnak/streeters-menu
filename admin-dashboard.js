// Admin Dashboard JavaScript

let menuItems = [];
let currentCategory = 'all';
let hasChanges = false;

// Categories configuration
const categories = {
    all: 'Όλα',
    coffee: 'Καφέδες',
    drinks: 'Ποτά',
    beer: 'Μπίρες',
    granita: 'Γρανίτες',
    beverages: 'Ροφήματα',
    soft: 'Αναψυκτικά',
    baguettes: 'Baguettes',
    energy: 'Energy Drinks',
    smoothies: 'Smoothies'
};

// Check authentication
firebaseAuth.onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = 'admin.html';
    } else {
        document.getElementById('userEmail').textContent = user.email;
        loadMenuData();
    }
});

// Logout button
document.getElementById('logoutBtn').addEventListener('click', async () => {
    if (hasChanges) {
        if (!confirm('Έχετε μη αποθηκευμένες αλλαγές. Θέλετε να αποσυνδεθείτε;')) {
            return;
        }
    }
    await firebaseAuth.signOut();
    window.location.href = 'admin.html';
});

// Save all button
document.getElementById('saveAllBtn').addEventListener('click', saveAllChanges);

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    renderMenuItems(searchTerm);
});

// Load menu data from Firestore
async function loadMenuData() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('show');

    try {
        const snapshot = await firebaseDB.collection('menu').get();
        
        if (snapshot.empty) {
            // If no data exists, we'll need to initialize it
            console.log('No menu data found. Please upload initial data.');
            alert('Δεν βρέθηκαν δεδομένα menu. Παρακαλώ ανεβάστε τα αρχικά δεδομένα.');
            loadingOverlay.classList.remove('show');
            return;
        }

        menuItems = [];
        snapshot.forEach((doc) => {
            menuItems.push({
                id: doc.id,
                ...doc.data()
            });
        });

        // Sort by category and name
        menuItems.sort((a, b) => {
            if (a.category !== b.category) {
                return a.category.localeCompare(b.category);
            }
            return a.name.localeCompare(b.name);
        });

        renderCategoryTabs();
        renderMenuItems();
        updateStats();
        loadingOverlay.classList.remove('show');
    } catch (error) {
        console.error('Error loading menu data:', error);
        alert('Σφάλμα φόρτωσης δεδομένων: ' + error.message);
        loadingOverlay.classList.remove('show');
    }
}

// Render category tabs
function renderCategoryTabs() {
    const tabsContainer = document.getElementById('categoryTabs');
    tabsContainer.innerHTML = '';

    Object.keys(categories).forEach(catKey => {
        const tab = document.createElement('div');
        tab.className = 'category-tab';
        if (catKey === currentCategory) {
            tab.classList.add('active');
        }
        tab.textContent = categories[catKey];
        tab.addEventListener('click', () => {
            currentCategory = catKey;
            renderCategoryTabs();
            renderMenuItems();
        });
        tabsContainer.appendChild(tab);
    });
}

// Render menu items
function renderMenuItems(searchTerm = '') {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    let filteredItems = menuItems;

    // Filter by category
    if (currentCategory !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === currentCategory);
    }

    // Filter by search term
    if (searchTerm) {
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm)
        );
    }

    filteredItems.forEach(item => {
        const card = createMenuItemCard(item);
        menuGrid.appendChild(card);
    });

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '<div style="text-align: center; padding: 40px; color: #999;">Δεν βρέθηκαν προϊόντα</div>';
    }
}

// Create menu item card
function createMenuItemCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-item-card';
    if (!item.available) {
        card.classList.add('unavailable');
    }

    const itemInfo = document.createElement('div');
    itemInfo.className = 'item-info';
    itemInfo.innerHTML = `
        <h3>${item.name}</h3>
        <span class="category-badge">${categories[item.category] || item.category}</span>
    `;

    const itemPrice = document.createElement('div');
    itemPrice.className = 'item-price';
    itemPrice.style.display = 'flex';
    itemPrice.style.flexDirection = 'column';
    itemPrice.style.gap = '8px';
    itemPrice.style.minWidth = '200px';
    
    // Main price input
    const priceInput = document.createElement('input');
    priceInput.type = 'text';
    priceInput.value = item.price;
    priceInput.placeholder = 'Κύρια τιμή';
    priceInput.addEventListener('input', () => {
        item.price = priceInput.value;
        hasChanges = true;
    });
    itemPrice.appendChild(priceInput);
    
    // SubPrice input - only show if there is actual content (not just empty string)
    if (item.subPrice && item.subPrice.trim().length > 0) {
        const subPriceInput = document.createElement('input');
        subPriceInput.type = 'text';
        subPriceInput.value = item.subPrice;
        subPriceInput.placeholder = 'Επιπλέον τιμές';
        subPriceInput.style.fontSize = '13px';
        subPriceInput.style.color = '#666';
        subPriceInput.addEventListener('input', () => {
            item.subPrice = subPriceInput.value;
            hasChanges = true;
        });
        itemPrice.appendChild(subPriceInput);
    }

    const itemActions = document.createElement('div');
    itemActions.className = 'item-actions';
    
    const toggle = document.createElement('div');
    toggle.className = 'toggle-available';
    if (item.available) {
        toggle.classList.add('active');
    }
    toggle.addEventListener('click', () => {
        item.available = !item.available;
        toggle.classList.toggle('active');
        card.classList.toggle('unavailable');
        hasChanges = true;
        updateStats();
    });
    itemActions.appendChild(toggle);

    card.appendChild(itemInfo);
    card.appendChild(itemPrice);
    card.appendChild(itemActions);

    return card;
}

// Update statistics
function updateStats() {
    const total = menuItems.length;
    const available = menuItems.filter(item => item.available).length;
    const unavailable = total - available;

    document.getElementById('totalItems').textContent = total;
    document.getElementById('availableItems').textContent = available;
    document.getElementById('unavailableItems').textContent = unavailable;
}

// Save all changes to Firestore
async function saveAllChanges() {
    if (!hasChanges) {
        alert('Δεν υπάρχουν αλλαγές για αποθήκευση.');
        return;
    }

    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('show');

    try {
        // Use batch write for better performance
        const batch = firebaseDB.batch();

        menuItems.forEach(item => {
            const docRef = firebaseDB.collection('menu').doc(item.id);
            batch.update(docRef, {
                price: item.price,
                subPrice: item.subPrice || '',
                available: item.available,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        });

        await batch.commit();

        hasChanges = false;
        loadingOverlay.classList.remove('show');
        
        // Show success indicator
        const saveIndicator = document.getElementById('saveIndicator');
        saveIndicator.classList.add('show');
        setTimeout(() => {
            saveIndicator.classList.remove('show');
        }, 3000);

    } catch (error) {
        console.error('Error saving changes:', error);
        alert('Σφάλμα αποθήκευσης: ' + error.message);
        loadingOverlay.classList.remove('show');
    }
}

// Warn before leaving if there are unsaved changes
window.addEventListener('beforeunload', (e) => {
    if (hasChanges) {
        e.preventDefault();
        e.returnValue = '';
    }
});
