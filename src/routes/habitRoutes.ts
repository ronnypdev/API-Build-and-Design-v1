import { Router } from 'express'
import { validateBody } from '../middleware/validation.ts'
import { z } from 'zod'
import { authenticateToken } from '../middleware/auth.ts'
import {
  createHabit,
  getUserHabits,
  updateHabit,
} from '../controllers/habitController.ts'
const createHabitSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  frequency: z.string(),
  targetCount: z.number(),
  tagIds: z.array(z.string()).optional(),
})

const updateHabitSchema = z.object({
  name: z.string().max(3),
})

const router = Router()

router.use(authenticateToken)

router.get('/', getUserHabits)
router.patch('/:id', updateHabit)

router.get('/:id', (req, res) => {
  res.json({ message: 'got one habbit' })
})

router.post('/', validateBody(createHabitSchema), createHabit)

router.delete('/:id', (req, res) => {
  res.json({ message: 'deleted habbit' })
})

router.post('/:id/complete', (req, res) => {
  res.json({ message: 'deleted habbit' })
})

export default router
