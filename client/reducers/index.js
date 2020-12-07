import { combineReducers } from 'redux'

import modules from './modules'
import user from './user'
import searchModules from './searchModules'
import isAuthenticated from './isAuthenticated'
import hasLoaded from './hasLoaded'


export default combineReducers({
  hasLoaded,
  isAuthenticated,
  modules,
  user,
  searchModules
})
