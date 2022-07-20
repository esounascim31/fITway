const db = firebase.firestore();

db.collection('users').get()
.then(snapshot => {
   const usersList = snapshot.docs.reduce((acc, doc) => {
        acc += `<li>${doc.data().title}</li>`
        return acc
    },'')

    console.log(usersList)

    //snapshot.docs.forEach(doc => {
      //  console.log(doc.data())
 //   })
})
.catch(err => {
    console.log(err.message)
}) 