import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { updateFirebase } from '../actions/authenticated'


const EditProfile = (props) => {
  const [userName, setUserName] = useState(props.user.userName)
  const [email, setEmail] = useState(props.user.email)
  const [error, setError] = useState('')
  // const [photoURL, setPhotoURL] = useState('')

  function submit(e){
    e.preventDefault()
    try{
      props.dispatch(updateFirebase(userName, email , props.sidebarClickHandler))
    }catch (e) {
    console.log(e)
    // setError("Failed to edit")
    return "Failed to registrate"
   }
  }



    return (
      <>
      {props.hasLoaded && 
      <>
      <h1>{error}</h1>
      <div className='Register-card'>
        <form onSubmit={submit}>

        <input className='Input-R' onChange={e => setUserName(e.target.value)} value={userName}/>
        <input className='Input-R' onChange={e => setEmail(e.target.value)} value={email}/>
        <input className='button' type='submit' value='Edit'/>
        </form>
      </div>
      <h1>{userName}</h1>
      <h1>{email}</h1>
      {/* <h1>{photoURL}</h1> */}

      </>
      }
      </>
    )
}

function mapStateToProps(globalState) {
  return {
    dispatch: globalState.dispatch,
    hasLoaded: globalState.hasLoaded.authHasLoaded,
    user: globalState.user,
    modules: globalState.modules,
    savedModules: globalState.savedModules,
    hasLoaded: globalState.hasLoaded
  }
}

export default connect(mapStateToProps)(EditProfile)