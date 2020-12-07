import React from 'react'
import { connect } from 'react-redux'
import Likes from './Likes'

import { ReactTinyLink } from 'react-tiny-link'

class Module extends React.Component {
  state = {
    currentModule: null
  }

  componentDidMount () {
    const currentModuleId = Number(this.props.match.params.id)
    const currentModule = this.props.modules.find((module) => module.id == currentModuleId)
    this.setState({currentModule})
  }

  componentDidUpdate (prevProps) {
    if (!prevProps || prevProps.match.params.id !== this.props.match.params.id || prevProps.modules.length !== this.props.modules.length) {
      console.log('hi')

      const currentModuleId = Number(this.props.match.params.id)
      const currentModule = this.props.modules.find((module) => module.id === currentModuleId)
      this.setState({ currentModule })
    }
  }

  render () {
    return (

      this.state.currentModule ? <div className = 'module' >
        {/* <h1>Module View</h1> */}

        <div className='h-module' >
          <h1> {this.state.currentModule.title} </h1>
          <h5> {this.state.currentModule.duration} minutes</h5>
        </div>

        {/* {console.log(this.props.modules)} */}
        {/* {console.log(this.state.currentModule)} */}

        <div className="B-I-module">

          {this.state.currentModule.elements.map((item) => {
            switch (item.type) {
              case 'heading':
                return <h3> {item.content} </h3>

              case 'paragraph':
                return <p> {item.content} </p>

              case 'link':
                return (
                  <div className="react-tiny-link">
                    <ReactTinyLink
                      cardSize="small"
                      showGraphic={true}
                      maxLine={2}
                      minLine={1}
                      url={item.content}
                    />
                  </div>
                )
              case 'video':
                return (
                  <div className="video-container">
                    <iframe
                      height="auto"
                      src={item.content}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </div>
                )
            }
          })}
        </div>
      </div> : ''
    )
  }
}

function mapStateToProps (globalState) {
  return {
    modules: globalState.modules
  }
}
export default connect(mapStateToProps)(Module)
