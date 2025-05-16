import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      backgroundImage: 'url("/bgMitel.jpg")',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#fff' }}> CE Server Status & Performance</h1>

      <button onClick={() => navigate('/dashboard')} style={buttonStyle}>
        View CPU & Memory Dashboard
      </button>

      <button onClick={() => alert('Kill Identity Processes page coming soon')} style={buttonStyle}>
        Kill Identity Processes
      </button>

      <button onClick={() => alert('Scheduler status page coming soon')} style={buttonStyle}>
      Scheduler status
      </button>

      <button onClick={() => alert('LDAP Logs Check page coming soon')} style={buttonStyle}>
      LDAP Logs Check
      </button>

      <button onClick={() => alert('Check Status of Windows services coming soon')} style={buttonStyle}>
      Check Status of Windows services
      </button>

      <button onClick={() => alert('Check Drive Free Space of all servers coming soon')} style={buttonStyle}>
      Check Drive Free Space of all servers
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '16px',
  borderRadius: '8px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  width: '250px'
};

export default MenuPage;
