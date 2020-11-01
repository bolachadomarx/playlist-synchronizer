import { Authorization } from './../../../domain/spotify/usecases/authorization'
import { success, serverError } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class AuthorizationController implements Controller {
  constructor(private authorization: Authorization) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const code = httpRequest.query.code
      const accountAccess = await this.authorization.authorize(code)

      return success(accountAccess)
    } catch (error) {
      return serverError(error)
    }
  }
}
