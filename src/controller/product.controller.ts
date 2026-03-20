// src/controller/product.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from 'src/service/product.service';
import { ProductListQueryDto } from 'src/dto/product-list.query.dto';

@ApiTags('product')
@Controller('office-product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('list')
  @ApiOperation({
    summary: '상품 목록 조회',
    description:
      'productType이 비어 있으면 전체, 값이 있으면 해당 타입만 조회합니다.',
  })
  @ApiQuery({
    name: 'productType',
    required: false,
    enum: [
      'virtual_office',
      'locker',
      'certificate',
      'hr',
      'parking',
      'goods',
      'property',
    ],
    example: 'goods',
    description: '상품 타입. 비워두면 전체 조회',
  })
  @ApiResponse({
    status: 200,
    description: '상품 목록 조회 성공',
  })
  async getList(@Query() query: ProductListQueryDto) {
    return this.productService.getProductList(query.productType);
  }
}
