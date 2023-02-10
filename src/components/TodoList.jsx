import React from 'react'
import TodoItem from './TodoItem'
import { useTodoStore } from '../store'

const TodoList = () => {
  const items = useTodoStore((state) => state.getTodos())

  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default TodoList
