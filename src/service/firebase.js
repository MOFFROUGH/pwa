import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAtKUps9uqYZpBpeB0Jcb0d_m4ExxabEXY',
  authDomain: 'cropchat-7027c.firebaseapp.com',
  databaseURL: 'https://cropchat-7027c.firebaseio.com',
  projectId: 'cropchat-7027c',
  storageBucket: 'cropchat-7027c.appspot.com',
  messagingSenderId: '285168754673'
}
firebase.initializeApp(config)
const storage = firebase.storage()
const database = firebase.database()

export {
  database,
  storage
}
