import {AUTHENTICATION_HAS_LOADED} from '../actions/authenticated'

const intialState = false

const reducer = (state = intialState, action) => {
  switch(action.type){
    case AUTHENTICATION_HAS_LOADED:
      return action.loaded
    default:
      return state
  }
}

export default reducer