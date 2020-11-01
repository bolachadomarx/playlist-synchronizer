import { AccountAccessData } from '../models/authorization'

export interface Authorization {
  authorize(accessCode: string): Promise<AccountAccessData>
}
