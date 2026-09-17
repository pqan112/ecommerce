import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Verification } from './entities/verification.entity.js'
import { Repository } from 'typeorm'
import { PinoLogger } from 'nestjs-pino'
import { UserService } from '@app/user/user.service.js'
import { SessionAuthService } from './session-auth/session-auth.service.js'
import type { Request } from 'express'
import { apiBadRequest } from '@shared/utils/api-i18n.js'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Verification)
    private readonly verificationRepo: Repository<Verification>,
    private readonly logger: PinoLogger,
    private readonly userService: UserService,
    private readonly sessionAuthService: SessionAuthService,
  ) {
    this.logger.setContext(AuthService.name)
  }

  private async sessionFromRequest(req: Request) {
    const result = await this.sessionAuthService.resolveSessionContext(
      req.headers,
    )

    if (!result) return null

    return {
      user: result.user,
      session: {
        token: result.session.token,
        expiresAt: result.session.expiresAt,
      },
    }
  }

  async getCurrentUser(req: Request) {
    const session = await this.sessionFromRequest(req)
    if (!session?.user) {
      return {
        success: false,
        authenticated: false,
        message: 'Not authenticated',
        user: null,
      }
    }

    const user = await this.userService.getUser(session.user.id)
    return {
      success: true,
      authenticated: true,
      user: user ?? session.user,
    }
  }

  async getSession(req: Request) {
    const session = await this.sessionFromRequest(req)
    if (!session?.session) {
      return {
        success: true,
        authenticated: true,
      }
    }

    return {
      success: true,
      authenticated: true,
      session: {
        token: session.session.token,
        expiresAt: session.session.expiresAt,
      },
      user: session.user,
    }
  }

  async checkAuth(req: Request) {
    const session = await this.sessionFromRequest(req)
    if (!session?.user) {
      return {
        authenticated: false,
        user: null,
      }
    }

    return {
      authenticated: true,
      user: session.user,
    }
  }

  async verifyEmailCustom(token: string, email: string) {
    const result = await this.verificationRepo.findOne({
      where: {
        value: token,
      },
    })
    if (!result) {
      this.logger.warn({ msg: 'auth.verify.tokenNotFound', email })
      apiBadRequest('errors.auth.verificationFailed')
    }

    if (result.expiresAt.getTime() < Date.now()) {
      await this.verificationRepo.delete({ id: result.id })
      this.logger.warn({ msg: 'auth.verify.tokenExpired', email })
      apiBadRequest('errors.auth.tokenExpired')
    }

    if (result.identifier.toLowerCase() !== email.toLowerCase().trim()) {
      this.logger.warn({
        msg: 'auth.verify.emailMismatch',
        tokenEmail: result.identifier,
        providedEmail: email,
      })
      apiBadRequest('errors.auth.emailMismatch')
    }

    await Promise.all([
      this.userService.verifyUser(email),
      this.verificationRepo.delete({ id: result.id }),
    ])

    this.logger.info({ msg: 'auth.email.verified', email })

    return {
      success: true,
      message: 'Xác thực email thành công',
    }
  }
}
