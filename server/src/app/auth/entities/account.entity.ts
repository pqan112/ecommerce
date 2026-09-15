import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from '@config/database/base.entity.js'
import { User } from '../../user/entities/user.entity.js'

@Entity()
@Index(['providerId', 'accountId'], { unique: true })
export class Account extends BaseEntity {
  @Index()
  @Column({ type: 'uuid' })
  userId: string
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column({ type: 'text' })
  accountId: string

  @Column({ type: 'text' })
  providerId: string

  @Column({ type: 'text', nullable: true })
  accessToken: string | null

  @Column({ type: 'text', nullable: true })
  refreshToken: string | null

  @Column({ type: 'timestamptz', nullable: true })
  accessTokenExpiresAt: Date | null

  @Column({ type: 'timestamptz', nullable: true })
  refreshTokenExpiresAt: Date | null

  @Column({ type: 'text', nullable: true })
  scope: string | null

  @Column({ type: 'text', nullable: true })
  idToken: string | null

  @Column({ type: 'text', nullable: true })
  password: string | null
}
