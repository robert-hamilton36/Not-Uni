import {IS_AUTHENTICATED} from '../actions/authenticated'

const intialState = false

const reducer = (state = intialState, action) => {
  switch(action.type){
    case IS_AUTHENTICATED:
      return action.auth
    default:
      return state
  }
}

export default reducer