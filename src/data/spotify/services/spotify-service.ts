import { AccountAccessData, AuthorizationModel } from './../../../domain/spotify/models/authorization'
import { Authorization } from './../../../domain/spotify/usecases/authorization'
import axios from 'axios'
import qs from 'qs'
export class SpotifyService implements Authorization {
  spotifyApi = 'https://accounts.spotify.com/api'

  async authorize(accessCode: string): Promise<AccountAccessData> {
    const authorizationData: AuthorizationModel = {
      grant_type: 'authorization_code',
      code: accessCode,
      redirect_uri: `${process.env.REDIRECT_URI}`,
      basic: `Basic ${process.env.APP_BASIC}`,
    }
    const accessAccount = await this.getAccessToken(authorizationData)
    return accessAccount
  }

  async getAccessToken(authorizationData: AuthorizationModel): Promise<AccountAccessData> {
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
