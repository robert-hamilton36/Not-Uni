import { Breadcrumbs } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Likes from './Likes'

class ModuleCard extends React.Component {
  render () {
   
      let moduleDifficulty = ''
      let difficultyColor = ''
      switch (this.props.module.difficulty) {
        case 'Beginner':
          moduleDifficulty = '<Beginner>';
          difficultyColor = '#2A881B';
          break;
        case 'Intermediate':
          moduleDifficulty = '<(Intermediate)>';
          difficultyColor = 'rgb(216, 194, 0)';
          break;
        case 'Advanced':
          moduleDifficulty = '<({Advanced})>';
          difficultyColor = 'rgb(216, 0, 0)';
          break;
    }


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
            {/* {this.props.hasLoaded.authHasLoaded && <> {this.props.isAuthenticated && <Likes module={this.props.module} />}</>} */}
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
            <div className='module-card-difficulty'> 
              <h4 className='colored-difficulty' style={{color: difficultyColor}}> {moduleDifficulty}</h4>
            </div>
          </div>
          <Link to={`/module/${this.props.module.id}`}> Learn More</Link>
          
        </div>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    hasLoaded: globalState.hasLoaded,
    isAuthenticated: globalState.isAuthenticated
  }
}
export default connect(mapStateToProps)(ModuleCard)