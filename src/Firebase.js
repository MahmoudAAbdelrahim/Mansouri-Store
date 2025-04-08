// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqwBSrzBW3s_osSz1tDI3uDbk9H6kbpzw",
  authDomain: "al-mansouri-ecom.firebaseapp.com",
  projectId: "al-mansouri-ecom",
  storageBucket: "al-mansouri-ecom.firebasestorage.app",
  messagingSenderId: "948463562834",
  appId: "1:948463562834:web:634b1a56412e3b4c63af8b",
  measurementId: "G-VTS8CES172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);