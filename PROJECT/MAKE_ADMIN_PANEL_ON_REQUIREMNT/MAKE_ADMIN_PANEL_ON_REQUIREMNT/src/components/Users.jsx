import React, { useState } from 'react'

const SAMPLE_USERS = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'editor' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'admin' }
]

export default function Users() {
  const [users, setUsers] = useState(SAMPLE_USERS)
  const remove = (id) => setUsers(users.filter(u => u.id !== id))

  const containerStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
  }

  const headingStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#1a202c',
  }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  }

  const thStyle = {
    textAlign: 'left',
    paddingBottom: '10px',
    borderBottom: '2px solid #e5e7eb',
    color: '#374151',
  }

  const tdStyle = {
    padding: '10px 0',
    borderBottom: '1px solid #e5e7eb',
    color: '#333',
    fontSize: '14px',
  }

  const delBtn = {
    padding: '6px 10px',
    backgroundColor: '#5A9690',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  }

  const delHover = (e) => {
    e.target.style.backgroundColor = '#A3485A'
  }

  const delLeave = (e) => {
    e.target.style.backgroundColor = '#9B5DE0'
  }

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Users</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td style={tdStyle}>{u.id}</td>
              <td style={tdStyle}>{u.name}</td>
              <td style={tdStyle}>{u.email}</td>
              <td style={tdStyle}>{u.role}</td>
              <td style={tdStyle}>
                <button
                  onClick={() => remove(u.id)}
                  style={delBtn}
                  onMouseEnter={delHover}
                  onMouseLeave={delLeave}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
