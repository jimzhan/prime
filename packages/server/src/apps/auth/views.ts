import { Context, Get, HttpResponseOK } from '@foal/core'

export class AuthController {
  @Get('/')
  index(ctx: Context) {
    return new HttpResponseOK('Auth Controller')
  }
}
