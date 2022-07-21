   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
    import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
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
        appId: "1:1064601564886:web:89864f16dee2785b2a3b77"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    const btnLogin = document.getElementById("btnLogin");


    btnLogin.addEventListener('click', (e) => {

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;


        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                const dt = new Date();
                update(ref(database, 'users/' + user.uid), {
                    last_login: dt,
                })
                window.location.href = "./profile.html";
                alert('User loged in!');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage);
            });

    });
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {

            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;

            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    /* logout.addEventListener('click', (e) => {
         signOut(auth).then(() => {
             // Sign-out successful.
 
             alert('user loged out');
         }).catch((error) => {
             // An error happened.
             const errorCode = error.code;
             const errorMessage = error.message;
 
             alert(errorMessage);
         });
     });
 */