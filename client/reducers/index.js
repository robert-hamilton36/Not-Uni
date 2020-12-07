import { combineReducers } from 'redux'

import modules from './modules'
import user from './user'
import searchModules from './searchModules'
import isAuthenticated from './isAuthenticated'
import authHasLoaded from './authHasLoaded'


export default combineReducers({
  authHasLoaded,
  isAuthenticated,
  modules,
  user,
  searchModules
})
