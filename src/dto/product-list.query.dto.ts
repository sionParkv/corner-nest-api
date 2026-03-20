/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Transform } from 'class-transformer';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class ProductListQueryDto {
  @ApiPropertyOptional({
    description: '상품 타입. 비워두면 전체 조회',
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
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value !== 'string') return value;
    const trimmed = value.trim();
    return trimmed === '' ? undefined : trimmed;
  })
  @IsString()
  @IsIn([
    'virtual_office',
    'locker',
    'certificate',
    'hr',
    'parking',
    'goods',
    'property',
  ])
  productType?: string;
}
