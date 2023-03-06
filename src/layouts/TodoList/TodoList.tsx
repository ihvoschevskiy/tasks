import './TodoList.scss'
import React, { FC } from 'react'
import { Loading } from '../../components/Loading/Loading'
import { Message } from '../../components/Message/Message'
import { TodoItem } from '../../components/TodoItem/TodoItem'
import { TTask } from '../../utils/types/types'

interface IProps {
  list: TTask[] | null
}
export const TodoList: FC<IProps> = ({ list }) => {
  return (
    <>
      <div className="todo-list">
        {list ? (
          list.length > 0 ? (
            list.map(item => {
              return <TodoItem key={item.id} task={item} />
            })
          ) : (
            <Message />
          )
        ) : (
          <Loading />
        )}
      </div>
    </>
  )
}
