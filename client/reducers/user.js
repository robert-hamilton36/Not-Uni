import { SET_SAVED_MODULES, SET_USER } from '../actions'

const initialState = 
 {
  name: 'Robbie',
  saved: '101',
  created: ''
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER:
      return action.SET_USER
    case SET_SAVED_MODULES:
      let preSavedModuleState = state
      console.log(preSavedModuleState)
      preSavedModuleState.saved = action.modules
      console.log(preSavedModuleState)
      return preSavedModuleState
    // case ADD_TO_SAVED_MODULES:
      default:
        return state
  }
}

export default reducer