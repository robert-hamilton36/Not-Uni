import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Login from './Login'
import ModulesFeed from './ModulesFeed'
import Module from './Module'
import Register from './Register'
import CreateModule from './CreateModule'
import Profile from './Profile'
import HomePage from './Homepage'


class App extends React.Component {

  render () {
    return (
      <div className='app'>
        <Router>
          <Route path="/" component={Nav}/> 

          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path="/register" component={Register }/> 
            <Route exact path="/login" component={Login}/> 
            <Route exact path="/categories/:name" component={ModulesFeed} />
            <Route exact path="/module/:id" component={Module} />
            <Route exact path="/create" component={CreateModule} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </div>
    )
  }
}



export default connect()(App)
