import { combineReducers } from 'redux'

import modules from './modules'
import user from './user'
import searchModules from './searchModules'
import isAuthenticated from './isAuthenticated'


export default combineReducers({
  isAuthenticated,
  modules,
  searchModules,
  user,
})
