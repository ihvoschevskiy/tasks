import { FirebaseApp, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const getFirebaseClient = (): FirebaseApp => {
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  }

  const app: FirebaseApp = initializeApp(firebaseConfig)

  return app
}

const client = getFirebaseClient()

export const fStore = getFirestore(client)
export const fAuth = getAuth(client)
