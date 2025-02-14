import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdgGN2m6ImyjyE8DnxXLo3Ox1ICiN46pI",
  authDomain: "manga-94c2d.firebaseapp.com",
  projectId: "manga-94c2d",
  storageBucket: "manga-94c2d.appspot.com",
  messagingSenderId: "548444622739",
  appId: "1:548444622739:web:e93a6f49ffe5a4043e2266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;