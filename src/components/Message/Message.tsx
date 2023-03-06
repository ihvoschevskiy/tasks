import './Message.scss'
import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'

export const Message: FC = () => {
  const path = useLocation().pathname
  return (
    <div className="message-wrapper">
      <h2 className="message__title">Your list is empty</h2>
      <span className="message__text">
        {path === '/all' ? 'Create your new task' : path === '/focus' ? 'No active tasks found' : 'You are lazy'}
      </span>
    </div>
  )
}
