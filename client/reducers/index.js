import { combineReducers } from 'redux'

import modules from './modules'
import searchModules from './searchModules'


export default combineReducers({
  modules,
  searchModules

})
