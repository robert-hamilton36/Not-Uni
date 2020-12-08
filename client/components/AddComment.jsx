import React from 'react'
import { connect } from 'react-redux'

class AddComment extends React.Component {

  render (){ 
    return (
      <>
      <h1> add a comment </h1>
      <textarea onClick={this.} className="add-comment-input" onChange={(evt) => this.elementChangeHandler(evt, i)} value={this.state.elements[i].content} placeholder="text" />
      <div className="submit"> Comment </div>

      </>
    )
  }
}

export default AddComments