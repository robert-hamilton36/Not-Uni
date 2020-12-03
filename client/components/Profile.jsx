import React from 'react'
import { Link } from 'react-router-dom'
import SavedModules from './SavedModules'



class Profile extends React.Component {

  fakeProps = {
    auth: {
      name: "Gary"
    }
  }

  render() {
    return (
    <>
      <div className="profile">

        <h1> Welcome, {this.fakeProps.auth.name} </h1>

        <h1> Saved Modules </h1>
        <SavedModules />
      </div>
    </>
    )
  }
}

export default Profile
