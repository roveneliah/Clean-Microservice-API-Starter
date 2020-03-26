import loadFirebaseConfig from './loadFirebaseConfig';

test('Reads in firebase\'s .env variables', () => {

  const envConfig = loadFirebaseConfig()
  const firebaseConfig = {
    apiKey: "AIzaSyAI2TXx4Cyr03t6HWNDh7QAyEIPP-OF3mU",
    authDomain: "authtest0-3ec0a.firebaseapp.com",
    databaseURL: "https://authtest0-3ec0a.firebaseio.com",
    projectId: "authtest0-3ec0a",
    storageBucket: "authtest0-3ec0a.appspot.com",
    messagingSenderId: "26869064009",
    appId: "1:26869064009:web:d4a4916d8b7eb598e73a98"
  };

  expect(envConfig).toMatchObject(firebaseConfig)
})