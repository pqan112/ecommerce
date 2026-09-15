import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@config/database/base.entity.js'

@Entity()
export class Verification extends BaseEntity {
  @Column({ type: 'text' })
  identifier: string

  @Column({ type: 'text' })
  value: string

  @Column({ type: 'timestamptz' })
  expiresAt: Date
}
