import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from '../controller/product.controller';
import { ProductService } from '../service/product.service';
import { ProductModel } from '../model/product.model';
import { ProductGroupEntity } from '../entity/product-group.entity';
import { ProductInfoEntity } from '../entity/product-info.entity';
import { ProductOptionEntity } from '../entity/product-option.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductGroupEntity,
      ProductInfoEntity,
      ProductOptionEntity,
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductModel],
  exports: [ProductService, ProductModel],
})
export class ProductModule {}
