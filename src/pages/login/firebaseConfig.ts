// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsWebpz3IvIBsVXlMJtXupaH7keHFLMS8",
  authDomain: "gerenciador-bcda5.firebaseapp.com",
  projectId: "gerenciador-bcda5",
  storageBucket: "gerenciador-bcda5.appspot.com",
  messagingSenderId: "942208360256",
  appId: "1:942208360256:web:fa4f05a622fdd6b0e0e4a5",
  measurementId: "G-7KKZ88H1CM"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Exportando o Auth para uso
export const auth = getAuth(app);
