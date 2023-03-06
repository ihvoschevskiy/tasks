import './InsertTaskFiled.scss'
import React, { FC } from 'react'
import { fAuth } from '../../firebase/firebase.client'
import { createTask } from '../../firebase/firebase.repository'

export const InsertTaskFiled: FC = () => {
  const [data, setData] = React.useState<string>('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!data) return

    const temporary = data
    setData('')
    const uid = fAuth.currentUser?.uid
    if (uid) {
      await createTask(temporary)
    }
  }

  const onHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }

  return (
    <>
      <form className="insert-task" onSubmit={onSubmit}>
        <label>
          <input
            value={data}
            maxLength={120}
            className="insert-task__input"
            type="text"
            placeholder="Create a new task..."
            autoFocus
            autoComplete="off"
            onChange={onHandle}
          />
        </label>
      </form>
    </>
  )
}
