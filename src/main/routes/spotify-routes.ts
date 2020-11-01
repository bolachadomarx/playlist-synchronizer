import { makeGetAccessToken } from './../factories/spotify/get-access-token-factory'
import { makeStoreAccessCode } from './../factories/spotify/store-acces-code-factory'
import { adaptRoute } from './../adapters/express-route-adapter'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/access-code', adaptRoute(makeStoreAccessCode()))
  router.post('/authorization', adaptRoute(makeGetAccessToken()))
}
