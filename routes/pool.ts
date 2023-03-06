import { Router } from 'express'
import { depositAsset, getReserveData } from '../controllers/pool'

const poolRoutes = Router()

poolRoutes.get('/reserve-data', getReserveData)
poolRoutes.post('/deposit-asset', depositAsset)

export default poolRoutes
