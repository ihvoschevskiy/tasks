import './UserDataField.scss'
import React, { FC } from 'react'

interface Props {
  icon: any
  type: string
  placeholder: string
}

export const UserDataField: FC<Props> = ({ icon, type, placeholder }) => {
  return (
    <>
      <label className="data-field__label">
        <img src={icon} alt="icon" className="data-field__icon" />
        <input type={type} placeholder={placeholder} className="data-field__input" />
      </label>
    </>
  )
}
