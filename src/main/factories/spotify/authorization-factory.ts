import { SpotifyService } from '../../../data/spotify/services/spotify-service'
import { AuthorizationController } from '../../../presentation/controllers/spotify/authorization-controller'
import { Controller } from '../../../presentation/protocols'

export const makeAuthorization = (): Controller => {
  const spotifyService = new SpotifyService()
  const authorizationController = new AuthorizationController(spotifyService)
  return authorizationController
}
