import { Router } from 'express'
import { validateBody } from '../middleware/validation.ts'
import { z } from 'zod'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'habits' })
})

router.get('/:id', (req, res) => {
  res.json({ message: 'got one habbit' })
})

router.post('/', (req, res) => {
  res.json({ message: 'created habbit' })
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'deleted habbit' })
})

router.post('/:id/complete', (req, res) => {
  res.json({ message: 'deleted habbit' })
})

export default router
