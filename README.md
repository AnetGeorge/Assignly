# 📝 Assignly
Task Manager App

A lightweight and user-friendly Task Manager built with **React** (Frontend), **Spring Boot** (Backend), and **PostgreSQL** (Database). This application allows two types of users — **Manager** and **Employee** — to manage tasks efficiently with deadlines and categories.

---

## 🚀 Features

### 👨‍💼 Manager Features:
- Add new tasks with title, category, deadline, and description
- Edit and update existing tasks
- Delete tasks
- View all tasks
- Toggle task completion status

### 👩‍💻 Employee Features:
- View assigned tasks
- Mark tasks as completed (read-only mode except toggle)
- Secure logout


---
## 🛠 Tech Stack

| Layer     | Technology     |
|-----------|----------------|
| Frontend  | React, CSS     |
| Backend   | Spring Boot    |
| Database  | PostgreSQL     |


---

## ⚙️ React Hooks Used

| Hook        | Purpose |
|-------------|---------|
| `useState`  | Manage local component state (task data, form inputs, etc.) |
| `useEffect` | Fetch task data from backend on page load |
| `useNavigate` | Used to redirect after login/logout |
| `useLocation` | To get the current route/location    |






