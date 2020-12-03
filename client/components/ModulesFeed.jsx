import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import ModuleCard from './ModuleCard'

class ModulesFeed extends React.Component {
  
  render () {
    return (
      <>
        {this.props.module.map((module) => {
          return <ModuleCard  module={module} />
        })}
      </>
    )
  }


}

export default ModulesFeed
