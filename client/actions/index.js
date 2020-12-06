import { getAllModulesAPI } from "../apis/modules"
import { getSavedModulesAPI } from '../apis/modules'
import {increaseLikesAPI} from '../apis/modules'

// do we need to import request from 'superagent

export const SET_MODULES = 'SET_MODULES'
export const SET_SEARCH_MODULES ='SET_SEARCH_MODULES'

export const ADD_TO_SAVED_MODULES = 'ADD_TO_SAVED_MODULES'
export const SET_SAVED_MODULES = 'SET_SAVED_MODULES'
export const SET_USER = 'SET_USER'
export const INCREASE_LIKES = 'INCREASE_LIKES'
export const DECREASE_LIKES ='DECREASE_LIKES'


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

export const addToSavedModules = (module) => {
  return {
    type: ADD_TO_SAVED_MODULES,
    module
  }
}

export const setSavedModules = (modules) => {
  return {
    type: SET_SAVED_MODULES,
    modules
  }
}

export const fetchSavedModules = () => {
  return dispatch => {
    return getSavedModulesAPI()
    .then(modules=> {
      dispatch(setSavedModules(modules))
    })
    .catch(err => {
      console.log(err)
      })
    }
  }
  
  export const setUser = (user) => {
    return {
      type: SET_USER,
      user: user
    }
  }


//Update Module Likes
  
  export const increaseModuleLikes = (module)=>{
   return{
      type: INCREASE_LIKES,
      module
   }  
  }



  export const increaseModuleLikesTHUNK = (module) => {
    return dispatch => {
      return increaseLikesAPI(module)
      .then(() => {
        dispatch(ModuleLikes(module))
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
  