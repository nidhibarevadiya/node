const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/adminpanel'
mongoose.connect(MONGODB_URI).then(() => console.log('MongoDB connected')).catch(err => console.error(err))

// Models
const User = require('./models/User')

// Routes
const authRouter = require('./routes/auth')
const adminRouter = require('./routes/admin')
app.use('/api/auth', authRouter)
app.use('/api/admin', adminRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('Server running on port', PORT))
