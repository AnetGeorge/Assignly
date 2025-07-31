import React, { useState, useEffect } from 'react';
import API from './api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', category: '', deadline: '' });

  // Fetch all tasks
  const fetchTasks = () => {
    API.get('/')
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add a new task
  const addTask = () => {
    if (!newTask.title || !newTask.deadline) return;
    API.post('/', { ...newTask, completed: false })
      .then(() => {
        setNewTask({ title: '', category: '', deadline: '' });
        fetchTasks();
      });
  };

  // Mark task as completed
  const toggleComplete = (task) => {
    API.put(`/${task.id}`, { ...task, completed: !task.completed })
      .then(() => fetchTasks());
  };

  // Delete a task
  const deleteTask = (id) => {
    API.delete(`/${id}`).then(() => fetchTasks());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={newTask.category}
        onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
      />
      <input
        type="date"
        value={newTask.deadline}
        onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                marginRight: '10px',
              }}
            >
              {task.title} - {task.category} - {task.deadline}
            </span>
            <button onClick={() => toggleComplete(task)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
