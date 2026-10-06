import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEjldlAXo7-jJqSCHO4SH6mo3w4eoleNA",
  authDomain: "teddyfly-767e1.firebaseapp.com",
  projectId: "teddyfly-767e1",
  storageBucket: "teddyfly-767e1.firebasestorage.app",
  messagingSenderId: "951813933755",
  appId: "1:951813933755:web:9948887bd7abea96b0779e",
  measurementId: "G-2K2ZHVVYMY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Coincide con id="loginForm" de tu HTML
const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value;

    // Traduce "admin" al correo interno que creaste en Firebase
    const emailToUse = userInput.toLowerCase() === 'admin' ? 'admin@teddysfly.com' : userInput;

    try {
      await signInWithEmailAndPassword(auth, emailToUse, passwordInput);
      // Si el login es exitoso, redirige al panel
      window.location.href = 'dashboard.html';
    } catch (error) {
      console.error("Error de acceso:", error.message);
      // Muestra el mensaje de error oculto en tu HTML
      if (errorMsg) {
        errorMsg.style.display = 'block';
      }
    }
  });
}
