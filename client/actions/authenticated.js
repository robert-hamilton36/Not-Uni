//todo refactor auth to actions not components add reducer to a
export const SET_USER = 'SET_USER'
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED'
export const REMOVE_USER = 'REMOVE_USER'
import { auth } from '../firebase'

export const setUser = (user) => {
  return {
    type: SET_USER,
    user: user
  }
}

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  }
}

export const isAuthenticated = (boolean) => {
  return {
    type: IS_AUTHENTICATED,
    auth: boolean  
  }
}

export const  signIn = (email, password, callback, setError) => {
  console.log('building action')
  return dispatch => {
  console.log("I made it")
  auth.signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log("signIn return")
    return user
  })
  .then(user => dispatch(setUser({
    // userName: userName,
    uid: user.uid,
    email: user.email
  })))
  .then(() => dispatch(isAuthenticated(true)))
  .then(() => {
    console.log('done')
    callback()
  })
  .catch((error) => {
    setError(error.message)
    console.log(error.message)
    console.log(error.code)
      return error
    })
  }
}

export const register = (userName, email, password, callback, setError) => {
  return dispatch => {
  console.log("I made it")
  auth.createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log("Register return")
    return user
  })
  .then(user => {
    user.user.updateProfile({
      displayName: userName
    })
    return user
  })
  .then((user) => {
    console.log("User")
    console.log(user)
    return user
  })
  .then(user => dispatch(setUser({
    userName: userName,
    uid: user.uid,
    email: user.email
  }
    )))
  .then(() => dispatch(isAuthenticated(true)))
  .then(() => {
    console.log('done')
    callback()
  })
  .catch((error) => {
    setError(error.message)
    console.log(error.message)
    console.log(error.code)
      return error
    })
  }
}

export const signOut = () => {
  console.log("Signing Out")
  return dispatch => {
    auth.signOut()
    .then(() => dispatch(removeUser({})))
    .then(() => dispatch(isAuthenticated(null)))
  }
}

export const fetchUser = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if(user && user.displayName) {
        dispatch(setUser({
          userName: user.displayName,
          uid: user.uid,
          email: user.email

        }
          ))
        dispatch(isAuthenticated(true))
      } else if(user){
        dispatch(setUser({
          uid: user.uid,
          email: user.email
        }
          ))
        dispatch(isAuthenticated(true))
      } else {
        
      }
    })
  }
}

export const signInWithOutsideProvider = (provider, callback, setError) => {
  console.log("hello")
  return dispatch => {
    auth.signInWithPopup(provider)
    .then( result => {
      console.log(result)
      dispatch(setUser({
        userName: user.displayName,
        uid: user.uid,
        email: user.email
      }))
    })
    .then(() => dispatch(isAuthenticated(true)))
    .then(() => {
      console.log('done')
      callback()
    })
    .catch((error) => {
      setError(error)
      console.log(error.message)
      console.log(error.code)
        return error
      })
  }
}

