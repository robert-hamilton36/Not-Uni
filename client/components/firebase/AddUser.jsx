import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid"
import { addUser } from '../../apis/firebaseDB'
import FirebasePratice from './FirebasePratice'


export default class AddUser extends Component {
    state = {
        userName: '',
        email: '',
        loading: false,
        sent: false,
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]:event.target.value
        })
      }
    
      handleSubmit = (event) => {
          event.preventDefault()
        addUser({email: this.state.email, userName:this.state.userName, id: uuidv4()})
        this.setState({userName: '',
        email: '',
        sent: true})
      }

    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }

        return (
            <>
                {!this.sent ?   
                <> 
                 <form onSubmit={this.handleSubmit}>
                    <input type="text" name="userName" onChange={this.handleChange} value={this.state.userName} placeholder="userName"/>
                    <input type="text"name="email"  onChange={this.handleChange} value={this.state.email} placeholder="email"/>
                    <input type="submit" value="Register"/>

                 </form>
                </>
                :
                <FirebasePratice/>
                }
            </>
        )
    }
}
