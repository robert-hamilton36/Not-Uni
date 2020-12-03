import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class ModuleCard extends React.Component {
 

  render () {

    const findHeader = this.props.module.elements.filter((element)=>{
      return(element.type === 'heading')})
     
    
      return (
        <>
      
      <div className='module-card'>
        <li>
          <h1>{this.props.module.title}</h1>
          <p> short desription</p>
            <ul className="steps-list">
              {findHeader.map((header)=> 
                <li key={header.id}> {header.content}</li> 
              )}   
          </ul>
        </li>
      </div>
      <Link to={`/module/${this.props.module.id}`}> Learn More</Link>
      </>
    )
  }
}

export default ModuleCard
