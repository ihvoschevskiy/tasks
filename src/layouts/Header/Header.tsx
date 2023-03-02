import './Header.scss'
import React, { FC } from 'react'
import logout from '../../assets/images/logout-ico.svg'

export const Header: FC = () => {
  return (
    <>
      <header className="header">
        <div className="container grid">
          <div className="header-info">
            <p className="header__username">sshelesst</p>
            <a href="#" className="header__logout-link">
              <img src={logout} alt="logout" className="header__logout-icon" />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
