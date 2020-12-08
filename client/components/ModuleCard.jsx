import { Breadcrumbs } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Likes from './Likes'

class ModuleCard extends React.Component {
state={delete:this.props.delete}

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

   console.log(this.props)
    return (
      <>

        <div className='module-card'>

          <div className={'s-c-heading ' + cardColor}>
            <h1>{this.props.module.title}</h1>
            {this.state.delete &&
            <svg className='trashCan' onClick={() => this.props.handleDelete(true, this.props.module)}xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
  }
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