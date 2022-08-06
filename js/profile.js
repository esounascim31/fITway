//import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
  getFirestore,
  doc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9OcKUIVvUM_Ds6nmeXk7EiGvnueJYN3c",
  authDomain: "authetication-app-c2b6e.firebaseapp.com",
  databaseURL: "https://authetication-app-c2b6e-default-rtdb.firebaseio.com",
  projectId: "authetication-app-c2b6e",
  storageBucket: "authetication-app-c2b6e.appspot.com",
  messagingSenderId: "1064601564886",
  appId: "1:1064601564886:web:89864f16dee2785b2a3b77",
};

// Initialize Cloud Firestore and get a reference to the service
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const updateProfile = document.querySelector("#profile");
const colRef = collection(db, "user");

// const updateProfile = document.querySelector("#profile")
const userDetails = document.querySelector(".userDetails");
// // const auth = getAuth('user');

// const user = auth.currentUser;

const UID = localStorage.getItem("uid");

getDoc(doc(db, "user", UID)).then((d) => {
  for (let [key, value] of Object.entries(d.data())) {
    if (key === "Language") continue; //verificar aqui

    updateProfile[key].value = value;
  }
});

updateProfile.addEventListener("submit", (e) => {
  e.preventDefault();

  setDoc(doc(db, "user", UID), {
    firstName: updateProfile.firstName.value,
    lastName: updateProfile.lastName.value,
    email: updateProfile.email.value,
    mobilePhone: updateProfile.mobilePhone.value,
    address: updateProfile.address.value,
    extraInformation: updateProfile.extraInformation.value,
    city: updateProfile.city.value,
    county: updateProfile.county.value,
    country: updateProfile.country.value,
    aercode: updateProfile.aercode.value,
    nationality: updateProfile.nationality.value,
    Language: updateProfile.language.value, //verificar o select
    workExperience: updateProfile.workExperience.value,
    technicalSkill: updateProfile.technicalSkill.value,
    interestAchievements: updateProfile.interestAchievements.value,
    purposeGoals: updateProfile.purposeGoals.value,
    others: updateProfile.others.value,
    linkedin: updateProfile.linkedin.value,
    github: updateProfile.github.value,
    // created: firebase.firestore.FieldValue.serverTimestamp()
  })
    .then(() => {
      console.log("inf added");
    })
    .catch((e) => {
      console.log("error", e.message);
    });
});

function updateUserProfile(e) {
  e.preventDefault();
  const userDocRef = firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid);

  userDocRef.update({
    firstName: editProfile["firstName"].value,
    lastName: editProfile["lastName"].value,
    email: editProfile["email"].value,
    mobilePhone: editProfile["mobilePhone"].value,
    address: editProfile["address"].value,
    extraInformation: editProfile["extraInformation"].value,
    city: editProfile["city"].value,
    county: editProfile["county"].value,
    country: editProfile["country"].value,
    code: editProfile["code"].value,
    nationality: editProfile["nationality"].value,
    Language: editProfile["Language"].value,
    workExperience: editProfile["workExperience"].value,
    technicalSkill: editProfile["technicalSkill"].value,
    interestAchievements: editProfile["interestAchievements"].value,
    purposeGoals: editProfile["purposeGoals"].value,
    others: editProfile["others"].value,
    linkedin: editProfile["linkedin"].value,
    github: editProfile["github"].value,
  });

  M.Modal.getInstance(myModel[2]).close();
}

// function db(user){
//   firebase.firestore().collection('users')
//   .doc(user.uid)
//   .set({
//       uid:user.uid,
//       firstName:user.displayFirstName,
//       lastName:user.displayLastName,
//       email: user.email,
//       mobilePhone:"",
//       address:"",
//       extraInformation:"",
//       city:"",
//       county:"",
//       country:"",
//       code:"",
//       nationality:"",
//       Language:"",
//       workExperience:"",
//       technicalSkill:"",
//       interestAchievements:"",
//       purposeGoals:"",
//       others:"",
//       linkedin:"",
//       github:""
//   })
// }

// async function getuserInfo(userID){
//   if(userID){
//     const userInfoSnap = await  firebase.firestore()
//   .collection('users')
//   .doc(userID)
//   .get()

//  const userInfo = userInfoSnap.data()
//  if(userInfo){
//      userDetails.innerHTML = `
//      <h3>${userInfo.name}</h3>
//      <h3>${userInfo.email}</h3>
//      <h3>${userInfo.phone}</h3>
//      `
//  }
//   }else{
//       userDetails.innerHTML = `
//       <h3>please login</h3>
//       `
//   }
// }

// async function getuserInfoRealtime(userID){
//   if(userID){
//     const userdocRef = await  firebase.firestore()
//       .collection('users')
//       .doc(userID)
//       userdocRef.onSnapshot((doc)=>{
//           if(doc.exists){
//                const userInfo = doc.data()
//                   if(userInfo){
//                       userDetails.innerHTML = `
//                       <ul class="collection">
//                         <li class="collection-item"><h4>${userInfo.firstName}</h4></li>
//                         <li class="collection-item"><h4>${userInfo.lastName}</h4></li>
//                         <li class="collection-item">${userInfo.email}</li>
//                         <li class="collection-item">phone - ${userInfo.mobilePhone}</li>
//                         <li class="collection-item">address - ${userInfo.address}</li>
//                         <li class="collection-item">extraInformation - ${userInfo.extraInformation}</li>
//                         <li class="collection-item">county - ${userInfo.county}</li>
//                         <li class="collection-item">country - ${userInfo.country}</li>
//                         <li class="collection-item">code - ${userInfo.code}</li>
//                         <li class="collection-item">nationality - ${userInfo.nationality}</li>
//                         <li class="collection-item">Language - ${userInfo.Language}</li>
//                         <li class="collection-item">workExperience - ${userInfo.workExperience}</li>
//                         <li class="collection-item">technicalSkill - ${userInfo.technicalSkill}</li>
//                         <li class="collection-item">interestAchievements - ${userInfo.interestAchievements}</li>
//                         <li class="collection-item">purposeGoals - ${userInfo.purposeGoals}</li>
//                         <li class="collection-item">other - ${userInfo.others}</li>
//                         <li class="collection-item">linkedin - ${userInfo.linkedin}</li>
//                         <li class="collection-item">github - ${userInfo.github}</li>
//                        //<li class="collection-item">portfolio - <a href="${userInfo.portfolioUrl}">open</li>
//                       </ul>

//                       <button class="btn waves-effect #fbc02d yellow darken-2 modal-trigger" href="#modal3">edit details</button>
//                       `
//                       editProfile["firstName"].value = userInfo.firstName
//                       editProfile["lastName"].value = userInfo.lastName
//                       editProfile["email"].value = userInfo.email
//                       editProfile["mobilePhone"].value = userInfo.mobilePhone
//                       editProfile["address"].value = userInfo.address
//                       editProfile["extraInformation"].value = userInfo.extraInformation
//                       editProfile["county"].value = userInfo.country
//                       editProfile["code"].value = userInfo.code
//                       editProfile["nationality"].value = userInfo.nationality
//                       editProfile["Language"].value = userInfo.Language
//                       editProfile["workExperience"].value = userInfo.workExperience
//                       editProfile["technicalSkill"].value = userInfo.technicalSkill
//                       editProfile["interestAchievements"].value = userInfo.interestAchievements
//                       editProfile["purposeGoals"].value = userInfo.purposeGoals
//                       editProfile["others"].value = userInfo.others
//                       editProfile["linkedin"].value = userInfo.linkedin
//                       editProfile["github"].value = userInfo.github

//                       if(firebase.auth().currentUser.photoURL){ // photo #proimg
//                           document.querySelector('#proimg').src = firebase.auth().currentUser.photoURL
//                       }// photo
//               }
//            }
//       })

//   }else{
//       userDetails.innerHTML = `
//       <h3>please login</h3>
//       `
//   }
// }

// async function allUserDetails(){
//   document.getElementById('table').style.display='table'
//   const userRef = await firebase.firestore().collection('users').get()
//   userRef.docs.forEach(doc=>{
//            const info =   doc.data()
//            document.getElementById('tbody').innerHTML += `
//            <tr>
//             <td>${info.name}</td>
//             <td>${info.email}</td>
//             <td>${info.phone}</td>
//             <td>${info.specialty}</td>
//             <td>${info.experience}</td>
//             <td><a href="${info.portfolioUrl}">view</td>
//           </tr>
//            `
//     })

// }

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;

//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// logout.addEventListener('click', (e) => {
//          signOut(auth).then(() => {
//              // Sign-out successful.

//              alert('user loged out');
//          }).catch((error) => {
//              // An error happened.
//              const errorCode = error.code;
//              const errorMessage = error.message;

//              alert(errorMessage);
//          });
//      });

// db.collection('user').add({
//   firstName: e.target.firstName.value,
//   lastName: e.target.lastName.value,
//   email: e.target.email.value,
//   mobilePhone: e.target.mobilePhone.value,
//   address: e.target.address.value,
//   extraInformation: e.target.extraInformation.value,
//   city: e.target.city.value,
//   county: e.target.county.value,
//   country: e.target.country.value,
//   code: e.target.aercode.value,
//   nationality: e.target.nationality.value,
//   Language: e.target.language.value,
//   workExperience: e.target.workExperience.value,
//   technicalSkill: e.target.technicalSkill.value,
//   interestAchievements: e.target.interestAchievements.value,
//   purposeGoals: e.target.purposeGoals.value,
//   others: e.target.others.value,
//   linkedin: e.target.linkedin.value,
//   github: e.target.github.value,
//   resume: e.target.resume.value,
//   created: firebase.firestore.FieldValue.serverTimestamp()

// console.log(e.target.firstName.value, e.target.lastName.value, e.target.email.value, e.target.mobilePhone.value, e.target.address.value, e.target.extraInformation.value, e.target.city.value, e.target.county.value, e.target.country.value, e.target.aercode.value, e.target.nationality.value, e.target.language.value, e.target.workExperience.value, e.target.technicalSkill.value, e.target.interestAchievements.value, e.target.purposeGoals.value, e.target.others.value, e.target.linkedin.value, e.target.github.value, e.target.resume.value)

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";

//import { getDatabase, ref, set, child, update, remove } from "firebase/firestore";

// import { getFirestore } from "firebase/firestore";
// import { updateCurrentUser } from "firebase/auth";
//import { collection } from "firebase/firestore";
//const usersCollectionRef = collection(db, 'users');

//import { doc, setDoc } from "firebase/firestore";

// import {
//   getFirestore,
//   set,
//   ref,
//   update,
// } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
// import {
//   getAuth,
//   onAuthStateChanged,
//   updateProfile,
//   signOut,
// } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

//mudei a chave, verificar se esta salvando no banco de dados correto!!!!

/* firebase.initializeApp(firebaseConfig) */

// function showMeTheMoney() {
//   try {
//     let params = new URLSearchParams(document.location.search);
//     const uid = params.get("uid");

//     // console.log(document.cookie["uid"]);
//     console.log(uid);
//   } catch (error) {
//     console.log(error);
//   }
// }
// showMeTheMoney();

//const formAddUsers = document.querySelector("#profile")
//const db = firebase.firestore("#user")
//const db = getFirestore(app);

// async function getUsers(db) {
//     const usersCol = collection(db, 'users');
//     const usersSnapshot = await getDocs(usersCol);
//     const usersList = usersSnapshot.docs.map(doc => doc.data());
//     return usersList;
// }
// console.log(getUsers(users));

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
const database = getDatabase(user);
const user = auth.currentUser;
const auth = getAuth(); */

/* updateProfile(auth.currentUser, {

    const firstName = user.firstName;
    const lastName = user.lastName;
    const email = user.email;
    const mobilePhone = user.mobilePhone;
    const address = user.address;
    const extraInformation = user.extraInformation;
    const city = user.city;
    const county = user.county;
    const country = user.country;
    const aercode = user.aercode;
    const nationality = user.nationality;
    const language = user.language;
    const workExperience = user.workExperience;
    const technicalSkill = user.technicalSkill;
    const interestAchievements = user.interestAchievements;
    const purposeGoals = user.purposeGoals;
    const others = user.others;
    const linkedin = user.linkedin;
    const github = user.github;
    const resume = user.resume;

    const uid = user.uid;

}).then(() => {
    alert('Profile Update');
    
    }).catch((error) => {
     //an error occurred   
    });
 */

/* onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;   
    // ...
  } else {
    // User is signed out
    // ...
  }
}); */

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
// import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

//     const initializeApp = {
//             apiKey: "AIzaSyDPCvgsMKCDhKlBQEu32uR8sz3IDlMvZkA",
//             authDomain: "users-8a636.firebaseapp.com",
//             projectId: "users-8a636",
//             storageBucket: "users-8a636.appspot.com",
//             messagingSenderId: "704316555693",
//             appId: "1:704316555693:web:c67ab848aad98d492ea124",
//             measurementId: "G-7ZQKVVEKS8"
//         }

//         // Initialize Firebase

//         const app = initializeApp()
//         const auth = firebase.auth(users);
//         const database = firebase.firestore();

//         const firstName = document.getElementById("firstName");
//         const lastName = document.getElementById("lastName");
//         const email = document.getElementById("email");

//         const mobilePhone = document.getElementById("mobilePhone");
//         const address = document.getElementById("address");
//         const extraInformation = document.getElementById("extraInformation");
//         const city = document.getElementById("city");
//         const county = document.getElementById("county");
//         const country = document.getElementById("country");

//         const aercode = document.getElementById("aercode");
//         const nationality = document.getElementById("nationality");
//         const language = document.getElementById("language");
//         const workExperience = document.getElementById("workExperience");
//         const technicalSkill = document.getElementById("technicalSkill");
//         const interestAchievements = document.getElementById("interestAchievements");
//         const purposeGoals = document.getElementById("purposeGoals");
//         const others = document.getElementById("others");
//         const linkedin = document.getElementById("linkedin");
//         const github = document.getElementById("github");
//         const resume = document.getElementById("resume");

//         const profile = document.getElementById("profile");

//         profile.addEventListener('submit', (e) => {

//             e.preventDefault()

//             var firstName = document.getElementById("firstName").value;
//             var lastName = document.getElementById("lastName").value;
//             var email = document.getElementById("email").value;
//             var mobilePhone = document.getElementById("mobilePhone").value;
//             var address = document.getElementById("address").value;
//             var extraInformation = document.getElementById("extraInformation").value;
//             var city = document.getElementById("city").value;
//             var county = document.getElementById("county").value;
//             var country = document.getElementById("country").value;
//             var aercode = document.getElementById("aercode").value;
//             var nationality = document.getElementById("nationality").value;
//             var language = document.getElementById("language").value;
//             var workExperience = document.getElementById("workExperience").value;
//             var technicalSkill = document.getElementById("technicalSkill").value;
//             var interestAchievements = document.getElementById("interestAchievements").value;
//             var purposeGoals = document.getElementById("purposeGoals").value;
//             var others = document.getElementById("others").value;
//             var linkedin = document.getElementById("linkedin").value;
//             var github = document.getElementById("github").value;
//             var resume = document.getElementById("resume").value;

//         });

//         console.log(auth);
//         const usersList = auth.currentUser;

//         onAuthStateChanged(auth, (usersList) => {
//             if (usersList) {

//                 const uid = usersList.uid;

//             } else {

//             }
//         });
