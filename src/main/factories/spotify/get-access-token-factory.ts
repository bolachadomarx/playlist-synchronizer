import { GetAccessTokenController } from './../../../presentation/controllers/spotify/authorization-controller'
import { SpotifyService } from './../../../data/spotify/services/spotify-service'
import { Controller } from './../../../presentation/protocols'

export const makeGetAccessToken = (): Controller => {
  const spotifyService = new SpotifyService()
  const getAccessTokenController = new GetAccessTokenController(spotifyService)
  return getAccessTokenController
}
