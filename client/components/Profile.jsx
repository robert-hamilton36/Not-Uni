import React from 'react'
import { Link } from 'react-router-dom'
import SavedModules from './SavedModules'



class Profile extends React.Component {

  

  render() {
    return (
    <>
      <div className="profile">

        <h1> Welcome </h1>

        <h1> Saved Modules </h1>
        <SavedModules />
      </div>
    </>
    )
  }
}

export default Profile
