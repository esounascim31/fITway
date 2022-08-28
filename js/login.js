import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import {
  getDatabase,
  set,
  ref,
  update,
  push,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const auth = getAuth();

const btnLogin = document.getElementById("btnLogin");

// The btnLogin (button) when clicked is creating a Login function when clicked.

// The signInWithEmailandPassword will check the password and the user in the
// firebase database, if the user is not registered it will show an error, otherwise it will
// allow the user to login to the platform.

btnLogin.addEventListener("click", (e) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      try {
        // Signed in
        const user = userCredential.user;
        const dt = new Date();
        push(ref(database, "users"), {
          token: user.uid,
          email: email,
          password: password,
          confirmPassword: password,
        });

        /* update(ref(database, "users/" + user.uid), {
          last_login: dt,
        }); */

        // document.cookie["uid"] = user.uid;

        localStorage.setItem("uid", user.uid);
        window.location.href = `../html/profile.html?uid=${user.uid}`;
        alert(`User loged in!`);
        // ...
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});
