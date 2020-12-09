import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

class ModuleCreated extends React.Component {
  render () {
    return (
      <div className='module-created'>
        <div className="module-created-card" >
          <h1>Success!</h1>
          <img className="module-created-success" src='/images/success.png' alt='success'></img>
          <span> Your module has been created</span>
          <Link to="profile"><span> See all your created modules</span> </Link>
        </div>
      </div>
    )
  }
}

export default ModuleCreated
