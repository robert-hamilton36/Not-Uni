import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import ModuleCard from './ModuleCard'

class ModulesFeed extends React.Component {
  arr = [ 0, 0, 0 ]
  render () {
    return (
      <>
        {this.arr.map(() => {
          return <ModuleCard />
        })}
      </>
    )
  }


}

export default ModulesFeed
