import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAuvpdb_Q_N_sukrCWUDnLpymlsEUI1d4c",
  authDomain: "recettes-app-9e780.firebaseapp.com",
  databaseURL: "https://recettes-app-9e780.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
