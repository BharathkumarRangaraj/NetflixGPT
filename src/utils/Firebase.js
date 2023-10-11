// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEjQto2lAF9g_n42CVQ5gCo-HOpAl6hhA",
  authDomain: "netflixgpt-494de.firebaseapp.com",
  projectId: "netflixgpt-494de",
  storageBucket: "netflixgpt-494de.appspot.com",
  messagingSenderId: "218936099507",
  appId: "1:218936099507:web:ebcaa6f4e1c16fb2e7a6c6",
  measurementId: "G-5V26N0GSP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);