import './Navigation.scss'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { CATEGORIES } from '../../utils/constants/app.constants'

export const Navigation: FC = () => {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          {CATEGORIES.map(item => {
            return (
              <li className="navigation__item" key={item}>
                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) => {
                    return `navigation__link ${isActive ? 'navigation__link--active' : ''}`
                  }}
                >
                  {item}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
