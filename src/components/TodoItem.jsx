import React from 'react'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import { useTodoStore, useTempTodoStore } from '../store'

const TodoItem = ({ item }) => {
  const { deleteTodo } = useTodoStore((state) => state)
  const { setTempTodo } = useTempTodoStore((state) => state)

  return (
    <div className='card border-0 shadow-sm mb-2'>
      <div className='card-body p-4'>
        <div className='card-text d-flex justify-content-between align-items-center'>
          <p className='my-auto'>{item.title}</p>
          <div>
            <FaPencilAlt
              className='mb-1 fs-5 text-success me-3'
              onClick={() => setTempTodo(item)}
            />
            <FaTrashAlt
              className='mb-1 fs-5 text-danger'
              onClick={() => deleteTodo(item.id)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
