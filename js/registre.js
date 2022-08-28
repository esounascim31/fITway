// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC9OcKUIVvUM_Ds6nmeXk7EiGvnueJYN3c",
  authDomain: "authetication-app-c2b6e.firebaseapp.com",
  databaseURL: "https://authetication-app-c2b6e-default-rtdb.firebaseio.com",
  projectId: "authetication-app-c2b6e",
  storageBucket: "authetication-app-c2b6e.appspot.com",
  messagingSenderId: "1064601564886",
  appId: "1:1064601564886:web:89864f16dee2785b2a3b77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const sighUp = document.getElementById("sighUp");

sighUp.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("sighUp");
  console.log(auth);

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const mobilePhone = document.getElementById("mobilePhone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.href = `../html/profile.html?uid=${user.uid}`;
      alert("user created!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage);
      // ..
    });
});
