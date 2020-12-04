import { SET_SAVED_MODULES, SET_USER, ADD_TO_SAVED_MODULES } from '../actions'

const initialState = 
 {
  name: 'Robbie',
  saved: [101, 102],
  created: ''
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER:
      return action.user
    case SET_SAVED_MODULES:
      let preSavedModuleState = state
      preSavedModuleState.saved = action.modules
      return preSavedModuleState
<<<<<<< HEAD
    // case ADD_TO_SAVED_MODULES:
=======
    case ADD_TO_SAVED_MODULES:
      let preAddToSavedModuleState = state
      preAddToSavedModuleState.saved.push(action.module)
      return preAddToSavedModuleState

>>>>>>> fe929f8b86fc35793584b289547fdd69dcdf47f7
      default:
        return state
  }
}

export default reducer