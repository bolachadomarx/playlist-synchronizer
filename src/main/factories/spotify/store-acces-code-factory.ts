import { SpotifyService } from '../../../data/spotify/services/spotify-service'
import { StoreAccessCodeController } from '../../../presentation/controllers/spotify/store-access-code-controller'
import { Controller } from '../../../presentation/protocols'

export const makeStoreAccessCode = (): Controller => {
  const spotifyService = new SpotifyService()
  const storeAccessCodeController = new StoreAccessCodeController(spotifyService)
  return storeAccessCodeController
}
