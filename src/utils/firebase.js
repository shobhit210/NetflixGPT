// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGxocoU5WbEQgfEhglru8xxcsrBDzT-r8",
  authDomain: "netflixgpt-8cb1a.firebaseapp.com",
  projectId: "netflixgpt-8cb1a",
  storageBucket: "netflixgpt-8cb1a.firebasestorage.app",
  messagingSenderId: "749613024628",
  appId: "1:749613024628:web:20b9208aa49c83432b9821",
  measurementId: "G-BL3S951J8W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
