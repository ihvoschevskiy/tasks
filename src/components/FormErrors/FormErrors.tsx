import './FormErrors.scss'
import React, { FC } from 'react'

interface IProps {
  error: string
}

export const FormErrors: FC<IProps> = ({ error }) => {
  return (
    <>
      <div className="errors-container">
        <span>{error}</span>
      </div>
    </>
  )
}
