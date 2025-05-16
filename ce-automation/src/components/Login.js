import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '120vh',
      fontFamily: 'Arial, sans-serif',
      backgroundImage: 'url("/bgMitel.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: '#fff'
    }}>
      <h2 style={{ textAlign: 'center' }}>Welcome to CE Maintenance Dashboard</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '300px',
        backgroundColor: 'White',
        padding: '20px',
        borderRadius: '30px'
      }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          style={{ padding: '8px', borderRadius: '3px', border: 'solid' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ padding: '8px', borderRadius: '3px', border: 'solid' }}
        />
        <button type="submit" style={{
          padding: '8px',
          cursor: 'pointer',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#00bcd4',
          color: '#fff',
          fontWeight: 'bold'
        }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
