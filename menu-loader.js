// Menu Loader - Loads menu data from Firebase and updates prices dynamically

// Wait for Firebase to be ready
window.addEventListener('load', async () => {
    console.log('🔥 Menu Loader: Initializing...');
    
    // Check if Firebase is available
    if (typeof firebase === 'undefined' || typeof firebaseDB === 'undefined') {
        console.warn('⚠️ Firebase not loaded. Using static HTML prices.');
        return;
    }

    try {
        console.log('📥 Loading menu data from Firebase...');
        const snapshot = await firebaseDB.collection('menu').get();
        
        if (snapshot.empty) {
            console.warn('⚠️ No menu data found in Firebase. Using static HTML prices.');
            return;
        }

        const menuData = {};
        snapshot.forEach(doc => {
            const item = doc.data();
            const key = `${item.category}-${item.name}`;
            menuData[key] = item;
        });

        console.log(`✅ Loaded ${Object.keys(menuData).length} items from Firebase`);

        // Update prices and availability in the HTML
        updateMenuPrices(menuData);
        
        console.log('✅ Menu prices updated successfully!');
    } catch (error) {
        console.error('❌ Error loading menu data:', error);
        console.warn('⚠️ Falling back to static HTML prices.');
    }
});

function updateMenuPrices(menuData) {
    // Process each menu section
    document.querySelectorAll('.menu-section').forEach(section => {
        const category = section.getAttribute('data-category');
        
        // Process each menu item in this section
        section.querySelectorAll('.menu-item').forEach(itemElement => {
            const nameDiv = itemElement.querySelector('div:first-child');
            if (!nameDiv) return;

            // Get the ORIGINAL Greek name (stored in data-original-el by translations.js)
            // This is crucial for matching with Firebase data
            const nestedDiv = nameDiv.querySelector('div');
            let itemName;
            
            if (nestedDiv) {
                // Complex structure - get original from nested div
                itemName = nestedDiv.dataset.originalEl || nestedDiv.textContent.trim();
                // Store it if not already stored
                if (!nestedDiv.dataset.originalEl) {
                    nestedDiv.dataset.originalEl = nestedDiv.textContent.trim();
                    itemName = nestedDiv.textContent.trim();
                }
            } else {
                // Simple structure - get original from main div
                itemName = nameDiv.dataset.originalEl || nameDiv.textContent.trim();
                // Store it if not already stored
                if (!nameDiv.dataset.originalEl) {
                    nameDiv.dataset.originalEl = nameDiv.textContent.trim();
                    itemName = nameDiv.textContent.trim();
                }
            }
            
            // Create lookup key using ORIGINAL Greek name
            const key = `${category}-${itemName}`;
            const data = menuData[key];
            
            if (!data) {
                // Item not found in Firebase, skip
                return;
            }

            // Update availability
            if (data.available === false) {
                if (!itemElement.classList.contains('unavailable')) {
                    itemElement.classList.add('unavailable');
                    itemElement.setAttribute('data-unavailable-text', 'Μη διαθέσιμο');
                }
            } else {
                itemElement.classList.remove('unavailable');
                itemElement.removeAttribute('data-unavailable-text');
            }

            // Update price
            const priceDiv = itemElement.querySelector('div:nth-child(2)');
            if (!priceDiv) return;

            // Build the new price HTML
            let priceHTML = data.price;

            // Add subPrice if exists and has content
            if (data.subPrice && data.subPrice.trim().length > 0) {
                priceHTML += `<br><small>${data.subPrice}</small>`;
            }

            // Special handling for items with descriptions or buttons
            const existingButton = priceDiv.querySelector('button');
            if (existingButton) {
                // Keep the button (e.g., tea flavors button)
                priceHTML += '<br>';
                priceHTML += existingButton.outerHTML;
            }

            // Update the price div
            priceDiv.innerHTML = priceHTML;

            // Store original Greek text for translations
            if (!nameDiv.dataset.originalEl) {
                nameDiv.dataset.originalEl = itemName;
            }

            // Store original price text for translations
            const smallElements = priceDiv.querySelectorAll('small');
            smallElements.forEach(small => {
                if (!small.dataset.originalEl) {
                    small.dataset.originalEl = small.textContent.trim();
                }
            });
        });
    });
}

// Function to refresh menu data (can be called manually)
window.refreshMenuData = async function() {
    console.log('🔄 Refreshing menu data...');
    window.location.reload();
};
