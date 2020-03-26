import * as firebase from 'firebase/app'
import "firebase/auth";

import loadFirebaseConfig from '../../../helpers/loadFirebaseConfig'

export default function makeFirebaseAuth() {
    // Initialize Firebase and avoid reinitialization.
    const firebaseConfig = loadFirebaseConfig()
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

    return Object.freeze({
        signIn,
        signUp,
        logOut
    })

    async function signIn(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            if (errorCode === 'auth/wrong-password') {
                console.log('Wrong password.');
            } else {
                console.log(`Firebase Auth Error: ${errorMessage}`);
            }
            console.log(`signIn error: ${error}`);
            throw error
        });
    }

    async function signUp(email, password) {
        await firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            if (errorCode === 'auth/weak-password') {
                console.log('The password is too weak.');
            } else {
                console.log(`Firebase Auth Error: ${errorMessage}`);
            }
            console.log(`signUp error: ${error}`);
            throw error
    
        });
    }
    
    async function logOut() {
        await firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("signed out")
        }).catch((error) => {
            // An error happened.
            console.log("error")
            throw error
        });
    }
}
    
    
