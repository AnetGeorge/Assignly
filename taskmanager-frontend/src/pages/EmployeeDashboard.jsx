import React, { useEffect, useState } from 'react';
import { getTasks, updateTask } from '../api';
import TaskList from '../components/TaskList';
const EmployeeDashboard = ({ user, logout }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleComplete = async (task) => {
    await updateTask(task.id, { ...task, completed: true });
    loadTasks();
  };
  return (
  <div className="dashboard-box">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>Welcome, (Employee)</h2>
      <button onClick={logout}>Logout</button>
    </div>
    <TaskList tasks={tasks} onComplete={handleComplete} readOnly />
  </div>
);



  
};

export default EmployeeDashboard;
