import React from 'react'

export default function Header({ title }) {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    borderRadius: '6px',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1a202c',
  };

  const adminText = {
    fontSize: '14px',
    color: '#4a5568',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <div style={adminText}>Welcome, Admin</div>
    </header>
  )
}
