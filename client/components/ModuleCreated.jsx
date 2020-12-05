import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class ModuleCreated extends React.Component {

  render () {
    return (
      <div className='module-created'>
        <div className="module-created-card" >
          <h1>WooHoo!</h1>
          <span> we've create your module </span>
          <Link to="profile"><span> See all your modules</span> </Link>
        </div>
      </div>
    )
  }
}

export default ModuleCreated