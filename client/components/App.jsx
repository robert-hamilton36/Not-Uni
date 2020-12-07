import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Login from './Login'
import SearchResults from './SearchResults'
import Module from './Module'
import Register from './Register'
import CreateModule from './CreateModule'
import Profile from './Profile'
import HomePage from './Homepage'
import { fetchModules, fetchSavedModules } from '../actions'
import ModuleCreated from './ModuleCreated'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchModules())
    this.props.dispatch(fetchSavedModules())
  }

  render () {
    return (
      <div className='app'>
        <Router>
          <Route path="/" component={Nav}/>

          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path="/register" component={Register }/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/categories/results/:q" component={SearchResults} />
            <Route exact path="/module/:id" component={Module} />
            <Route exact path="/create" component={CreateModule} />
            <Route exact path="/modulecreated" component={ModuleCreated} />
          </Switch>

          <Route exact path="/profile" component={Profile} />
        </Router>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    user: globalState.user,
    modules: globalState.modules
  }
}

export default connect(mapStateToProps)(App)
