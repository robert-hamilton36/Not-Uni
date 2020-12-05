import React from 'react'
import {connect} from 'react-redux'
import {fetchModules, setSearchedModules} from '../actions/index'
import ModulesFeed from './SearchResults'
import Search from './Search'
import {Route} from 'react-router-dom'

class HomePage extends React.Component{
  
  render (){
    
    return(
      <>
        
        <Route path = '/' component={Search}/>
        


      </>
    )
  }

}

function mapStateToProps(globalState) {
  return {
    searchModules: globalState.searchModules
  }
}
export default connect(mapStateToProps)(HomePage)