// TODO: если список задач пуст => отобразить сообщение о необходимоити добавить задачу
import './Todo.scss'
import React, { FC } from 'react'
import { InsertTaskFiled } from '../../components/InsertTaskFiled/InsertTaskFiled'
import { Navigation } from '../../components/Navigation/Navigation'
import { Header } from '../../layouts/Header/Header'
import { TodoList } from '../../layouts/TodoList/TodoList'

export const Todo: FC = () => {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <div className="content-wrapper container grid">
          <Navigation />
          <TodoList />
        </div>
        <div className="container grid">
          <InsertTaskFiled />
        </div>
      </div>
    </>
  )
}
