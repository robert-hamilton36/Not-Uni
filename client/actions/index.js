import { getAllModulesAPI } from "../apis/modules"
import { getSavedModulesAPI } from '../apis/modules'

// do we need to import request from 'superagent

export const SET_MODULES = 'SET_MODULES'
export const SET_SEARCH_MODULES ='SET_SEARCH_MODULES'

// export const ADD_TO_SAVED_MODULES = 'ADD_TO_SAVED_MODULES'
// export const SET_SAVED_MODULES = 'SET_SAVED_MODULES'
export const SET_USER = 'SET_USER'


export const setModules = (modules) => {
  return {
    type: SET_MODULES,
    modules
  }
}

export const setSearchedModules = (modules) =>{
  return{
    type: SET_SEARCH_MODULES,
    modules
  }
}

export const fetchModules = () => {
  return dispatch => {
    return getAllModulesAPI()
      .then(modules=> {
        dispatch(setModules(modules))
      })
  }
}

// saved Modules

// export const addToSavedModules = (module) => {
//   return {
//     type: ADD_TO_SAVED_MODULES,
//     module
//   }
// }

// export const setSavedModules = (modules) => {
//   return {
//     type: SET_SAVED_MODULES,
//     modules
//   }
// }

// export const fetchSavedModules = (userID) => {
//   return dispatch => {
//     return getSavedModulesAPI(userID)
//       .then(modules=> {
//         dispatch(setSavedModules(modules))
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
// }

// export const setUser = (user) => {
//   return {
//     type: SET_USER,
//     user: user
//   }
// }
