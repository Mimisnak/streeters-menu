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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Export for use in other files
window.firebaseAuth = auth;
window.firebaseDB = db;
