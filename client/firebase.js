import firebase from 'firebase/app'
import 'firebase/auth'

// let firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.authDomain,
//   databaseURL: process.env.databaseURL,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId
// }

let firebaseConfig = {
  apiKey: "AIzaSyDUKATVsTjwI-miVHIlzPLn-KzqG4DjBog",
  authDomain: "not-uni.firebaseapp.com",
  databaseURL: "https://not-uni.firebaseio.com",
  projectId: "not-uni",
  storageBucket: "not-uni.appspot.com",
  messagingSenderId: "50295764986",
  appId: "1:50295764986:web:6354c187238fe45b801643"
};



export const app = firebase.initializeApp(firebaseConfig);

// export const google = new firebase.auth.GoogleAuthProvider()

export const auth = app.auth()
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
// export const github = new firebase.auth.GithubAuthProvider()
export default app