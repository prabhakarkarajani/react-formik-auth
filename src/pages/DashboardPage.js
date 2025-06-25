import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome to Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
