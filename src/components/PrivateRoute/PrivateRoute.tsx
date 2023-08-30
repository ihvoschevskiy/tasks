import './PrivateRoute.scss'
import React, { FC } from 'react'
import { Navigate, Outlet, RouteProps } from 'react-router-dom'
import { useAuthContext } from '../../features/auth/AuthContextProvider'

export const PrivateRoute: FC<RouteProps> = () => {
  const { isAuthenticated } = useAuthContext()
  if (isAuthenticated === null) {
    return <></>
  }

  if (isAuthenticated === false) return <Navigate to="/login" replace={true} />
  return <Outlet />
}
