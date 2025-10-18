// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWD6xmq5SkM4Fq3ylhiSxFUXelvXFAFWY",
  authDomain: "streeters-menu.firebaseapp.com",
  projectId: "streeters-menu",
  storageBucket: "streeters-menu.firebasestorage.app",
  messagingSenderId: "350071519909",
  appId: "1:350071519909:web:d3f9bdf33e0c0f386eeb4c",
  measurementId: "G-F70Y5GER8G"
};

// Check if Firebase is loaded
if (typeof firebase === 'undefined') {
  console.error('Firebase SDK not loaded!');
} else {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // Initialize services
  const auth = firebase.auth();
  
  // Export for use in other files
  window.firebaseAuth = auth;
  
  // Only initialize Firestore if the library is loaded
  if (firebase.firestore) {
    const db = firebase.firestore();
    window.firebaseDB = db;
  }
}
