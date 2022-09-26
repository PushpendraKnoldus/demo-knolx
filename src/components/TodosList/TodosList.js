import React from 'react'
import "./TodosList.css"

function TodosList() {

  const data = ["Adding new todo", "Umang", "Saurabh"]

  return (
      <table>
        <tbody>
          <tr>
            <th><h2>Name</h2></th>
            <th><h2 className='action-text'>Action</h2></th>
          </tr>

          {data.map((name, index) => {
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