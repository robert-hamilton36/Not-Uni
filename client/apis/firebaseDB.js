import firebase from '../firebase'


const ref = firebase.firestore().collection("users")

//Create
export function addUserToFirestore(newUser) {
    ref
    .doc(newUser.id)
    .set(newUser)
    .catch((err) => {
        console.error(err)
      });
}

//Read
    export function getUsers(setUsers) {
        ref.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setUsers(items)
        })
    }

//Update

export function editUser(updatedUser) {
    ref
      .doc(updatedUser.id)
      .update(updatedUser)
      .catch((err) => {
        console.error(err);
      });
  }

//Delete
    export function deleteUser(user) {
        ref
        .doc(user.id)
        .delete()
        .catch((err) => {
          console.error(err);
        });
    }
    