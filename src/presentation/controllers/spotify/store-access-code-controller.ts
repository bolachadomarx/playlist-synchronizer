import { StoreAccessCode } from '@/domain/spotify/usecases/store-access-code'
import { success, serverError } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class StoreAccessCodeController implements Controller {
  constructor(private storeAccessCode: StoreAccessCode) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const code = httpRequest.query.code
      const accessCode = await this.storeAccessCode.store(code)

      return success({ accessCode: accessCode })
    } catch (error) {
      return serverError(error)
    }
  }
}
