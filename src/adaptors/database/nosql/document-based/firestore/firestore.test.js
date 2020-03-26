// import makeFirestoreDb from './index'
import makeNoSqlDocDb from '../../document-based'
import makeAuthService from '../../../../authService'

const db = makeNoSqlDocDb('firestore')

const validUser = {
  email: "amy@schmoe.com",
  password: "amythe",
  username: "schmoe"
}

beforeAll(async () => {
  // Test adaptor with test collection
  const authService = makeAuthService('firebase')
  await authService.signIn(validUser.email, validUser.password)
    .catch(async error => {
      await authService.signUp(validUser.email, validUser.password)
        .catch(error => {
          throw new Error('Unable to sign in or create user.')
      })
    })
})

test('Set value in collection', async () => {
  await db.set(`test/${validUser.email}`, validUser)

  const data = await db.get(`test/${validUser.email}`)
  expect(data).toEqual(validUser)
})

test('Update value in collection', async () => {
  const updates = { status: "sleeping", username: "joe" }
  const updatedUser = Object.assign(validUser, updates)

  await db.update(`test/${validUser.email}`, updates)

  const data = await db.get(`test/${validUser.email}`)
  expect(data).toEqual(updatedUser)
})

test('Set value in collection', async () => {
  await db.remove(`test/${validUser.email}`)

  const data = await db.get(`test/${validUser.email}`)
  expect(data).toEqual(undefined)
})