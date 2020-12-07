import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid"
import { editUser } from '../../apis/firebaseDB'
import FirebasePratice from './FirebasePratice'

export default class EditUser extends Component {
  state = {
    userName: '',
    email: '',
    loading: false,
    sent: false,
    id: 0,
}

componentDidMount = () =>{
  console.log(this.props.user)
  this.setState({
    userName: this.props.user.userName,
    email:this.props.user.email,
    id:this.props.user.id,
  })
}
handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      console.log("yeeeyp")
    editUser({email: this.state.email, userName:this.state.userName, id: this.state.id})
    this.setState({userName: '',
    email: '',
    sent: true},
    this.props.setEditing(false))
  }
  render() {
    return (
      <> 
      <form onSubmit={this.handleSubmit}>
         <input type="text" name="userName" onChange={this.handleChange} value={this.state.userName}/>
         <input type="text"name="email"  onChange={this.handleChange} value={this.state.email}/>
         <input type="submit" value="Edit"/>

      </form>
     </>
    )
  }
}
