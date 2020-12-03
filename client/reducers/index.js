import { combineReducers } from 'redux'

import modules from './modules'
import user from './user'


export default combineReducers({
  modules,
  user
})
