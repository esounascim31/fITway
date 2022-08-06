// // 

// Implementar!

// onAuthStateChanged = evento que questiona o Firebase se ocorreu alguma mudança no status do usuarios







// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const auth = getAuth();


// const updateProfile = document.querySelector("#profile")
// const userDetails  = document.querySelector('.userDetails')
// // Initialize Firebase
// //const auth = getAuth(app);
// const sighUp = document.getElementById("sighUp");

// const btnLogin = document.getElementById("btnLogin");


// //login 

// sighUp.addEventListener("click",(e) => {
//     e.preventDefault();
//     console.log("sighUp");
//     console.log(auth);

//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const email = document.getElementById('email').value;
//     const mobilePhone = document.getElementById("mobilePhone").value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById("confirmPassword").value;

//     createUserWithEmailAndPassword(auth, email, password)
//         .then(userCredential => {
//         // Signed in
//         const user = userCredential.user;
//         window.location.href = `../html/profile.html?uid=${user.uid}`;
//         alert("user created!");
// })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;

//         console.log(errorMessage);
//         // ..
//     });

// });

// btnLogin.addEventListener("click", (e) => {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
  
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         try {
//           // Signed in
//           const user = userCredential.user;
//           const dt = new Date();
//           push(ref(database, "users"), {       
//                   token: user.uid,
//                   email: email,                     
//                   password: password,
//                   confirmPassword: password               
//           });
  
//           /* update(ref(database, "users/" + user.uid), {
//             last_login: dt,
//           }); */
  
//           // document.cookie["uid"] = user.uid;
//           window.location.href = `../html/profile.html?uid=${user.uid}`; 
//           alert(`User loged in!`);
//           // ...
//         } catch (error) {
//           console.log(error);
//         }
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
  
//         alert(errorMessage);
//       });
//   });

// // Update from user
// updateProfile.addEventListener('submit', e => {
//   e.preventDefault()
  
//   })


// addDoc(colRef, {
//     firstName: updateProfile.firstName.value, 
//     lastName: updateProfile.lastName.value, 
//     email: updateProfile.email.value, 
//     mobilePhone: updateProfile.mobilePhone.value, 
//     address: updateProfile.address.value, 
//     extraInformation: updateProfile.extraInformation.value, 
//     city: updateProfile.city.value, 
//     county: updateProfile.county.value, 
//     country: updateProfile.country.value, 
//     code: updateProfile.aercode.value, 
//     nationality: updateProfile.nationality.value, 
//     Language: updateProfile.language.value, 
//     workExperience: updateProfile.workExperience.value, 
//     technicalSkill: updateProfile.technicalSkill.value, 
//     interestAchievements: updateProfile.interestAchievements.value, 
//     purposeGoals: updateProfile.purposeGoals.value, 
//     others: updateProfile.others.value, 
//     linkedin: updateProfile.linkedin.value, 
//     github: updateProfile.github.value, 
//     // created: firebase.firestore.FieldValue.serverTimestamp()
//   })
  
//   .then(() => {
//     console.log('inf added')
//   })
//   .catch(e => {
//     console.log('error', e.message)
//   })


// function updateUserProfile(e){
//   e.preventDefault()
//   const userDocRef =  firebase.firestore()
//   .collection('users')
//   .doc(firebase.auth().currentUser.uid)

//   setDoc.update({
//       firstName:editProfile["firstName"].value, 
//       lastName:editProfile["lastName"].value, 
//       email:editProfile["email"].value,
//       mobilePhone:editProfile["mobilePhone"].value, 
//       address:editProfile["address"].value, 
//       extraInformation:editProfile["extraInformation"].value, 
//       city:editProfile["city"].value, 
//       county:editProfile["county"].value, 
//       country:editProfile["country"].value, 
//       code:editProfile["code"].value, 
//       nationality:editProfile["nationality"].value, 
//       Language:editProfile["Language"].value, 
//       workExperience:editProfile["workExperience"].value, 
//       technicalSkill:editProfile["technicalSkill"].value, 
//       interestAchievements:editProfile["interestAchievements"].value, 
//       purposeGoals:editProfile["purposeGoals"].value, 
//       others:editProfile["others"].value, 
//       linkedin:editProfile["linkedin"].value,  
//       github:editProfile["github"].value 
//   })

//   M.Modal.getInstance(myModel[2]).close()
// }