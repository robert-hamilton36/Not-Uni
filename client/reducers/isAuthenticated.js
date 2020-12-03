import {IS_AUTHENTICATED} from '../actions'

const intialState = false

const reducer = (state = intialState, action) => {
  switch(action.type){
    case IS_AUTHENTICATED:
      return action.boolean
    default:
      return state
  }
}

export default reducer