import { Product } from '@app/product/entities/product.entity.js'
import { BaseEntity } from '@config/database/base.entity.js'
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm'

@Index('uq_primary_image_per_product', ['productId'], {
  unique: true,
  where: '"is_primary" = true',
})
@Entity()
export class ProductImage extends BaseEntity {
  @Index()
  @Column({ type: 'uuid' })
  productId: string

  @ManyToOne(() => Product, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product: Product

  @Column({ type: 'text' })
  imageKey: string

  @Column({ type: 'varchar', length: 255, nullable: true })
  altText: string | null

  @Column({ type: 'int', default: 0 })
  displayOrder: number

  @Column({ type: 'boolean', default: false })
  isPrimary: boolean
}
