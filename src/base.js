import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'



const firebaseApp = firebase.initializeApp({
    apiKey: "toBeReplaced",
    authDomain: "recettes-app-507a8.firebaseapp.com",
    databaseURL: "https://recettes-app-507a8.firebaseio.com",
    projectId: "recettes-app-507a8",
    storageBucket: "",
    messagingSenderId: "799111982363",
    appId: "1:799111982363:web:019c3949f20fccb7"
  })

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
