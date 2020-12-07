import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ModuleCard from './ModuleCard'

class SavedModules extends React.Component {
  render () {
    return (
      <>
        {this.props.savedModules.map((module, idx) => {
          return <ModuleCard key={idx} module={module} />
        })}
      </>
    )
  }


}

export default connect()(SavedModules)
