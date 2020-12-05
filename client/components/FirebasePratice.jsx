import React, { useState, useEffect } from 'react'
import { useStore } from 'react-redux'
import firebase from '../firebase'

export default function FirebasePratice() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection("users")

  function getUsersDynamic() {
    setLoading(true)
    ref.onSnapshot((querySnaphot) => {
      const items = []
      querySnaphot.forEach((doc) => {
        items.push(doc.data())
      })
      console.log(items)
      setUsers(items)
      setLoading(false)
    })
  }

  function getUsersStatic() {
    setLoading(true)
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data())
      setUsers(items)
      setLoading(false)
    })
  }

  useEffect(() => {
    getUsersDynamic(),
    // getUsersStatic()
  },[])
  
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  )
}
