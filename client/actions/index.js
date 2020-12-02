
import { getAllModulesAPI, getProducts } from "../apis/modules"

export const SET_MODULES = 'SET_MODULES'


export const setModules = (modules) => {
  return {
    type: SET_MODULES,
    modules
  }
}




export const fetchModules = () => {
  return dispatch => {
    return getAllModulesAPI()
      .then(products => {
        dispatch(setModules(modules))
      })
  }
}


