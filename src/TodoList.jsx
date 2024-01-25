// TodoList.js
import React, { useState } from 'react';

const Todo = ({ todo, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [editedStatus, setEditedStatus] = useState(todo.status);

  const handleEdit = () => {
    onEdit(todo, { name: editedName, description: editedDescription, status: editedStatus });
    setIsEditing(false);
  };

  return (
    <div className="card" style={{backgroundColor:'yellow'}}>
      <div className="card-body">
        {isEditing ? (
          <>
            <input type="text" className="form-control mb-2" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
            <textarea className="form-control mb-2" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
            <div className="d-flex mb-2">
              <label className="me-2">Status:</label>
              <select className="form-select" value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)}>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
              </select>
            </div>
            <button className="btn btn-success me-2" onClick={handleEdit}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <h5 className="card-title">Todo Name:{todo.name}</h5>
            <p className="card-text"><strong>Todo Description:</strong>{todo.description}</p>
            <div className="mb-2">
              <strong>Status:</strong> {todo.status}
            </div>
            <button className="btn btn-primary me-2" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => onDelete(todo)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const TodoList = ({ todos, onEdit, onDelete, filterStatus }) => {
  const filteredTodos =
    filterStatus === 'all' ? todos : todos.filter((todo) => todo.status.toLowerCase() === filterStatus);

  return (
    <div className="container mt-3">
      <div className="row">
        {filteredTodos.map((todo, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Todo todo={todo} onEdit={onEdit} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
