import React from 'react'
import { Link, Route } from 'react-router-dom'
import { textSpanIsEmpty } from 'typescript'
import SavedModules from './SavedModules'



class Profile extends React.Component {
  fakeProps = {
    userName: "Oli"
  }

  render() {
    return (
      <>
        <div className="profile-page">
          <div className="left column" >
            <div className="profile-options-box">
              <div className="heading">
                <h1> Welcome {this.fakeProps.userName} </h1>
              </div>
              <div className="options">
                <div className="single-option">
                  <img src="/images/files-icon.svg"/>
                  <span> Your Modules </span>
                </div>
                <div className="single-option">
                  <img src="/images/plus-icon.svg"/>
                  <Link to="profile/savedmodules">
                    <span> Saved Modules </span>
                  </Link>
                </div>

              </div>
            </div>
          </div>

          <div className="middle column" >
            {/* <Route expact path="/profile/yourmodules" component={YourModules}/> */}
            <Route expact path="/profile/savedmodules" component={SavedModules}/>
          </div>

          <div className="right column" >
            asdfasdf
          </div>
        </div>
      </>
    )
  }
}

export default Profile
