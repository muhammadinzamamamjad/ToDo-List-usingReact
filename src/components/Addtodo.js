import React from 'react'
import { useState } from 'react';
export default function Addtodo({AddHandle,SetView}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newTodo = {
          title,
          description,
        };
        setTitle('');
        setDescription('');
        AddHandle(newTodo);
        SetView('home');

      };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="card-body">
          <h2 className="card-title text-center">Add New To-Do</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{ maxWidth: '100%' }} // Adjust input width
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                style={{ maxWidth: '100%' }} // Adjust textarea width
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Add Todo</button>
          </form>
        </div>
      </div>
    </div>
  )
}
