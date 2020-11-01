import { makeAuthorization } from './../factories/spotify/authorization-factory'
import { adaptRoute } from './../adapters/express-route-adapter'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/access-code', adaptRoute(makeAuthorization()))
}
