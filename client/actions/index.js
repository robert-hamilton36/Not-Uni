
import { getAllModulesAPI} from "../apis/modules"

export const SET_MODULES = 'SET_MODULES'
export const SET_SEARCH_MODULES ='SET_SEARCH_MODULES'


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


