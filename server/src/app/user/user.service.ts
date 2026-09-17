import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity.js'
import { Repository } from 'typeorm'
import { apiNotFound } from '@shared/utils/api-i18n.js'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async verifyUser(email: string) {
    const user = await this.userRepo.findOne({ where: { email } })
    if (!user) {
      apiNotFound('errors.common.userNotFound')
    }

    return this.userRepo.update({ id: user.id }, { emailVerified: true })
  }

  async getUser(id: string) {
    return this.userRepo.findOne({ where: { id } })
  }
}
