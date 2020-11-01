import { json, urlencoded } from 'express'

export const jsonBody = json()
export const urlEncodedBody = urlencoded({ extended: true })
