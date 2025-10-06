import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const sidebarStyle = {
    width: '240px',
    backgroundColor: '#ffffff',
    height: '100vh',
    boxShadow: '2px 0 6px rgba(0,0,0,0.1)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  }

  const headingStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '30px',
    color: '#1a202c',
  }

  const linkContainer = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }

  const linkStyle = {
    padding: '10px 12px',
    borderRadius: '6px',
    color: '#1a202c',
    textDecoration: 'none',
    transition: 'background 0.2s',
  }

  const linkHover = (e) => {
    e.target.style.backgroundColor = '#f3f4f6'
  }

  const linkLeave = (e) => {
    e.target.style.backgroundColor = 'transparent'
  }

  const logoutBtn = {
    marginTop: '20px',
    padding: '10px 12px',
    backgroundColor: '#5A9690',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  }

  const logoutHover = (e) => {
    e.target.style.backgroundColor = '#b91c1c'
  }

  const logoutLeave = (e) => {
    e.target.style.backgroundColor = '#73C8D2'
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    window.location.href = '/login'
  }

  return (
    <aside style={sidebarStyle}>
      <h2 style={headingStyle}>Admin Panel</h2>
      <nav style={linkContainer}>
        <Link to="/admin" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Dashboard</Link>
        <Link to="/admin/users" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Users</Link>
        <Link to="/admin/products" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Products</Link>
        <button
          onClick={handleLogout}
          style={logoutBtn}
          onMouseEnter={logoutHover}
          onMouseLeave={logoutLeave}
        >
          Logout
        </button>
      </nav>
    </aside>
  )
}
