import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Title from './components/Title'
import Filter from './components/Filter'

function App() {

  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  const addTodo = (text, category) => {

    const newTodos = [...todos, 
    {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodos);
};

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }

  return (

    <div className='w-3/5 flex flex-col items-center justify-center m-auto mb-72 mt-4 bg-gray-200 rounded-xl p-10'>

      <Title />

      <TodoForm addTodo={addTodo} />

      {todos.length < 1 ? "" : <> <Search search={search} setSearch={setSearch}/> <Filter filter={filter} setFilter={setFilter}/> </>}

      {todos.length < 1 ? "" : 
      <div className='w-full mt-3'>
        {todos
          .filter((todo) =>
             filter === 'All'
               ? true 
               : filter === 'Completed' 
               ? todo.isCompleted 
               : !todo.isCompleted
            )
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      }
      
    </div>
  )
}

export default App
