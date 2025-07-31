import React, { useState } from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onUpdate, onDelete, readOnly, onComplete }) => {
  const [showDescId, setShowDescId] = useState(null);

  if (!tasks.length) return <p className="no-tasks">No tasks found.</p>;

  const toggleDescription = (id) => {
    setShowDescId(prev => (prev === id ? null : id));
  };

  return (
    <div className="task-list">
      <h3>All Tasks</h3>
      {tasks.map(task => (
        <div className={`task-card ${task.completed ? 'completed' : ''}`} key={task.id}>
          <h4>{task.title}</h4>
          <p><strong>Category:</strong> {task.category}</p>
          <p><strong>Deadline:</strong> {task.deadline || 'N/A'}</p>
          <p><strong>Status:</strong> {task.completed ? 'Completed ✅' : 'Pending ⏳'}</p>

          <button onClick={() => toggleDescription(task.id)} style={{ marginBottom: '10px' }}>
            {showDescId === task.id ? 'Hide Description' : 'View Description'}
          </button>

          {showDescId === task.id && (
            <p style={{ background: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
              <strong>Description:</strong> {task.description || 'No description'}
            </p>
          )}

          <div className="task-buttons">
            {!readOnly && (
              <>
                <button onClick={() => onUpdate(task)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
              </>
            )}
            {readOnly && !task.completed && onComplete && (
              <button onClick={() => onComplete(task)}>Mark as Done</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

