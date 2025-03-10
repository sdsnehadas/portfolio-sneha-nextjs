// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwSob9hGUgRuft5w3XljMtxjxXkyILsSI",
  authDomain: "portfolio-sneha-3ae2f.firebaseapp.com",
  projectId: "portfolio-sneha-3ae2f",
  storageBucket: "portfolio-sneha-3ae2f.firebasestorage.app",
  messagingSenderId: "375849306235",
  appId: "1:375849306235:web:f33ca4eb5c3fff80f63ade",
  measurementId: "G-7JSJZBET15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
