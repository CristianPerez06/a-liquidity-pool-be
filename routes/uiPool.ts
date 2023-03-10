import { Router } from 'express'
import { getBalances, getReservesSummary } from '../controllers/uiPool'

const uiPoolRoutes = Router()

uiPoolRoutes.get('/reserves-summary', getReservesSummary)
uiPoolRoutes.get('/account-balances', getBalances)

export default uiPoolRoutes
