import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Login from './UserAuth/Login'
import SearchResults from './SearchResults'
import Module from './Module'
import Register from './UserAuth/Register'
import CreateModule from './CreateModule'
import Profile from './Profile'
import HomePage from './Homepage'
import { fetchUser } from '../actions/authenticated'
import { fetchModules, fetchSavedModules } from '../actions'
import ModuleCreated from './ModuleCreated'
import ForgotPassword from './UserAuth/ForgotPassword'

const App = (props) => {
  // componentDidMount () {
    //   // this.props.dispatch(fetchUser())
    //   // if(this.props.user === {}){
      //   //   this.props.dispatch(fetchSavedModules(this.props.user.uid))
      //   // }
      // }
      
  useEffect(() => {
    props.dispatch(fetchModules())
  }, [])

  useEffect(() => {
    props.modules.length && props.dispatch(fetchUser())
  }, [props.modules])

  useEffect(() => {
    if(props.user.uid){
      props.dispatch(fetchSavedModules(props.user.uid))
    }
  }, [props.hasLoaded.authHasLoaded])

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
          <Route exact path="/forgotpassword" component={ForgotPassword} />
        </Switch>
        <Route exact path="/profile" component={Profile} />
      </Router>
    </div>
  )
}

function mapStateToProps (globalState) {
  return {
    hasLoaded: globalState.hasLoaded,
    user: globalState.user,
    modules: globalState.modules
  }
}

export default connect(mapStateToProps)(App)
