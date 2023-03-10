import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import baseRoutes from './routes/base'
import poolRoutes from './routes/pool'
import uiPoolRoutes from './routes/uiPool'
import depositRoutes from './routes/deposit'

import { addProviderToRequest } from './middlewares/provider'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// add middleware
app.use('/api/', addProviderToRequest)

// add routes
app.use('/api/', baseRoutes)
app.use('/api/', poolRoutes)
app.use('/api/', uiPoolRoutes)
app.use('/api/', depositRoutes)

const port = process.env.PORT || 4400
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
})
server.on('error', console.error)
