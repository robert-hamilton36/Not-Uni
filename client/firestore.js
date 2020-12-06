const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
});


db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815,
  email:'adalovless@getMaxListeners.com',
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});