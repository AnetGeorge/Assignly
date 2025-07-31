
import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const categories = ['Work', 'Personal', 'Urgent'];

const TaskForm = ({ onSubmit, currentTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Work',
    deadline: '',
    completed: false,
  });

  useEffect(() => {
    if (currentTask) {
      setFormData(currentTask);
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return alert('Title is required!');
    onSubmit(formData);
    setFormData({
      title: '',
      description: '',
      category: 'Work',
      deadline: '',
      completed: false,
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h3>{currentTask ? 'Edit Task' : 'Add New Task'}</h3>

      <input
        type="text"
        name="title"
        placeholder="Enter Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
<textarea
        name="description"
        placeholder="Enter Description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>



      <select name="category" value={formData.category} onChange={handleChange}>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
      />
      <div className="checkbox-container">
  <input
    type="checkbox"
    name="completed"
    checked={formData.completed}
    onChange={handleChange}
  />
  <label htmlFor="completed">Completed</label>
</div>


      

      <button type="submit">
        {currentTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
