import { Router } from 'express'

import { getExample } from '../controllers/base'

const baseRoutes = Router()

baseRoutes.get('/get-example', getExample)

export default baseRoutes
