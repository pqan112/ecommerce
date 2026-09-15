import { Category } from '@app/category/entities/category.entity.js'
import { BaseEntity } from '@config/database/base.entity.js'
import {
  decimalColumn,
  decimalColumnTransformer,
  nullableDecimalColumn,
} from '@shared/utils/decimal-column.transformer.js'
import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
} from 'typeorm'

@Index('idx_product_feartured', ['isFeatured'], {
  where: '"is_featured" = true AND "is_active" = true AND "deleted_at" IS NULL',
})
@Entity()
export class Product extends BaseEntity {
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category
  @Index()
  @Column({ type: 'uuid' })
  categoryId: string

  @Column({ type: 'varchar', length: 255 })
  name: string

  @Column({ type: 'text', nullable: true })
  shortDescription: string | null

  @Column({ type: 'text', nullable: true })
  description: string | null

  @Column({ type: 'varchar', length: 255, unique: true })
  slug: string

  @Column(decimalColumn)
  price: number

  @Column(nullableDecimalColumn)
  compareAtPrice: number | null

  @Column({ type: 'int', default: 0 })
  stockQuantity: number

  @Column({ type: 'varchar', length: 100, unique: true })
  sku: string

  @Column({ type: 'boolean', default: true })
  isActive: boolean

  @Column({ type: 'boolean', default: false })
  isFeatured: boolean

  @Column({ type: 'boolean', default: false })
  hasVariants: boolean

  @Column({ type: 'int', default: 0 })
  viewCount: number

  @Column({ type: 'int', default: 0 })
  reviewCount: number

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 2,
    default: 0,
    transformer: decimalColumnTransformer,
  })
  ratingAverage: number

  @Column(nullableDecimalColumn)
  weight: number | null

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt: Date | null
}
