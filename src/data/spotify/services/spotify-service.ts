import { AuthorizationModel, AccountAccessData } from '@/domain/spotify/models/authorization'
import { GetAccessToken } from '@/domain/spotify/usecases/get-access-token'
import { StoreAccessCode } from '@/domain/spotify/usecases/store-access-code'

export class SpotifyService implements StoreAccessCode, GetAccessToken {
  async store(accessCode: string): Promise<string> {
    return await accessCode
  }

  authorize(authorizationData: AuthorizationModel): Promise<AccountAccessData> {
    return new Promise((resolve) => false)
  }
}
