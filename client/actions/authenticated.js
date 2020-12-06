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

export const  signIn = (email, password) => {
  return dispatch => {
  console.log("I made it")
  auth.signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log("signIn return")
    return user
  })
  .then(user => dispatch(setUser(user)))
  .then(() => dispatch(isAuthenticated(true)))
  .catch((error) => {
    console.log(error.message)
    console.log(error.code)
      return error
    })
  }
}

export const register = (userName, email, password) => {
  return dispatch => {
    console.log("I made it")
    auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("create return")
      console.log(user.user.uid)
      return user
    })
    .then(user => {
      let currentUser = auth.currentUser
      console.log(currentUser)
      currentUser.updateProfile({
        displayName: userName
      })
      console.log(currentUser)
      return currentUser
    })
    .then(user => dispatch(setUser(user)))
    .then(() => dispatch(isAuthenticated(true)))
    .catch((error) => {
      console.log(error.message)
      console.log(error.code)
        return error
      })
  }
}

export const signOut = () => {
  return dispatch => {
    auth.signOut()
    .then(() => dispatch(setUser("")))
    .then(() => dispatch(isAuthenticated(null)))
  }
}

export const fetchUser = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(setUser(user))
        dispatch(isAuthenticated(true))
      } else {
        
      }
    })
  }
}

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

