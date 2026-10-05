import { env, isDev, isTestEnv } from '../env.ts'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import authRoutes from './routes/authRoutes.ts'
import habitRoutes from './routes/habitRoutes.ts'
import userRoutes from './routes/userRoutes.ts'
import morgan from 'morgan'

// Create Express application
const app = express()
app.use(helmet())
app.use(cors())
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  morgan('dev', {
    skip: () => isTestEnv(),
  }),
)

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
