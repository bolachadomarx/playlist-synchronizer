import { Controller, HttpRequest, HttpResponse } from '../../../presentation/protocols'
import { GetAccessToken } from '../../../domain/spotify/usecases/get-access-token'
import { serverError, success } from '../../../presentation/helpers/http-helper'

export class GetAccessTokenController implements Controller {
  constructor(private readonly getAccessToken: GetAccessToken) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { grant_type, redirect_uri, code } = httpRequest.body
      const basic = httpRequest.headers.authorization

      const authorization = { grant_type, redirect_uri, code, basic }

      const accessAccountData = await this.getAccessToken.authorize(authorization)
      return success(accessAccountData)
    } catch (error) {
      return serverError(error)
    }
  }
}
