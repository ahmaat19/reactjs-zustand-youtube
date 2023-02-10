import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  return (
    <div className='container'>
      <div className='row gy-3 mt-5'>
        <div className='col-lg-6 col-md-10 col-12 mx-auto bg-light p-5 shadow'>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App
