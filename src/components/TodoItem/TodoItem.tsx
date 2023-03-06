import './TodoItem.scss'
import React, { FC } from 'react'
import deleteIco from '../../assets/images/delete-ico.svg'
import editActiveIco from '../../assets/images/edit-active-ico.svg'
import editIco from '../../assets/images/edit-ico.svg'
import goalActiveIco from '../../assets/images/goal-active-ico.svg'
import goalIco from '../../assets/images/goal-ico.svg'
import { deleteTask, updateTask } from '../../firebase/firebase.repository'
import { TTask } from '../../utils/types/types'

interface Props {
  task: TTask
}

export const TodoItem: FC<Props> = ({ task }) => {
  const [isChecked, setIsChecked] = React.useState(task.done)
  const [isFocused, setIsFocused] = React.useState(task.focus)
  const [isEdit, setIsEdit] = React.useState(false)
  const [taskTitle, setTaskTitle] = React.useState(task.title)
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  React.useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus()
  }, [isEdit])

  React.useEffect(() => {
    setTimeout(() => {
      if (isChecked) {
        updateTask(task.id, { done: isChecked, focus: false })
      } else {
        updateTask(task.id, { done: isChecked })
      }
    }, 500)
  }, [isChecked])

  React.useEffect(() => {
    updateTask(task.id, { focus: isFocused })
  }, [isFocused])

  const onEditClick = async () => {
    if (isEdit) {
      if (taskTitle === '') return
      setIsEdit(prev => !prev)
      await updateTask(task.id, { title: taskTitle })
    } else {
      setIsEdit(prev => !prev)
    }
  }

  const onPressEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        if (taskTitle === '') return
        setIsEdit(prev => !prev)
        await updateTask(task.id, { title: taskTitle })
        break
      case 'Escape': {
        setTaskTitle(task.title)

        setIsEdit(prev => !prev)
        break
      }
    }
  }

  const onDeleteClick = async () => {
    await deleteTask(task.id)
  }

  const onFocusHandleClick = () => {
    if (isChecked) return
    setIsFocused(prev => !prev)
  }

  return (
    <>
      <div className="todo-item" id={task.id}>
        <label className="todo-item__card">
          {isEdit ? (
            <input
              value={taskTitle}
              maxLength={120}
              ref={inputRef}
              className="todo-item__edit-input"
              type="text"
              autoFocus={true}
              autoComplete="off"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTaskTitle(e.target.value)
              }}
              onKeyDown={onPressEnter}
            />
          ) : (
            <>
              <input checked={isChecked} type="checkbox" onChange={() => setIsChecked(prev => !prev)} />
              <span className="todo-item__task">{task.title}</span>
            </>
          )}
        </label>
        <img
          src={isFocused ? goalActiveIco : goalIco}
          onClick={onFocusHandleClick}
          alt="goal"
          className="todo-item__goal-ico"
        />
        <img src={isEdit ? editActiveIco : editIco} onClick={onEditClick} alt="done" className="todo-item__edit-ico" />
        <img src={deleteIco} onClick={onDeleteClick} alt="done" className="todo-item__delete-ico" />
      </div>
    </>
  )
}
