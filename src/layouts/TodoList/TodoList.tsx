import './TodoList.scss'
import React, { FC } from 'react'
import { TodoItem } from '../../components/TodoItem/TodoItem'

export const TodoList: FC = () => {
  return (
    <>
      <div className="todo-list">
        <TodoItem task="Complete online JavaScript course" />
        <TodoItem task="Jog around the park 3x" />
        <TodoItem task="10 minutes meditation" />
        <TodoItem task="Read for 1 hour" />
        <TodoItem task="Pick up groceries" />
        <TodoItem task="Complete todo app for Frontend Mentor" />
      </div>
    </>
  )
}
