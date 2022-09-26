import React from 'react'
import "./TodosList.css"
import { useSelector } from "react-redux";

function TodosList() {

  const todosList = useSelector((state) => state.todos);

  return (
    <table>
      <tbody>
        
        {todosList.length > 0 ? <tr>
          <th><h2>Name</h2></th>
          <th><h2 className='action-text'>Action</h2></th>
        </tr> : null}


        {todosList?.map((name, index) => {
          return (
            <tr key={index}>
              <td>{name}</td>
              <td><button className='delete-btn'>delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TodosList