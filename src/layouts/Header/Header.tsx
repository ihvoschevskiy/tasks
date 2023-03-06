import './Header.scss'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import logout from '../../assets/images/logout-ico.svg'
import { useAuthContext } from '../../features/auth/AuthContextProvider'

export const Header: FC = () => {
  const { user, logOut } = useAuthContext()
  const onClick = () => {
    logOut()
  }

  return (
    <>
      <header className="header">
        <div className="container grid">
          <div className="header-info">
            <p className="header__username">{user.displayName || user.email.match(/(.+)(?:@)/)[1]}</p>
            <Link to="/login" onClick={onClick} className="header__logout-link">
              <img src={logout} alt="logout" className="header__logout-icon" />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
