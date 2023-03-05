import './PrivateRoute.scss'
import React, { FC } from 'react'
import { Navigate, Outlet, RouteProps } from 'react-router-dom'

export const PrivateRoute: FC<RouteProps> = () => {
  const isAuthenticated = false
  if (!isAuthenticated) return <Navigate to="/login" replace={true} />
  return <Outlet />
}
