import React, { useState, useEffect } from 'react'
import { useStore } from 'react-redux'
import firebase from '../../firebase'

import { deleteUser, getUsers } from '../../apis/firebaseDB'
import EditUser from './EditUser'

export default function FirebasePratice() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)

  const ref = firebase.firestore().collection("users")

  // function getUsersDynamic() {
  //   setLoading(true)
  //   ref.onSnapshot((querySnaphot) => {
  //     const items = []
  //     querySnaphot.forEach((doc) => {
  //       items.push(doc.data())
  //     })
  //     console.log(items)
  //     setUsers(items)
  //     setLoading(false)
  //   })
  // }

  // function getUsersStatic() {
  //   setLoading(true)
  //   ref.get().then((item) => {
  //     const items = item.docs.map((doc) => doc.data())
  //     setUsers(items)
  //     setLoading(false)
  //   })
  // }

  function deleterUser(user) {
    deleteUser(user)
  }

  function editUser() {
    setEditing(true)
  }

  useEffect(() => {
    setLoading(true)
    getUsers(setUsers)
    
    setLoading(false)
  },[])
  
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
    <div>
      {/* <h1>Users</h1> */}
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.email}</h2>
          <button onClick={() => deleterUser(user)}>Delete</button>
          {!editing ? <button onClick={() => editUser()}>Edit</button>:<EditUser user={user} setEditing={setEditing}/>}
        </div>
      ))}
    </div>
    </>
  )
}


//https://www.youtube.com/playlist?list=PLpPVLI0A0OkJ-bu1zSiknRYEUIy33gCwp