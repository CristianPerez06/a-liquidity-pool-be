import { Router } from 'express'
import { getBalances } from '../controllers/user'

const userRoutes = Router()

userRoutes.get('/user-balances', getBalances)

export default userRoutes
