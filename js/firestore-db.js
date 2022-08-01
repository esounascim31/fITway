const updateProfile = document.querySelector("#profile")
const userDetails  = document.querySelector('.userDetails')

function createUserCollection(user){
    firebase.firestore().collection('users')
    .doc(user.uid)
    .set({
        uid:user.uid,
        firstName:user.displayFirstName,
        lastName:user.displayLastName,
        email: user.email,
        mobilePhone:"",
        address:"", 
        extraInformation:"",
        city:"",
        county:"",
        country:"",
        code:"",
        nationality:"",
        Language:"",
        workExperience:"",
        technicalSkill:"",
        interestAchievements:"",
        purposeGoals:"",
        others:"",
        linkedin:"",
        github:""        
    })
}

async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
    .collection('users')
    .doc(userID)
    .get()

   const userInfo = userInfoSnap.data()
   if(userInfo){
       userDetails.innerHTML = `
       <h3>${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>
       <h3>${userInfo.phone}</h3>
       `
   }    
    }else{
        userDetails.innerHTML = `
        <h3>please login</h3>
        `
    }
}

async function getuserInfoRealtime(userID){
    if(userID){
      const userdocRef = await  firebase.firestore()
        .collection('users')
        .doc(userID)
        userdocRef.onSnapshot((doc)=>{
            if(doc.exists){
                 const userInfo = doc.data()
                    if(userInfo){
                        userDetails.innerHTML = `
                        <ul class="collection">
                          <li class="collection-item"><h4>${userInfo.firstName}</h4></li>
                          <li class="collection-item"><h4>${userInfo.lastName}</h4></li>
                          <li class="collection-item">${userInfo.email}</li>
                          <li class="collection-item">phone - ${userInfo.mobilePhone}</li>
                          <li class="collection-item">address - ${userInfo.address}</li>
                          <li class="collection-item">extraInformation - ${userInfo.extraInformation}</li>
                          <li class="collection-item">county - ${userInfo.county}</li>
                          <li class="collection-item">country - ${userInfo.country}</li>
                          <li class="collection-item">code - ${userInfo.code}</li>
                          <li class="collection-item">nationality - ${userInfo.nationality}</li>
                          <li class="collection-item">Language - ${userInfo.Language}</li>
                          <li class="collection-item">workExperience - ${userInfo.workExperience}</li>
                          <li class="collection-item">technicalSkill - ${userInfo.technicalSkill}</li>
                          <li class="collection-item">interestAchievements - ${userInfo.interestAchievements}</li>
                          <li class="collection-item">purposeGoals - ${userInfo.purposeGoals}</li>
                          <li class="collection-item">other - ${userInfo.others}</li>
                          <li class="collection-item">linkedin - ${userInfo.linkedin}</li>
                          <li class="collection-item">github - ${userInfo.github}</li>
                         //<li class="collection-item">portfolio - <a href="${userInfo.portfolioUrl}">open</li>
                        </ul>
        
                        <button class="btn waves-effect #fbc02d yellow darken-2 modal-trigger" href="#modal3">edit details</button>   
                        `
                        editProfile["firstName"].value = userInfo.firstName
                        editProfile["lastName"].value = userInfo.lastName
                        editProfile["email"].value = userInfo.email
                        editProfile["mobilePhone"].value = userInfo.mobilePhone
                        editProfile["address"].value = userInfo.address
                        editProfile["extraInformation"].value = userInfo.extraInformation
                        editProfile["county"].value = userInfo.country
                        editProfile["code"].value = userInfo.code
                        editProfile["nationality"].value = userInfo.nationality
                        editProfile["Language"].value = userInfo.Language
                        editProfile["workExperience"].value = userInfo.workExperience
                        editProfile["technicalSkill"].value = userInfo.technicalSkill
                        editProfile["interestAchievements"].value = userInfo.interestAchievements
                        editProfile["purposeGoals"].value = userInfo.purposeGoals
                        editProfile["others"].value = userInfo.others
                        editProfile["linkedin"].value = userInfo.linkedin
                        editProfile["github"].value = userInfo.github

                        if(firebase.auth().currentUser.photoURL){ // photo #proimg
                            document.querySelector('#proimg').src = firebase.auth().currentUser.photoURL
                        }// photo
                }    
             }
        })

    }else{
        userDetails.innerHTML = `
        <h3>please login</h3>
        `
    }
}



// function uploadImage(e){
//     console.log(e.target.files[0])
//     const uid = firebase.auth().currentUser.uid
//     const fileRef = firebase.storage().ref().child(`/users/${uid}/profile`)
//     const uploadTask =  fileRef.put(e.target.files[0])
//     uploadTask.on('state_changed', 
//   (snapshot) => {
    
//     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     if(progress=='100') alert('uploaded')
//   }, 
//   (error) => {
//    console.log(error)
//   }, 
//   () => {
    
//     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//       console.log('File available at', downloadURL);
//       document.querySelector('#proimg').src = downloadURL
//       firebase.auth().currentUser.updateProfile({
//         photoURL: downloadURL
//       })
//     });
//   }
// );
// }

async function allUserDetails(){
    document.getElementById('table').style.display='table'
    const userRef = await firebase.firestore().collection('users').get()  
    userRef.docs.forEach(doc=>{
             const info =   doc.data()
             document.getElementById('tbody').innerHTML += `
             <tr>
              <td>${info.name}</td>
              <td>${info.email}</td>
              <td>${info.phone}</td>
              <td>${info.specialty}</td>
              <td>${info.experience}</td>
              <td><a href="${info.portfolioUrl}">view</td>
            </tr>
             `
      })
   
    
    
  
  
  
  }