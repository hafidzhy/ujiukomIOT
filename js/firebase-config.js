// Firebase Configuration
// Project: monitoring-92e1e
// PENTING: Jangan commit file ini ke repository publik.
// Gunakan Firebase Security Rules untuk membatasi akses data.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1Fhk-nIaLYJR-xkq1vD5PdApUJhU3sEM",
  authDomain: "ujikomiot2026.firebaseapp.com",
  databaseURL: "https://ujikomiot2026-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ujikomiot2026",
  storageBucket: "ujikomiot2026.firebasestorage.app",
  messagingSenderId: "1044373669019",
  appId: "1:1044373669019:web:e265dafdfc32e1f46d723e",
  measurementId: "G-HL91Y94XQM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
