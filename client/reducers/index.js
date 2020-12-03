import { combineReducers } from 'redux'

import modules from './modules'
import cart from './cart'


export default combineReducers({
  modules,
  cart

})
