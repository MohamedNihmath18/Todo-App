// TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ onAddTodo, onFilterChange }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const handleAddTodo = () => {
    const newTodo = {
      name,
      description,
      status: 'Not completed',
    };

    onAddTodo(newTodo);

    setName('');
    setDescription('');
  };

  const handleStatusChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedStatus(selectedValue);
    onFilterChange(selectedValue);
  };

  return (
    <>
          <style>{ `
        body {
          background-color: #080808 /* Set the desired background color for the entire webpage */
          
        }
      `}</style>

    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <div className="flex-grow-1 me-2">
          <label className="form-label">
            <input type="text" className="form-control" placeholder="Todo Name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div className="flex-grow-1 me-2">
          <label className="form-label">
            <input type="text" className="form-control" placeholder="Todo Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
        </div>
        <div>
          <button className="btn" style={{backgroundColor:'#ff004f'}} onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-between mb-3 mt-5" style={{color:'#ff004f'}}>
        <h2>My Todos</h2>
        <div className="d-flex align-items-center">
          <label className="me-2"><strong>Status:</strong></label>
          <select className="form-select" value={selectedStatus} onChange={handleStatusChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
        </div>
      </div>
    </div>
    </>
  );
};

export default TodoForm;
