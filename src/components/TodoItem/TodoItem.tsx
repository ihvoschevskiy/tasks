import './TodoItem.scss'
import React, { FC } from 'react'
import deleteIco from '../../assets/images/delete-ico.svg'
import editIco from '../../assets/images/edit-ico.svg'

interface Props {
  task: string
}

export const TodoItem: FC<Props> = ({ task }) => {
  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <>
      <div className="todo-item">
        <label className="todo-item__card">
          <input checked={isChecked} type="checkbox" onChange={() => setIsChecked(prev => !prev)} />
          <span className="todo-item__task">{task}</span>
        </label>
        <img src={editIco} alt="done" className="todo-item__edit-ico" />
        <img src={deleteIco} alt="done" className="todo-item__delete-ico" />
      </div>
    </>
  )
}
