import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class ModuleCard extends React.Component {
 

  render () {
    return (
      <div className='module-card'>
        <li>
        <h1>{this.props.module.title}</h1>
        <p> short desription</p>
        <ul className="steps-list">
          <li> Exercise 1</li> 
          <li> Exercise 2</li> 
          <li> Exercise 3</li> 
          <li> Exercise 4</li> 
        </ul>
        </li>
        {/* <Link to={"/module/" + this.fakeprops.id}> 
          <div> Learn </div>
        </Link> */}
      </div>
    )
  }
}

export default ModuleCard
