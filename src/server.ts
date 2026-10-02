import express from 'express'

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

export { app }

export default app
