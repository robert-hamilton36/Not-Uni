import { combineReducers } from 'redux'

import modules from './modules'
import user from './user'
import searchModules from './searchModules'


export default combineReducers({
  modules,
  user,
  searchModules
})
