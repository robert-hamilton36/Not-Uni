import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Login from './Login'
import ModulesFeed from './ModulesFeed'
import Module from './Module'
import Register from './Register'
import CreateModule from './CreateModule'
import AuthProvider from '../Contexts/AuthContext'


class App extends React.Component {

  render () {
    return (
      <div className='app'>
        <Router>
          <AuthProvider>
            <Route path="/" component={Nav}/> 

            <Switch>
              <Route exact path="/register" component={Register }/> 
              <Route exact path="/login" component={Login}/> 
              <Route exact path="/categories/:name" component={ModulesFeed} />
              <Route exact path="/module/:id" component={Module} />
              <Route exact path="/create" component={CreateModule} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    )
  }
}



export default connect()(App)
