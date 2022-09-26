import React, { useEffect, useState } from 'react'
import "./Todos.css"
import { Add_Todo } from "../../redux/action/actionCreators"
import { useDispatch } from "react-redux";

export default function Todos() {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('')

  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([...todos, message])
    setMessage("")
  }

  useEffect(() => {
    dispatch(Add_Todo(todos))
  }, [todos, dispatch])

  return (
    <div className='main-todo'>
      <h1>Add Todo</h1>
      <div className='add-todo'>
        <input
          className='inpt'
          type="text"
          placeholder='enter message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='btn' onClick={addTodo} >Add</button>
      </div>
    </div>
  )
}
