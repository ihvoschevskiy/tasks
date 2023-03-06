import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentReference,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { fAuth, fStore } from './firebase.client'

export const createUserCollection = async (): Promise<void> => {
  const user = fAuth.currentUser
  if (user) await setDoc(doc(fStore, 'app', user.uid), { email: user.email })
}

export const createTask = async (data: string): Promise<DocumentReference> => {
  const tasksRef = `app/${fAuth.currentUser?.uid}/tasks`
  return await addDoc(collection(fStore, tasksRef), {
    title: data,
    focus: false,
    done: false,
    createdAt: serverTimestamp(),
  })
}

type TData = { [key: string]: boolean | string }

export const updateTask = async (id: string, data: TData): Promise<void> => {
  const tasksRef = doc(fStore, `app/${fAuth.currentUser?.uid}/tasks/${id}`)
  await updateDoc(tasksRef, data)
}

export const deleteTask = async (ref: string): Promise<void> => {
  const tasksRef = `app/${fAuth.currentUser?.uid}/tasks`
  await deleteDoc(doc(fStore, tasksRef, ref))
}
