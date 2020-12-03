import {  SET_SEARCH_MODULES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_MODULES:
      return action.modules
    default:
      return state
  }
}

export default reducer
