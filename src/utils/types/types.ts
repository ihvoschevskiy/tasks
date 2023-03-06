import { Timestamp } from 'firebase/firestore'

export type TTask = { id: string; title: string; focus: boolean; done: boolean; createAt: Timestamp }
