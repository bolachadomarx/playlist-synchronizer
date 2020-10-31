import { bodyParser } from './../middlewares/body-parser'
import { cors } from './../middlewares/cors'
import { Express } from 'express'

export default (app: Express): void => {
  app.use(cors)
  app.use(bodyParser)
}
