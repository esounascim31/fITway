import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDPCvgsMKCDhKlBQEu32uR8sz3IDlMvZkA",
    authDomain: "users-8a636.firebaseapp.com",
    projectId: "users-8a636",
    storageBucket: "users-8a636.appspot.com",
    messagingSenderId: "704316555693",
    appId: "1:704316555693:web:c67ab848aad98d492ea124",
    measurementId: "G-7ZQKVVEKS8"
  };

const users = document.querySelector('[data-js="users-list"]')
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function getUsers(db) {
    const usersCol = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    return usersList;
}
console.log(getUsers(users));

// database.collection('users').get()
//     .then(snapshot => {
//         const usersLis = snapshot.docs.reduce((acc, doc) => {
//             const { firstName, lastName, email } = doc.data()

//             acc += `<li class="my-4">
//             <h5>${firstName}</h5>

//             <ul>
//                 <li>Name ${lastName}</li>
//                 <li>Surname ${email}</li>
//             </ul>
//         </li>`

//             return acc
//         }, '')

//             usersList.innerHTML = usersLis
//         })
//         .catch(err => {
//             console.log(err.message)
//         })



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

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");

const mobilePhone = document.getElementById("mobilePhone");
const address = document.getElementById("address");
const extraInformation = document.getElementById("extraInformation");
const city = document.getElementById("city");
const county = document.getElementById("county");
const country = document.getElementById("country");

const aercode = document.getElementById("aercode");
const nationality = document.getElementById("nationality");
const language = document.getElementById("language");
const workExperience = document.getElementById("workExperience");
const technicalSkill = document.getElementById("technicalSkill");
const interestAchievements = document.getElementById("interestAchievements");
const purposeGoals = document.getElementById("purposeGoals");
const others = document.getElementById("others");
const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");
const resume = document.getElementById("resume");


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