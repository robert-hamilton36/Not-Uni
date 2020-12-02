import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class ModuleCard extends React.Component {
  fakeprops = {
    id: 3
  }

  render () {
    return (
      <div className='module-card'>
        <h1>Header</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error vel voluptate sit sint rerum libero ex, odio voluptatum fuga consequatur? Culpa expedita beatae ex aliquid quam, pariatur cumque aut.</p>
        <ul className="steps-list">
          <a href=""> <li> Exercise 1</li> </a> 
          <a href=""> <li> Exercise 2</li> </a> 
          <a href=""> <li> Exercise 3</li> </a> 
          <a href=""> <li> Exercise 4</li> </a> 
        </ul>

        <Link to={"/module/" + this.fakeprops.id}> 
          <div> Learn </div>
        </Link>
      </div>
    )
  }
}

export default ModuleCard
