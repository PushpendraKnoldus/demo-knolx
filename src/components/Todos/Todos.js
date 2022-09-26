import React from 'react'
// import TodosList from '../TodosList/TodosList'
import "./Todos.css"

export default function Todos() {
  return (
    <div className='main-todo'>
        <h1>Add Todo</h1>
        <div className='add-todo'>
          <input className='inpt' type="text" placeholder='enter message' />
          <button className='btn' >Add</button>
        </div>

        {/* <TodosList /> */}

    </div>
  )
}
