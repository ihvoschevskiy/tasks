import './Navigation.scss'
import React, { FC } from 'react'

export const Navigation: FC = () => {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item ">
            <a href="#" className="navigation__link navigation__link--active">
              All
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Focus
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Done
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
