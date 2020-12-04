import firebase from 'firebase/app'
import 'firebase/auth'

let firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
}



export const app = firebase.initializeApp(firebaseConfig);


export const auth = app.auth()
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
export default app