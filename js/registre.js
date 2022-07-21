 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
 import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

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

 const sighUp = document.getElementById("sighUp");

 sighUp.addEventListener("click", function (){

firebase.auth().sighUpWithEmailAndPassword(firstName.value, lastName.value, email.value, password.value,confirmPassword.value).then(function (result) {
    alert("successful");

 }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    alert(errorMessage);
    console.log("Failure!")
 });

});
    


 sighUp.addEventListener('click', (e) => {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById('email').value;
    var mobilePhone = document.getElementById("mobilePhone").value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    //var username = document.getElementById('username').value;
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(mobilePhone);
    console.log(password);
    console.log(confirmPassword);

     createUserWithEmailAndPassword(auth, firstName, lastName, email, mobilePhone, password, confirmPassword)
         .then((userCredential) => {
             // Signed in
             const user = userCredential.user;

             set(ref(database, 'user/' + user.uid), {
                 //username: username,
                 firstName: firstName,
                 lastName: lastName,
                 email: email,
                 mobilePhone: mobilePhone,
                 password: password,
                 confirmPassword: confirmPassword,
             })

             alert("user created!");
             // ...
         })
         .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;

             alert(errorMessage);
             // ..
         });
 });
 const users = auth.currentUser;
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