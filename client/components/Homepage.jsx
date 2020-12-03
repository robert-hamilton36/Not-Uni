import React from 'react'
import {connect} from 'react-redux'
import {fetchModules, setSearchedModules} from '../actions/index'
import ModulesFeed from './ModulesFeed'
import Search from './Search'

class HomePage extends React.Component{
  
  render (){
    
    return(
      <>
        
        <Search/>
        <ModulesFeed modules={this.props.searchModules}/>

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