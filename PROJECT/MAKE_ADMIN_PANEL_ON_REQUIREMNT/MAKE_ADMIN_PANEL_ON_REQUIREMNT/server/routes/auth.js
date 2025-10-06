const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Register (for testing) - create admin or editor
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body
    if (!email || !password) return res.status(400).json({ msg: 'Missing fields' })
    const existing = await User.findOne({ email })
    if (existing) return res.status(400).json({ msg: 'User exists' })
    const hashed = await bcrypt.hash(password, 10)
    const user = new User({ name, email, password: hashed, role: role || 'editor' })
    await user.save()
    res.json({ msg: 'User created' })
  } catch (err) { res.status(500).json({ err: err.message }) }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' })
    const ok = await bcrypt.compare(password, user.password)
    if (!ok) return res.status(400).json({ msg: 'Invalid credentials' })
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' })
    res.json({ token, role: user.role })
  } catch (err) { res.status(500).json({ err: err.message }) }
})

module.exports = router
