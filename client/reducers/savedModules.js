import { SET_SAVED_MODULES } from '../actions'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAVED_MODULES:
      return action.modules
    
    default:
      return state
  }
}

export default reducer

