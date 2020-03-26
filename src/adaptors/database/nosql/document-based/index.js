import makeFirestoreDb from './firestore'
// import makeMongoDb from './mongodb'

const providers = {
  firestore: makeFirestoreDb,
  // mongodb: makeMongoDb
}

export default function makeNoSqlDocDb(service) {
  const makeNoSqlDocDb = providers[service]
  const noSqlDocDb = makeNoSqlDocDb()
  return noSqlDocDb
}