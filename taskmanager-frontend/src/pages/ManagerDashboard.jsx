import React, { useEffect, useState } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from '../api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
const ManagerDashboard = ({ user, logout }) => {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSubmit = async (task) => {
    if (editing) {
      await updateTask(editing.id, task);
    } else {
      await addTask(task);
    }
    setEditing(null);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };
  



  return (
  <div className="dashboard-box">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>Welcome, (Manager)</h2>
      <button onClick={logout}>Logout</button>
    </div>
    <TaskForm onSubmit={handleSubmit} currentTask={editing} />
    <TaskList tasks={tasks} onUpdate={setEditing} onDelete={handleDelete} />
  </div>
);


  
};

export default ManagerDashboard;
