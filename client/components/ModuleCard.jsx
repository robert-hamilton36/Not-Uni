import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class ModuleCard extends React.Component {
  render () {
    console.log(this.props.module)
    const findHeader = this.props.module.elements.filter((element) => {
      return (element.type === 'heading')
    })

    return (
      <>

        <div className='module-card'>

          <div className= 's-c-heading'>
            <h1>{this.props.module.title}</h1>
          </div>
          <div className='s-c-info'>

            <p> {this.props.module.description}</p>
            <ul className="steps-list">
              {findHeader.map((header) => {
                return (

                  <li key={header.id}> {header.content}</li>
                )
              })}
            </ul>
          </div>
          <Link to={`/module/${this.props.module.id}`}> Learn More</Link>
        </div>
      </>
    )
  }
}

export default ModuleCard
