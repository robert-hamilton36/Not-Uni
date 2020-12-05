import firebase from '../firebase'


const ref = firebase.firestore().collection("users")

//Create
export function addUser(newUser) {
    console.log("adding..")
    ref
    .doc(newUser.id)
    .set(newUser)
    .catch((err) => {
        console.error(err)
      });
      console.log("added?")
}

//Read
    export function getUsers(setUsers) {
        ref.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            console.log("hello")
            console.log(items)
            setUsers(items)
        })
    }

//Update

function editUser(updatedUser) {
    setLoading();
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
    