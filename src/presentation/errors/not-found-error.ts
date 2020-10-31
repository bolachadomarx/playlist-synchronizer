export class UnauthorizedError extends Error {
  constructor() {
    super(`NotFound`)
    this.name = 'NotFoundError'
  }
}
