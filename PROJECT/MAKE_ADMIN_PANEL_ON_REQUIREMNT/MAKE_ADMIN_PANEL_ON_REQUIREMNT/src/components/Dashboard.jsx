import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Routes, Route, Link } from 'react-router-dom'
import Users from './Users'
import Products from './Products'

export default function Dashboard() {
  const container = {
    display: 'flex',
  };

  const mainArea = {
    flex: 1,
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '20px',
  };

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginBottom: '24px',
  };

  const card = {
    background: '#fff',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    textAlign: 'center',
  };

  const number = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1a202c',
  };

  const box = {
    background: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  const title = {
    fontWeight: '600',
    marginBottom: '12px',
    fontSize: '18px',
  };

  const linkContainer = {
    display: 'flex',
    gap: '12px',
  };

  const linkStyle = {
    background: '#e2e8f0',
    padding: '8px 14px',
    borderRadius: '6px',
    textDecoration: 'none',
    color: '#1a202c',
    fontWeight: '500',
  };

  return (
    <div style={container}>
      <Sidebar />
      <div style={mainArea}>
        <Header title="Dashboard" />
        <main>
          <Routes>
            <Route index element={(
              <div>
                <div style={grid}>
                  <div style={card}>
                    Total Users<br/>
                    <span style={number}>1,234</span>
                  </div>
                  <div style={card}>
                    Products<br/>
                    <span style={number}>329</span>
                  </div>
                  <div style={card}>
                    Revenue<br/>
                    <span style={number}>₹1.2L</span>
                  </div>
                </div>

                <div style={box}>
                  <h3 style={title}>Quick Links</h3>
                  <div style={linkContainer}>
                    <Link to="users" style={linkStyle}>Manage Users</Link>
                    <Link to="products" style={linkStyle}>Manage Products</Link>
                  </div>
                </div>
              </div>
            )} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
