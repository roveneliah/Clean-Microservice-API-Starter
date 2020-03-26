// import use-case factory function
import makeAddUser from './addUser'

// import ADAPTORS to inject into use-cases
import makeAuthService from '../../adaptors/authService' // can make this conditional based on ENV variable ENV.AUTHSERVICE
const authService = makeAuthService('firebase')
import makeNoSqlDocDb from '../../adaptors/database/nosql/document-based'
const db = makeNoSqlDocDb('firestore')

console.log(`DB: ${Object.keys(db)}`)

// create use-case functions, which will be used by the api module (outer layer)
const addUser = makeAddUser({ authService, db })

// export the use-case
export {
  addUser
}