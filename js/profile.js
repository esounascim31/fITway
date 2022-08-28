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

// updateProfile – is the function that was created to add or edit the variables that were created. 

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

// update function
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
