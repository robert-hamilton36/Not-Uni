import {SET_USER} from '../actions'

const initialState = 'anon'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user
    default:
      return state
  }
}


export default reducer