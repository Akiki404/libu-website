import express from 'express'

import { getAlumni, createAlumni, deleteAlumni } from '../controllers/alumni.js'

const router = express.Router()

router.get('/', getAlumni)
router.post('/', createAlumni)
router.delete('/:id', deleteAlumni)


export default router