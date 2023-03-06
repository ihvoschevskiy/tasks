import './common/styles/_base.scss'
import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { Todo } from './pages/Todo/Todo'

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/all" element={<Todo />} />
          <Route path="/focus" element={<Todo />} />
          <Route path="/done" element={<Todo />} />
        </Route>
        <Route path="/*" element={<Navigate to="/all" />} />
      </Routes>
    </>
  )
}
