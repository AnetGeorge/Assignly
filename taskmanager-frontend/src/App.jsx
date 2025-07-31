
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import ManagerDashboard from './pages/ManagerDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function LayoutWrapper({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {isLoginPage && <Header />}
      <main className={isLoginPage ? 'main-content' : 'dashboard-content'}>
        {children}
      </main>
      {isLoginPage && <Footer />}
    </>
  );
}
function App() {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    window.location.href = '/'; 
  };

  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/manager" element={<ManagerDashboard user={user} logout={logout} />} />
          <Route path="/employee" element={<EmployeeDashboard user={user} logout={logout} />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}



export default App;
