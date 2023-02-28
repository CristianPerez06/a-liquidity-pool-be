import { Router } from 'express'
import { getReservesSummary, getReserveData } from '../controllers/reserve'

const reserveRoutes = Router()

reserveRoutes.get('/reserves', getReservesSummary)
reserveRoutes.get('/reserve-data', getReserveData)

export default reserveRoutes
