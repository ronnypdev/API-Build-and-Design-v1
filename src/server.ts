import express from 'express'
import authRoutes from './routes/authRoutes.ts'
import userRoutes from './routes/userRoutes.ts'
import habitRoutes from './routes/habitRoutes.ts'

// Create Express application
const app = express()

// Health check endpoint - always good to have!
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    oder: '$88.1',
    timestamp: new Date().toISOString(),
    service: 'Habit Tracket API',
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/habits', habitRoutes)

export { app }

export default app
