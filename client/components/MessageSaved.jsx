import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class MessageSaved extends React.Component {
  render () {
    return (
      <div className= 'heart-saved'>
        <img src="/images/red-heart.png" alt="heart"/>
      </div>
    )
  }
}

export default MessageSaved
