import { getAllModulesAPI } from "../apis/modules"
import { getSavedModulesAPI } from '../apis/modules'

export const SET_MODULES = 'SET_MODULES'
export const SET_SEARCH_MODULES ='SET_SEARCH_MODULES'

export const SET_SAVED_MODULES = 'SET_SAVED_MODULES'


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
  }
}
