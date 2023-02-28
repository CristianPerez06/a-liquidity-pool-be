import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import baseRoutes from './routes/base'
import reserveRoutes from './routes/reserve'
import userRoutes from './routes/user'

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
app.use('/api/', reserveRoutes)
app.use('/api/', userRoutes)

const port = process.env.PORT || 4400
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
})
server.on('error', console.error)
