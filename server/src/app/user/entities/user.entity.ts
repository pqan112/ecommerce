import { Column, DeleteDateColumn, Entity } from 'typeorm'
import { BaseEntity } from '../../../config/database/base.entity.js'
import { UserRole } from '../../../shared/types/user-role.enum.js'
import { Gender } from '../../../shared/types/gender.enum.js'

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'text' })
  name: string

  @Column({ type: 'text', unique: true })
  email: string

  @Column({ type: 'boolean', default: false })
  emailVerified: boolean

  @Column({ type: 'text', nullable: true })
  image: string | null

  @Column({ type: 'enum', enum: UserRole, default: UserRole.CUSTOMER })
  role: UserRole

  @Column({ type: 'text', nullable: true })
  phone: string | null

  @Column({ type: 'date', nullable: true })
  birthday: Date | null

  @Column({ type: 'enum', enum: Gender, nullable: true })
  gender: Gender | null

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt: Date | null
}
