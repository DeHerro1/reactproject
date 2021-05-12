import firebase from 'firebase';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5yR11dnanxpRxqb17e-1MX8Ptz7vaih4",
    authDomain: "clone-2033c.firebaseapp.com",
    databaseURL: "https://clone-2033c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "clone-2033c",
    storageBucket: "clone-2033c.appspot.com",
    messagingSenderId: "958508413555",
    appId: "1:958508413555:web:8ff3a731eb09550dd23006",
    measurementId: "G-7MH4GK64N7"
  }

  export const uiConfig = {
    signUpFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  callbacks: {
    signInSuccess: () => false
  }
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export default db;