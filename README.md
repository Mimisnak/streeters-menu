# Streeters Menu

A modern, responsive digital menu system for Streeters café with real-time Firebase integration and admin panel.

## Live Site

**Public Menu:** [streeters.sverkos.net](http://streeters.sverkos.net)  
**Admin Dashboard:** [streeters.sverkos.net/admin-dashboard.html](http://streeters.sverkos.net/admin-dashboard.html)

## Features

### Public Menu
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Multi-language Support** - Greek and English translations
- **Category Navigation** - Organized menu sections (Coffee, Drinks, Beer, Smoothies, etc.)
- **Real-time Price Updates** - Prices sync automatically from Firebase
- **Availability Status** - Items marked as unavailable are clearly indicated
- **Image Carousel** - Slideshow of café photos

### Admin Panel
- **Firebase Authentication** - Secure login system
- **Price Management** - Update prices in real-time
- **Availability Toggle** - Mark items as available/unavailable
- **Secondary Pricing** - Support for size variations (double, triple, etc.)
- **Search & Filter** - Quickly find items by name or category
- **Statistics Dashboard** - View total items and availability counts
- **Batch Updates** - Save multiple changes at once

## Tech Stack

- **Frontend:** Vanilla JavaScript, HTML5, CSS3
- **Backend:** Firebase Firestore
- **Authentication:** Firebase Auth
- **Hosting:** GitHub Pages
- **Fonts:** Google Fonts (Dela Gothic One, Ubuntu)
- **Icons:** Font Awesome 6.7.2
- **Carousel:** Bootstrap 5.3.7

## Project Structure

```
streeters-menu/
├── index.html              # Main menu page
├── admin.html              # Admin login page
├── admin-dashboard.html    # Admin management interface
├── admin-dashboard.js      # Admin logic
├── scripts.js              # Menu navigation & interactions
├── translations.js         # Multi-language support
├── menu-loader.js          # Firebase data loader
├── firebase-config.js      # Firebase configuration
├── styles.css              # Main stylesheet
├── media.css               # Responsive styles
├── upload-menu-data.html   # Data migration tool
├── images/                 # Logo and slideshow images
└── CNAME                   # Custom domain configuration
```

## Setup

### Prerequisites
- GitHub account
- Firebase project with Firestore enabled
- Custom domain (optional)

### Firebase Configuration

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Enable Email/Password authentication
4. Update `firebase-config.js` with your credentials:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    // ... other config
};
```

### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /menu/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Initial Data Upload

1. Open `upload-menu-data.html` in a browser
2. Login with admin credentials
3. Click "Check Data" then "Upload Data"
4. Wait for confirmation

### GitHub Pages Deployment

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch: `main`, folder: `/root`
4. (Optional) Add custom domain in CNAME file

## Admin Access

Default admin email is configured in Firebase Authentication. Update prices and availability through the admin dashboard.

**Note:** Admin credentials are managed through Firebase Console for security.

## Development

### Local Development

```bash
# Start a local server
python -m http.server 8000

# Or use any other local server
npx http-server
```

Navigate to `http://localhost:8000`

### Testing Admin Panel

1. Go to `http://localhost:8000/admin.html`
2. Login with Firebase credentials
3. Test price updates and availability toggles
4. Changes sync immediately to Firestore

## Menu Categories

- **Καφέδες** (Coffee) - 13 items
- **Ποτά σε ποτήρι** (Drinks) - 10 items
- **Μπύρες / Ποτά** (Beer) - 10 items
- **Γρανίτες** (Granita) - 9 items
- **Ροφήματα** (Beverages) - 16 items
- **Αναψυκτικά** (Soft Drinks) - 14 items
- **Σνακ, Μπαγκέτες & Γλυκά** (Snacks, Baguettes & Sweets) - 24 items
- **Energy Drinks** - 1 item
- **Smoothies** - 7 items

**Total:** 98 menu items

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)

## Performance

- Lightweight vanilla JS (no heavy frameworks)
- Lazy loading for images
- Efficient Firebase queries
- Cached translations

## Contributing

This is a private project for Streeters café. For issues or suggestions, please contact the developer.

## License

© 2025 Streeters cafe. All rights reserved.

## Developer

Developed by [mimisnak](https://mimis.dev)


