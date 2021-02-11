import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA2KCD3p6Y50L2-tCkI3CVv6ULuXnCBX_M",
  authDomain: "gclone-b3551.firebaseapp.com",
  projectId: "gclone-b3551",
  storageBucket: "gclone-b3551.appspot.com",
  messagingSenderId: "274512477846",
  appId: "1:274512477846:web:839a58fcff7dec2b870cb7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}