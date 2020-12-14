import express from 'express'

import { getAlumni, createAlumni } from '../controllers/alumni.js'

const router = express.Router()

router.get('/', getAlumni)
router.post('/', createAlumni)

export default router