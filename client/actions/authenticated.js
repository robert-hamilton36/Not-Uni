//todo refactor auth to actions not components add reducer to a
export const SET_USER = 'SET_USER'
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED'
import { addUserToFirestore } from '../apis/firebaseDB'
import { auth } from '../firebase'

export const setUser = (user) => {
  return {
    type: SET_USER,
    user: user
  }
}

export const isAuthenticated = (boolean) => {
  return {
    type: IS_AUTHENTICATED,
    auth: boolean  
  }
}

// export const  signIn = (email, password) => {
//   return dispatch => {
//   console.log("I made it")
//   auth.signInWithEmailAndPassword(email, password)
//   .then((user) => {
//     console.log("signIn return")
//     return user
//   })
//   .then(user => dispatch(setUser(user)))
//   .then(() => dispatch(isAuthenticated(true)))
//   .catch((error) => {
//     console.log(error.message)
//     console.log(error.code)
//       return error
//     })
//   }
// }

export async function register(userName, email, password){
  console.log("I made it")
  let user = await auth.createUserWithEmailAndPassword(email, password)
  await user.user.updateProfile({
      displayName: userName
    })

  return await user
    // return dispatch => {
    //   dispatch(setUser(
    //     {displayName: user.displayName,
    //       email: user.email,
    //       uid: user.uid
    //     }))
    // }
}

export const signOut = () => {
  return dispatch => {
    auth.signOut()
    .then(() => dispatch(setUser("")))
    .then(() => dispatch(isAuthenticated(null)))
  }
}

// export const fetchUser = () => {
//   return dispatch => {
//     auth.onAuthStateChanged(user => {
//       if(user) {
//         dispatch(setUser(user))
//         dispatch(isAuthenticated(true))
//       } else {
        
//       }
//     })
//   }
// }

export const signInWithOutsideProvider = (provider) => {
  return dispatch => {
    auth.signInWithPopup(provider)
    .then( result => {
      console.log(result)
      dispatch(setUser(result.user))
    })
    .then(() => dispatch(isAuthenticated(true)))
    .catch((error) => {
      console.log(error.message)
      console.log(error.code)
        return error
      })
  }
}

