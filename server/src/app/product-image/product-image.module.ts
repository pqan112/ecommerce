import { Module } from '@nestjs/common'
import { ProductImageService } from './product-image.service.js'
import { ProductImageController } from './product-image.controller.js'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductImage } from './entities/product-image.entity.js'

@Module({
  imports: [TypeOrmModule.forFeature([ProductImage])],
  controllers: [ProductImageController],
  providers: [ProductImageService],
})
export class ProductImageModule {}
