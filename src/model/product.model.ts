import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductGroupEntity } from '../entity/product-group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductModel {
  constructor(
    @InjectRepository(ProductGroupEntity)
    private readonly productGroupRepository: Repository<ProductGroupEntity>,
  ) {}

  async findProductGroups(productType?: string): Promise<ProductGroupEntity[]> {
    const qb = this.productGroupRepository
      .createQueryBuilder('grp')
      .leftJoinAndSelect(
        'grp.products',
        'prd',
        productType ? 'prd.productType = :productType' : '1=1',
        productType ? { productType } : {},
      )
      .leftJoinAndSelect('prd.optionInfo', 'opt')
      .orderBy('grp.sortNo', 'ASC')
      .addOrderBy('grp.sno', 'ASC')
      .addOrderBy('prd.sortNo', 'ASC')
      .addOrderBy('prd.productNo', 'ASC')
      .addOrderBy('opt.optionSno', 'ASC');

    return await qb.getMany();
  }
}
