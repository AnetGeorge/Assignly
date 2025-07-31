import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/tasks";

// Get all tasks
export const getTasks = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// Add new task
export const addTask = async (task) => {
  const response = await axios.post(API_BASE_URL, task);
  return response.data;
};

// Update task by ID
export const updateTask = async (id, updatedTask) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedTask);
  return response.data;
};

// Delete task by ID
export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
