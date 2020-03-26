// (1) import the entities builders
import buildMakeUser from './user.js' 

// (2) import the dependencies or functions to inject in

// (3) inject the dependencies into the entities and export them
const makeUser = buildMakeUser({  }) // no dependencies for now

// (4) export to out level
export default makeUser;