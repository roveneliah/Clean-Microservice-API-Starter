import * as firebase from 'firebase/app'
import 'firebase/firestore';

// helper functions
import loadFirebaseConfig from '../../../../../helpers/loadFirebaseConfig'

export default function makeFirestoreDb() {
  const firebaseConfig = loadFirebaseConfig()
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const firestore = firebase.firestore()

  // Document-Based NoSQL Object
  return Object.freeze({
    set,
    update,
    remove,
    get
  })

  // Using set() overwrites data at the specified location, including any child nodes.
  async function set(docString, data) {
    await firestore.doc(docString).set(data)
      .catch((error) => {
        console.log(`Error in set: ${error}`)
        throw error
      }
    )
  }

  // update field(s) of doc at id in collection
  // ex: { email: "me@you.com", }
  async function update(docString, updates) {
    await firestore.doc(docString).update(updates)
      .catch((error) => {
        console.log(`Error in update: ${error}`)
        throw error
      }
    )
  }

  async function get(docString) {
    const doc = await firestore.doc(docString).get()
      .catch(error => {
        console.log(`Error in get: ${error}`)
        throw error
      })

    return doc.data()
  }

  // Does not delete the subcollections (?)
  async function remove(docString) {
    await firestore.doc(docString).delete()
      .catch((error) => {
        console.log(`Error in remove: ${error}`)
        throw error
      }
    )
  }
}