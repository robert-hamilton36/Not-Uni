import { combineReducers } from 'redux'

import modules from './modules'
import savedModules from './savedModules'
import searchModules from './searchModules'


export default combineReducers({
  modules,
  savedModules,
  searchModules
})
