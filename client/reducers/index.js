import { combineReducers } from 'redux'

import modules from './modules'
import savedModules from './savedModules'


export default combineReducers({
  modules,
  savedModules
})
