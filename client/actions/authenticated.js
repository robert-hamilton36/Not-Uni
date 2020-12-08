//todo refactor auth to actions not components add reducer to a
export const SET_USER = 'SET_USER'
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED'
export const REMOVE_USER = 'REMOVE_USER'
export const AUTHENTICATION_HAS_LOADED = 'AUTHENTICATION_HAS_LOADED'
import { auth } from '../firebase'
import {fetchSavedModules} from './index'

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

export const authIsLoaded = (boolean) => {
  return {
    type: AUTHENTICATION_HAS_LOADED,
    loaded: boolean
  }
}

export const  signIn = (email, password, callback, setError) => {
  return dispatch => {
  auth.signInWithEmailAndPassword(email, password)
  .then((user) => {
    return user
  })
  .then(user => {
    dispatch(setUser({
    // userName: userName,
    uid: user.uid,
    email: user.email,
    photoURL: user.photoURL
  }))
  return user
})
  .then((user)=> {
    console.log(user)
    dispatch(fetchSavedModules(user.user.uid))})
  .then(() => dispatch(isAuthenticated(true)))
  .then(() => dispatch(authIsLoaded(true)))
  .then(() => {
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
  auth.createUserWithEmailAndPassword(email, password)
  .then((user) => {
    return user
  })
  .then(user => {
    console.log(user)
    user.user.updateProfile({
      displayName: userName,
      photoURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png'
    })
    return user
  })
  .then((user) => {
    console.log(user)
    return user
  })
  .then(user => dispatch(setUser({
    userName: userName,
    uid: user.uid,
    email: user.email,
    photoURL: user.photoURL
  }
    )))
  .then(() => dispatch(isAuthenticated(true)))
  .then(() => {
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
  return dispatch => {
    auth.signOut()
    .then(() => dispatch(removeUser({})))
    .then(() => dispatch(isAuthenticated(null)))
    .then(() => dispatch(authIsLoaded(false)))
  }
}

export const fetchUser = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if(user && user.displayName) {
        dispatch(setUser({
          userName: user.displayName,
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL

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
      dispatch(authIsLoaded(true))

    })
  }
}

export const signInWithOutsideProvider = (provider, callback) => {
  return dispatch => {
    auth.signInWithPopup(provider)
    .then( result => {
      dispatch(setUser({
        userName: result.displayName,
        uid: result.uid,
        email: result.email
      }))
    })
    .then(() => dispatch(isAuthenticated(true)))
    .then(() => {
      callback()
    })
    .catch((error) => {
      console.log(error.message)
      console.log(error.code)
        return error
      })
  }
}

export const resetPassword = (email, callback, setError) => {

  auth.sendPasswordResetEmail(email)
  .then((user) => {
    return user
  })
  .then(log => console.log(log))
  .then(() => {
    callback()
  })
  .catch((error) => {
    setError(error.message)
    console.log(error.message)
    console.log(error.code)
      return error
    })
}