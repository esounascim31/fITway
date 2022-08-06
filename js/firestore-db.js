// const updateProfile = document.querySelector("#profile")
// const userDetails  = document.querySelector('.userDetails')




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

