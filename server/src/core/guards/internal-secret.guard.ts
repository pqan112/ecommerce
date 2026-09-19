import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { apiUnauthorized } from '@shared/utils/api-i18n.js'
import { verifyInternalSecret } from '@shared/utils/internal-secret.util.js'
import { Request } from 'express'

@Injectable()
export class internalSecretGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>()
    const raw = req.headers?.['x-internal-secret']
    const provided = Array.isArray(raw) ? raw[0] : raw
    const expected = this.configService.get<string>('INTERNAL_API_SECRET')

    if (!verifyInternalSecret(provided, expected)) {
      apiUnauthorized('errors.auth.invalidInternalSecret')
    }

    return true
  }
}
