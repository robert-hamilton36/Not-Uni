import React from 'react'
import {connect} from 'react-redux'
import {fetchModules, setSearchedModules} from '../actions/index'
import ModulesFeed from './SearchResults'
import Search from './Search'

class HomePage extends React.Component{
  
  render (){
    
    return(
      <>
        
        {/* <Search/> */}
      

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