import { FirebaseApp, initializeApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBJQ5EkPxVWIeZAUB89kMffvnIZiOSA65A',
  authDomain: 'tasks-784ab.firebaseapp.com',
  projectId: 'tasks-784ab',
  storageBucket: 'tasks-784ab.appspot.com',
  messagingSenderId: '597417441253',
  appId: '1:597417441253:web:e3a351e0cecae66377210c',
}

const app: FirebaseApp = initializeApp(firebaseConfig)
const store: Firestore = getFirestore(app)

export default store