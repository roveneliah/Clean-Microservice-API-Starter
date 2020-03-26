export default function buildMakeUser({ dependencies }) {
    return function makeUser({
        createdOn = Date.now(),
        // id = Id.makeId(),
        username,
        password,
        email
    } = {}) {
        // if (!Id.isValidId(id)) {
        //     throw new Error('User must have a valid id.')
        // }
        if (!username) {
            throw new Error('User needs a username.')
        }
        if (!password) {
            throw new Error('User needs a password.')
        }
        if (!email) {
            throw new Error('User needs an email.')
        }

        // makeUser returns a User object
        return Object.freeze({
            getUsername: () => username,
            getEmail: () => email,
            getUserId: () => id,
            getSignupDate: () => createdOn
        })
    }
}