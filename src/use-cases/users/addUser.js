// Import the makeUser, 
import { makeUser } from '../../entities'
// inject db adaptors into the addUser function
export default function makeAddUser ({ authService, db }) { 
    // create user instance from userInfo passed in,
    // and add to database adaptor which was injected into makeAddUser
    return async function addUser (userInfo) {
        const user = makeUser(userInfo)

        console.log(`Create user: ${JSON.stringify(userInfo)}`)

        // otherwise create the new user
        await authService.signIn(userInfo.email, userInfo.password)
        await db.set('users', userInfo.email, userInfo)
    }
}