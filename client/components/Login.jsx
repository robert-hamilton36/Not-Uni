import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { auth, google, github} from '../firebase'
import { setUser } from '../actions'
import { signIn, signInWithOutsideProvider } from '../actions/authenticated'



class Login extends React.Component {
  state={
    email:'',
    password:'',
    error:''
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
    console.log("signing in")
    try{
      await this.props.dispatch(signIn(this.state.email, this.state.password))
    }catch {
      return "Failed to login"
    }
  
  }

  handleGoogle = async (provider) => {
    try{
      await this.props.dispatch(signInWithOutsideProvider(provider))
    }catch {
      return "Failed to login"
    }
  }


  render () {
    return (
      <div className='login-card'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}> 
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="email"/>
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="password"/>
          <input type="submit" value="Login"/>
        </form>

        <div> 
          <svg height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4"></path><path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853"></path><path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05"></path><path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335"></path><path d="M20 20h472v472H20V20z"></path></g></svg>
          <span><button onClick={() => this.handleGoogle(google)}>Continue with Google</button> </span>
        </div> 
        {/* <div>
        <span><button onClick={() => this.handleGoogle(github)}>Continue with Github</button> </span>

        </div> */}
      </div>
    )
  }
}

// function mapStateToProps (globalState) {
//   return {
//     dispatch: globalState.dispatch
//   }
// }

export default connect()(Login)

// En8nRWX2pvzMUYP\
//https://firebase.google.com/docs/auth/web/start