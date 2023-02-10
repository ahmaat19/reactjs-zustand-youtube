import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTodoStore, useTempTodoStore } from '../store'

const TodoForm = () => {
  const [title, setTitle] = useState('')

  const { createTodo, updateTodo } = useTodoStore((state) => state)
  const { setTempTodo, tempTodo } = useTempTodoStore((state) => state)

  useEffect(() => {
    if (tempTodo) {
      setTitle(tempTodo?.title)
    }
  }, [tempTodo])

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title) return

    if (tempTodo) {
      updateTodo({
        id: tempTodo.id,
        title,
      })
      setTempTodo(null)
    } else {
      createTodo({
        id: uuidv4(),
        title,
      })
    }
    setTitle('')
  }

  return (
    <form
      className='d-flex mb-4 border border-dark p-2'
      onSubmit={submitHandler}
    >
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className='form-control border-0 shadow-none rounded-0 bg-transparent'
        placeholder='Add a new todo'
      />
      <button type='submit' className='btn btn-outline-dark rounded-0'>
        Submit
      </button>
    </form>
  )
}

export default TodoForm
