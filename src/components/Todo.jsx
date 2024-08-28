import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {

  return (
    <div 
        className='bg-white shadow-sm mb-3 p-2 rounded-md flex justify-between items-center'
        style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}    
    >
    <div>
        <p>{todo.text}</p>
        <p>({todo.category})</p>
    </div>
    <div>
        <button className='bg-green-500' onClick={() => completeTodo(todo.id)}>
            {todo.isCompleted ? 'Descompletar' : 'Completar'}
        
        </button>
        <button className='bg-red-500' onClick={() => removeTodo(todo.id)}>X</button>
    </div>
    </div>
  )
}

export default Todo