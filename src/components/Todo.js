import React from 'react';
import '../index.css';

export default function Todo({ todo,handleDelete }) {
  return (
    <div className="todo-container">
    <h1 className="todo-title">{todo.title}</h1>
    <p className="todo-description">{todo.description}</p>
    <button className='btn btn-danger' onClick={()=>
        handleDelete(todo)
    }>Delete</button>
  </div>
  );
}
