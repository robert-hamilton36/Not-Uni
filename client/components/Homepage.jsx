import React from 'react'
import { connect } from 'react-redux'

import ModulesFeed from './SearchResults'
import Search from './Search'
import { Route } from 'react-router-dom'

class HomePage extends React.Component {
  render () {
    return (
      <div className='homepage'>
        <div className='homepage-logo'>
          <img src='/images/not_uni.png' alt='not-uni logo'></img>
        </div>
        <div className='seachBar'>
          <h1>What Would You Like To Learn Today?</h1>
          <Route path = '/' component={Search}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    searchModules: globalState.searchModules
  }
}
export default connect(mapStateToProps)(HomePage)
