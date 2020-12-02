import React from 'react'
import Register from './Register'
import { connect } from 'react-redux'

import { fetchProducts } from '../actions'
import Cart from './Cart'
import Orders from './Orders'
import Products from './Products'

export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchProducts())
  }

  render () {
    return (
      <div className='app'>
        <Register/>
      </div>
    )
  }
}

export default connect()(App)
