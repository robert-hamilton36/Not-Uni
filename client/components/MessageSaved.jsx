import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class MessageSaved extends React.Component {
  render () {
    return (
      <div className= 'message-saved'>
        {/* <img src="/images/bookmark-border-black.svg" alt="bookmark"/> */}
        <div className='message-heading'>
        </div>
        <h3>This Module has been saved to your profile</h3>
      </div>
    )
  }
}

export default MessageSaved
