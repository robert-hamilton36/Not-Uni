import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class MessageSaved extends React.Component {
  render () {
    return (
      <div className= 'message-saved'>
        <img src="/images/bookmark-border-black.svg" alt="bookmark"/>
      </div>
    )
  }
}

export default MessageSaved
