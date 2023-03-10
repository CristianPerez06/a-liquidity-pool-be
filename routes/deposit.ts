import { Router } from 'express'
import { getLatestDeposits } from '../controllers/deposit'

const poolRoutes = Router()

poolRoutes.get('/latest-deposits', getLatestDeposits)

export default poolRoutes
