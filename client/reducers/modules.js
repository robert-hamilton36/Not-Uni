import { SET_MODULES, SET_SEARCH_MODULES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODULES:
      return action.modules

    case SET_SEARCH_MODULES:
      return action.modules
    default:
      return state
  }
}

export default reducer
