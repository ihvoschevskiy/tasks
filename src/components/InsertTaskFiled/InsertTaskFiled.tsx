import './InsertTaskFiled.scss'
import React, { FC } from 'react'

export const InsertTaskFiled: FC = () => {
  return (
    <>
      <form className="insert-task" onSubmit={() => console.log('insert')}>
        <label>
          <input
            className="insert-task__input"
            type="text"
            placeholder="Create a new task..."
            autoFocus
            autoComplete="off"
          />
        </label>
      </form>
    </>
  )
}
