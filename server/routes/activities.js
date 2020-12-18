import express from 'express'

import { getActivities, createActivity, deleteActivity} from '../controllers/activities.js'

const router = express.Router()

router.get('/', getActivities)
router.post('/', createActivity)
router.delete('/:id', deleteActivity)


export default router