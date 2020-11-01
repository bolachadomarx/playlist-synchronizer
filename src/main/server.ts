import express from 'express'
import setupRoutes from './config/routes'
import puppeteer from 'puppeteer'
import setupMiddlewares from './config/middlewares'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()
setupMiddlewares(app)
setupRoutes(app)

const url =
  'https://accounts.spotify.com/authorize?client_id=a8077a32a1e64f60b0fef4af050b3d87&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Faccess-code&scope=user-read-private%20user-read-email'

app.listen(3000, async () => {
  console.log('Server running n http://localhost:3000')
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url)
})
