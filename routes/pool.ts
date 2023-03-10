import { Router } from 'express'
import { supplyAsset, getReserveData } from '../controllers/pool'

const poolRoutes = Router()

poolRoutes.get('/reserve-data', getReserveData)
poolRoutes.post('/supply-asset', supplyAsset)

export default poolRoutes
