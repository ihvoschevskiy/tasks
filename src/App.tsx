import './common/styles/_base.scss'
import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Todo } from './pages/Todo/Todo'

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </>
  )
}
