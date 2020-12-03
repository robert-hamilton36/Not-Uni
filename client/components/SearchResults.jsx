import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import ModuleCard from './ModuleCard'

class SearchResults extends React.Component {
  





  render () {

    return (
      <>
      <h1>Results Page</h1>
      <ul>
        {this.props.searchModules.map(module => 
      
          <ModuleCard key={module.id} module={module} />   
        )}
      </ul>
      </>
    )
  }


}

function mapStateToProps(globalState) {
  return {
    searchModules: globalState.searchModules
  }
}
export default connect(mapStateToProps)(SearchResults)
