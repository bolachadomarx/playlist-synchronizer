import { AuthorizationModel } from '@/domain/spotify/models/authorization'
import { GetAccessToken } from '@/domain/spotify/usecases/get-access-token'
import { StoreAccessCode } from '@/domain/spotify/usecases/store-access-code'
import axios from 'axios'
import qs from 'qs'
export class SpotifyService implements StoreAccessCode, GetAccessToken {
  spotifyApi = 'https://accounts.spotify.com/api'

  async store(accessCode: string): Promise<string> {
    return await accessCode
  }

  async authorize(authorizationData: AuthorizationModel): Promise<any> {
    const { grant_type, redirect_uri, code, basic } = authorizationData
    const body = { grant_type, redirect_uri, code }
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: basic,
      },
    }
    const response = await axios.post(`${this.spotifyApi}/token`, qs.stringify(body), config)
    const accountAccess = response.data
    return accountAccess
  }
}
