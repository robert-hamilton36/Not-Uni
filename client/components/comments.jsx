import React from 'react'
import { connect } from 'react-redux'

class Comments extends React.Component {

  render (){ 
    return (
      <div className="comments"> 
        {this.props.comments.map(comment => {
          return (
            <div className="single-comment">
              <p >{comment.content}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Comments