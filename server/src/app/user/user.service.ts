import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity.js'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async verifyUser(email: string) {
    const user = await this.userRepo.findOne({ where: { email } })
    if (!user) {
      throw new NotFoundException('Không tìm thấy người dùng')
    }

    return this.userRepo.update({ id: user.id }, { emailVerified: true })
  }

  async getUser(id: string) {
    return this.userRepo.findOne({ where: { id } })
  }
}
