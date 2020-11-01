export interface StoreAccessCode {
  store(accessCode: string): Promise<string>
}
