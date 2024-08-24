import React from 'react'
import Todo from './Todo'
export default function Todos({todos,handleClick}) {
  return (
    <div>
      {todos.map((todo)=>{
       return <Todo key={todo.id} todo={todo} handleDelete={handleClick}/>
      })}
    </div>
  )
}
