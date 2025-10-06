import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export default function App() {
  const isAuthenticated = !!localStorage.getItem('admin_token')
  return (
    <div className="min-h-screen body-bg">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </div>
  )
}
