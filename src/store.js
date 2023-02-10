import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useTempTodoStore = create((set) => ({
  tempTodo: null,
  setTempTodo: (todo) => set({ tempTodo: todo }),
}))

const useTodoStore = create(
  devtools(
    persist(
      (set, get) => ({
        todos: [],
        getTodos: () => get().todos,
        createTodo: (todo) =>
          set((state) => ({ todos: [...state.todos, todo] })),
        updateTodo: (todo) =>
          set((state) => ({
            todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
          })),
        deleteTodo: (id) =>
          set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
      }),

      {
        name: 'todo',
      }
    ),
    { anonymousActionType: 'TODO' }
  )
)
export { useTempTodoStore, useTodoStore }
