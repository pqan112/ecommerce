import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from '../../../config/database/base.entity.js'
import { User } from '../../user/entities/user.entity.js'

@Entity()
export class Session extends BaseEntity {
  @Index()
  @Column({ type: 'uuid' })
  userId: string
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column({ type: 'text', unique: true })
  token: string

  @Index()
  @Column({ type: 'timestamptz' })
  expiresAt: Date

  @Column({ type: 'text', nullable: true })
  ipAddress: string | null

  @Column({ type: 'text', nullable: true })
  userAgent: string | null
}
