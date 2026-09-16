import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Session } from '../entities/session.entity.js'
import { Repository } from 'typeorm'
import { extractSessionTokenFromHeaders } from '@shared/utils/request-sesion.util.js'

@Injectable()
export class SessionAuthService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepo: Repository<Session>,
  ) {}

  async resolveSessionContext(
    headers: Record<string, string | string[] | undefined>,
  ) {
    const token = extractSessionTokenFromHeaders(headers)
    if (!token) return null

    const result = await this.sessionRepo.findOne({
      where: { token },
      relations: {
        user: true,
      },
    })

    if (result && result.expiresAt > new Date() && result.user) {
      return {
        session: {
          id: result.id,
          token: result.token,
          expiresAt: result.expiresAt,
        },
        user: result.user,
      }
    }
    return null
  }

  async resolveAuthenticatedUser(
    headers: Record<string, string | string[] | undefined>,
  ) {
    const result = await this.resolveSessionContext(headers)
    return result?.user ?? null
  }
}
