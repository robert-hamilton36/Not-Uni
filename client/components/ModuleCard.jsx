import { Breadcrumbs } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class ModuleCard extends React.Component {
  
  isYourModule = this.props.module.user_id === this.props.user.uid
  
  render () {

    const findHeader = this.props.module.elements.filter((element) => {
      return (element.type === 'heading')
    })


    let cardColor = ''

    switch (this.props.module.category) {
      case 'HTML':
        cardColor = 'HTML';
        break;
      case 'C':
        cardColor = 'C';
        break;
      case 'JavaScript':
        cardColor = 'JavaScript';
        break;
      case 'Python':
        cardColor = 'Python';
        break;
      case 'Ruby':
        cardColor = 'Ruby';
        break;
      case 'C++':
        cardColor = 'Cplus';
        break;
      default:
        cardColor = ''
    }

    return (
      <>

        <div className='module-card'>

          <div className={'s-c-heading ' + cardColor}>
            <h1>{this.props.module.title}</h1>
            <Link to={'/edit/' + this.props.module.id } >
              Edit This Module
            </Link>
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

function mapStateToProps (globalState) {
  return {
    user: globalState.user,
    modules: globalState.modules
  }
}

export default connect(mapStateToProps)(ModuleCard)
