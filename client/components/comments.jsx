import React from 'react'
import { connect } from 'react-redux'

class Comments extends React.Component {

  render (){ 
    return (
      <div className="comments"> 
            <p className='title'>Comments</p>
        {this.props.comments.map(comment => {
          return (
              <div >
                  <p className="user-name" >{comment.user_id}</p>
              <p className="single-comment" >{comment.content}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Comments