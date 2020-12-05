import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import ModuleCard from './ModuleCard'

class SavedModules extends React.Component {
  render () {
    return (
      <>
        {this.props.savedModules.map((module) => {
          return <ModcoduleCard module={module} />
        })}
      </>
    )
  }


}

function mapStateToProps(globalState) {
  return {
    savedModules: globalState.user.saved
  }
}
export default connect(mapStateToProps)(SavedModules)
