export interface AuthorizationModel {
  grant_type: string
  code: string
  redirect_uri: string
  basic: string
}

export interface AccountAccessData {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  scope: string
}
