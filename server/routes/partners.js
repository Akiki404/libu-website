import express from 'express'

import { getPartners, createPartner, deletePartner } from '../controllers/partners.js'

const router = express.Router()

router.get('/', getPartners)
router.post('/', createPartner)
router.delete('/:id', deletePartner)

export default router