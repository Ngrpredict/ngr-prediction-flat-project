// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDAYvYO4VHPRCQG9F4ddGYdtmzCslmAfkg",
  authDomain: "ngr-predictions.firebaseapp.com",
  projectId: "ngr-predictions",
  storageBucket: "ngr-predictions.firebasestorage.app",
  messagingSenderId: "419273233863",
  appId: "1:419273233863:web:3e773091065785fa2db5e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and database
export const auth = getAuth(app);
export const db = getFirestore(app);
