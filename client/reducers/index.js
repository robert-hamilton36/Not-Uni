import { combineReducers } from 'redux'

import cart from './cart'
import orders from './orders'
import products from './products'
import user from './user'

export default combineReducers({
  cart,
  orders,
  products,
  user,
})
