import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9OcKUIVvUM_Ds6nmeXk7EiGvnueJYN3c",
  authDomain: "authetication-app-c2b6e.firebaseapp.com",
  databaseURL: "https://authetication-app-c2b6e-default-rtdb.firebaseio.com",
  projectId: "authetication-app-c2b6e",
  storageBucket: "authetication-app-c2b6e.appspot.com",
  messagingSenderId: "1064601564886",
  appId: "1:1064601564886:web:89864f16dee2785b2a3b77",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
