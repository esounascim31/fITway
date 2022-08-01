import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
//import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9OcKUIVvUM_Ds6nmeXk7EiGvnueJYN3c",
    authDomain: "authetication-app-c2b6e.firebaseapp.com",
    databaseURL: "https://authetication-app-c2b6e-default-rtdb.firebaseio.com",
    projectId: "authetication-app-c2b6e",
    storageBucket: "authetication-app-c2b6e.appspot.com",
    messagingSenderId: "1064601564886",
    appId: "1:1064601564886:web:89864f16dee2785b2a3b77",
  };

const users = document.querySelector("user")
const updateProfile = document.querySelector("#profile")
const db = firebase.firestore()

const app = initializeApp(firebaseConfig);

db.collection('user').get()
.then(snapshot => {
    const userLis = snapshot.docs.reduce((acc, doc) => {
    const { firstName, lastName } = doc.data()

    acc += `<li class="my-4"> 
    
    <ul>
    <li>Name ${firstName}</li>
    <li>Last name ${lastName}</li>
    <li>Email ${email}</li>
    <li>Added on ${createdAt.toDate()}</li>
    </ul>
    </li>`
    
    return
    }, '')
    userList.innerHTML = userLis
})
.catch(err => {
    console.log(err.message)
})


// import { getAuth } from "firebase/auth";

// const auth = getAuth();
// const user = auth.currentUser;
// if (user !== null) {

//     const firstName = user.firstName;
//     const lastName = user.lastName;
//     const email = user.email;
//     const mobilePhone = user.mobilePhone;
//     const address = user.address;
//     const extraInformation = user.extraInformation;
//     const city = user.city;
//     const county = user.county;
//     const country = user.country;
//     const aercode = user.aercode;
//     const nationality = user.nationality;
//     const language = user.language;
//     const workExperience = user.workExperience;
//     const technicalSkill = user.technicalSkill;
//     const interestAchievements = user.interestAchievements;
//     const purposeGoals = user.purposeGoals;
//     const others = user.others;
//     const linkedin = user.linkedin;
//     const github = user.github;
//     const resume = user.resume;

//     const uid = user.uid;
// }


// // const firebaseConfig = {
//     apiKey: "AIzaSyDPCvgsMKCDhKlBQEu32uR8sz3IDlMvZkA",
//     authDomain: "users-8a636.firebaseapp.com",
//     projectId: "users-8a636",
//     storageBucket: "users-8a636.appspot.com",
//     messagingSenderId: "704316555693",
//     appId: "1:704316555693:web:c67ab848aad98d492ea124",
//     measurementId: "G-7ZQKVVEKS8"
//   };




/*

firebase.initializeApp({
    apiKey: "AIzaSyDPCvgsMKCDhKlBQEu32uR8sz3IDlMvZkA",
    authDomain: "users-8a636.firebaseapp.com",
    projectId: "users-8a636",
    storageBucket: "users-8a636.appspot.com",
    messagingSenderId: "704316555693",
    appId: "1:704316555693:web:c67ab848aad98d492ea124",
    measurementId: "G-7ZQKVVEKS8"
})

// Initialize Firebase
const auth = firebase.auth();
const database = firebase.firestore();




profile.addEventListener('onclick', (e) => {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var mobilePhone = document.getElementById("mobilePhone").value;
    var address = document.getElementById("address").value;
    var extraInformation = document.getElementById("extraInformation").value;
    var city = document.getElementById("city").value;
    var county = document.getElementById("county").value;
    var country = document.getElementById("country").value;
    var aercode = document.getElementById("aercode").value;
    var nationality = document.getElementById("nationality").value;
    var language = document.getElementById("language").value;
    var workExperience = document.getElementById("workExperience").value;
    var technicalSkill = document.getElementById("technicalSkill").value;
    var interestAchievements = document.getElementById("interestAchievements").value;
    var purposeGoals = document.getElementById("purposeGoals").value;
    var others = document.getElementById("others").value;
    var linkedin = document.getElementById("linkedin").value;
    var github = document.getElementById("github").value;
    var resume = document.getElementById("resume").value;

});

console.log(auth);
const usersList = auth.currentUser;

onAuthStateChanged(auth, (usersList) => {
    if (usersList) {

        const uid = UsersList.uid;

    } else {

    }
});

*/