import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import "regenerator-runtime/runtime.js"


export class Register extends React.Component {
  state={
    error:'',
    loading: false,
    userName:'',
    email:'',
    password:'',
    passwordConfirm:'',
  }

  setLoading = (boolean) => {
    this.setState({loading:boolean})
  }

  setError = (errorMess) => {
    this.setState({error:errorMess})
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = async (event) => {
    console.log("submitted")
    event.preventDefault()
    if (this.state.password !== this.state.passwordConfirm){
      this.setState(
        {password:'',
        passwordConfirm:''})
      return this.setError("Passwords do not match")
    }
    try{
      this.setLoading(true)
      console.log(sending)
      await this.props.dispatch(register(this.state.userName, this.state.email, this.state.password))

      // this.props.dispatch(setUser(user))
      this.props.history.push("/")
    }catch {
      return "Failed to registrate"
    }
    this.setLoading(false)
  }
  render(){
    return (

      <div className='Register-card'>
        
        <h1>Register</h1>
        {this.state.error && <h1>{this.state.error}</h1>}
        <form onSubmit={this.handleSubmit}>
          <input className='Input-R' type="text" name="userName" onChange={this.handleChange} value={this.state.userName} placeholder="userName"/>
          <input className='Input-R' type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="email"/>
          <input className='Input-R' type="password"name="password"  onChange={this.handleChange} value={this.state.password} placeholder="password"/>
          <input className='Input-R' type="password" name="passwordConfirm" onChange={this.handleChange} value={this.state.passwordConfirm} placeholder="password-confirmation"/>
          <input className='button' type="submit" disabled={this.state.loading} value="Register"/>
        </form>

      </div>
    )
  }
}

export default Register
