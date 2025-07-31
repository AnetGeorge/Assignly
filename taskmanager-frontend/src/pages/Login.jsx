// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('manager');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 
  const credentials = {
    manager: { email: 'manager@example.com', password: 'manager123' },
    employee: { email: 'employee@example.com', password: 'employee123' },
  };

  const handleLogin = () => {
    const valid = credentials[role];

    if (!email.trim() || !password.trim()) {
      return alert('Email and Password are required');
    }

    if (email === valid.email && password === valid.password) {
      const user = { name: email.split('@')[0], role };
      setUser(user);
      navigate(role === 'manager' ? '/manager' : '/employee');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="manager">Manager</option>
          <option value="employee">Employee</option>
        </select>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
