import './Todo.scss'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { InsertTaskFiled } from '../../components/InsertTaskFiled/InsertTaskFiled'
import { Navigation } from '../../components/Navigation/Navigation'
import { fAuth, fStore } from '../../firebase/firebase.client'
import { Header } from '../../layouts/Header/Header'
import { TodoList } from '../../layouts/TodoList/TodoList'
import { TTask } from '../../utils/types/types'

export const Todo: FC = () => {
  const [tasks, setTasks] = React.useState<TTask[] | null>(null)
  const [focused, setFocused] = React.useState<TTask[] | null>(null)
  const [completed, setCompleted] = React.useState<TTask[] | null>(null)

  const path = useLocation().pathname

  React.useEffect(() => {
    const tasksRef = `app/${fAuth.currentUser?.uid}/tasks`
    const allQ = query(collection(fStore, tasksRef), orderBy('createdAt', 'desc'))

    onSnapshot(allQ, snapshot => {
      const tasksArr: TTask[] = []
      snapshot.docs.forEach(doc => {
        const task = { ...doc.data(), id: doc.id } as TTask
        tasksArr.push(task)
      })

      setTasks(tasksArr.filter(itm => !itm.done))
      setFocused(tasksArr.filter(itm => itm.focus))
      setCompleted(tasksArr.filter(itm => itm.done))
    })
  }, [])

  return (
    <>
      <div className="page-wrapper">
        <Header />
        <div className="content-wrapper container grid">
          <Navigation />
          <TodoList list={path === '/all' ? tasks : path === '/focus' ? focused : completed} />
        </div>
        <div className="container grid">
          <InsertTaskFiled />
        </div>
      </div>
    </>
  )
}
