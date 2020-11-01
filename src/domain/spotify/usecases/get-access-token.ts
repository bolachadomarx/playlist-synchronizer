import { AccountAccessData, AuthorizationModel } from '../models/authorization'

export interface GetAccessToken {
  authorize(authorizationData: AuthorizationModel): Promise<AccountAccessData>
}
