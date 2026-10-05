import { Router } from 'express'

const router = Router()

router.post('/register', (req, res) => {
  res.status(201).json({ message: 'user sign up' })
})

router.post('/login', (req, res) => {
  res.status(201).json({ message: 'user loggedin' })
})

export default router
