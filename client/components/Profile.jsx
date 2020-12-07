import React from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { textSpanIsEmpty } from 'typescript'
import SavedModules from './SavedModules'
import YourModules from './YourModules'

class Profile extends React.Component {
  state = {
    activeModules: null
  }
  componentDidMount = () => {
  }

  sidebarClickHandler = (whichButton) => {
    this.setState({
      activeModules: whichButton
    })
    switch(whichButton){
      case("saved modules"):
      this.getSavedModules()
      case("your modules"):
      this.getYourModules()
    }
  }

  getYourModules = () => {
    const yourModules = this.props.modules.filter((item) => item.user_id == this.props.user.uid)
    this.setState({yourModules: yourModules})
  }

  getSavedModules = () => {
    const savedIDs = this.props.user.saved
    console.log(this.props.user.saved)
    console.log(this.props.modules)
    const savedModules = this.props.modules.filter((item) => savedIDs.includes(item.id)) || null
    console.log(savedModules)
    this.setState({
      savedModules: savedModules
    })
  }

  render() {
    return (
      <>
        <div className="profile-page">
          <div className="left column" >
            <div className="profile-options-box">
              <div className="heading">
                <h1> Welcome {this.props.user.userName} </h1>
              </div>
              <div className="options">
                <div onClick={() => this.sidebarClickHandler('your modules') }className="single-option">
                  <img src="/images/folder-24px-blue.svg"/>
                  <span> Your Modules </span>
                </div>
                <div onClick={() => { this.sidebarClickHandler('saved modules') }} className="single-option">
                  <img src="/images/folder-24px-green.svg"/>
                  <span> Saved Modules </span>
                </div>
                <Link to="/create" >
                  <div className="single-option">
                    <img src="/images/add_box-24px.svg"/>
                    <span> Create A Module </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="middle column" >
            {this.props.hasLoaded.modulesHaveLoaded && <>
            {this.state.activeModules === "saved modules" && <SavedModules savedModules={this.state.savedModules}/>}
            {this.state.activeModules === "your modules" && <YourModules yourModules={this.state.yourModules}/>}
            </>

             }

            {/* {this.state.activeModules === "saved modules" && <SavedModules savedModules={this.state.savedModules}/>}
            {this.state.activeModules === "your modules" && <YourModules yourModules={this.state.yourModules}/>} */}
            {/* {this.state.activeModules === "your modules" && <YourModules yourModules={this.state.yourModules}/> */}

          </div>
          <div className="right column" >
          </div>
        </div>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    user: globalState.user,
    modules: globalState.modules,
    hasLoaded: globalState.hasLoaded
  }
}

export default connect(mapStateToProps)(Profile)
