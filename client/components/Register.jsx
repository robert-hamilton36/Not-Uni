import React, {useRef, useState} from 'react'
// import { setConstantValue } from 'typescript'
import { useAuth } from '../Contexts/AuthContext'
import { auth } from '../firebase'
import { setUser } from '../actions'
import { connect } from 'react-redux'

export class Register extends React.Component {
  state={
    error:'',
    loading: false,
    email:'',
    password:'',
    passwordConfirm:'',
  }

  // componentDidMount(){
  //   let unsubscribe = auth.onAuthStateChanged(user => this.props.dispatch(setUser(user)))
  // }

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
   event.preventDefault()
    console.log("hello")
    console.log(this.state)
    if (this.state.password !== this.state.passwordConfirm){
      this.setState(
        {password:'',
        passwordConfirm:''})
      return this.setError("Passwords do not match")
    }
     try {
      // unsubscribe = auth.onAuthStateChanged(user => this.props.dispatch(setUser(user)))
      this.setError('')
      this.setLoading(true)
  

      await auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => this.props.dispatch(setUser(user)))

      // this.unsubscribe()

    } catch {
      this.setError("Failed to create an account")
    }
    this.setLoading(false)

  
  }



  render(){
    return (
      <div className='Register-card'>
        <h1>Register</h1>
        {this.state.error && <h1>{this.state.error}</h1>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="email"/>
          <input type="password"name="password"  onChange={this.handleChange} value={this.state.password} placeholder="password"/>
          <input type="password" name="passwordConfirm" onChange={this.handleChange} value={this.state.passwordConfirm} placeholder="password-confirmation"/>
          <input type="submit" disabled={this.state.loading} value="Register"/>
        </form>
  
        <div> 
          <svg height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4"></path><path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853"></path><path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05"></path><path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335"></path><path d="M20 20h472v472H20V20z"></path></g></svg>
          <span> Continue with Google </span>
        </div> 
      </div>
    )
  }
}


function mapStateToProps (globalState) {
  return {
    dispatch: globalState.dispatch
  }
}

export default connect()(Register)