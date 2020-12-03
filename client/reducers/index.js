import { combineReducers } from 'redux'

import modules from './modules'
import user from './user'
import savedModules from './savedModules'
import searchModules from './searchModules'


export default combineReducers({
  modules,
  user,
  savedModules,
  searchModules
})
