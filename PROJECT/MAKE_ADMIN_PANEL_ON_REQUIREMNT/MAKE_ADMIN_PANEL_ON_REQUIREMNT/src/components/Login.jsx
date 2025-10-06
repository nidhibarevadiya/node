import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState('password')
  const [err, setErr] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (email && password) {
      localStorage.setItem('admin_token', 'demo-token')
      localStorage.setItem('admin_role', 'admin')
      window.location.href = '/admin'
    } else {
      setErr('Provide email and password')
    }
  }

  const pageStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    background: 'linear-gradient(135deg, #e3f2fd, #f8fafc)',
  }

  const formStyle = {
    width: '100%',
    maxWidth: '380px',
    background: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
  }

  const headingStyle = {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#1a202c',
    textAlign: 'center',
  }

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    color: '#333',
    fontSize: '14px',
    fontWeight: '500',
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
    outline: 'none',
  }

  const btnStyle = {
    width: '100%',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    padding: '10px 0',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  }

  const errStyle = {
    color: '#A3485A',
    marginBottom: '10px',
    textAlign: 'center',
  }

  return (
    <div style={pageStyle}>
      <form onSubmit={submit} style={formStyle}>
        <h2 style={headingStyle}>Admin Login</h2>
        {err && <div style={errStyle}>{err}</div>}

        <label style={labelStyle}>Email</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={inputStyle}
          type="email"
          placeholder="Enter email"
        />

        <label style={labelStyle}>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={inputStyle}
          placeholder="Enter password"
        />

        <button style={btnStyle}>Login</button>
      </form>
    </div>
  )
}
