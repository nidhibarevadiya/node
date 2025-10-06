const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')

// Middleware: verify token and role
function auth(req, res, next) {
  const header = req.headers.authorization
  if (!header) return res.status(401).json({ msg: 'No token' })
  const token = header.split(' ')[1]
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || 'secret')
    req.user = data
    next()
  } catch (err) { return res.status(401).json({ msg: 'Invalid token' }) }
}

function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ msg: 'No user' })
    if (req.user.role !== role) return res.status(403).json({ msg: 'Forbidden - requires ' + role })
    next()
  }
}

// Protected route example - only admin can see
router.get('/users', auth, requireRole('admin'), async (req, res) => {
  const users = await User.find().select('-password')
  res.json(users)
})

module.exports = router
