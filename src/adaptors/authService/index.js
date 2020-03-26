import makeFirebaseAuth from './firebase'

const providers = {
  firebase: makeFirebaseAuth,
}

export default function makeAuthService(service) {
  const makeAuthService = providers[service]
  const authService = makeAuthService()
  return authService
}