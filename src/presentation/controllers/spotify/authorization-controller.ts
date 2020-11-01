import { AuthorizationModel } from '@/domain/spotify/models/authorization'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { GetAccessToken } from '@/domain/spotify/usecases/get-access-token'
import { serverError, success } from '@/presentation/helpers/http-helper'

export class GetAccessTokenController implements Controller {
  constructor(private readonly getAccessToken: GetAccessToken) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const authorization: AuthorizationModel = httpRequest.body
      const accessAccountData = this.getAccessToken.authorize(authorization)
      return success(accessAccountData)
    } catch (error) {
      return serverError(error)
    }
  }
}
