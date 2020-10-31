import express from 'express'
import setupRoutes from './config/routes'

const app = express()
setupRoutes(app)
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
