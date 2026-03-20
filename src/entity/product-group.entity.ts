import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductInfoEntity } from './product-info.entity';

@Entity('ct_product_group')
export class ProductGroupEntity {
  @PrimaryGeneratedColumn()
  sno: number;

  @Column({ type: 'varchar', length: 100 })
  groupNm: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  titleColor: string | null;

  @Column({
    type: 'enum',
    enum: ['n', 'y'],
    default: 'y',
    nullable: true,
  })
  status: 'n' | 'y' | null;

  @Column({ type: 'int', default: 1 })
  sortNo: number;

  @Column({ type: 'datetime', nullable: true })
  regDt: Date | null;

  @Column({ type: 'datetime', nullable: true })
  modDt: Date | null;

  @OneToMany(() => ProductInfoEntity, (product) => product.group)
  products: ProductInfoEntity[];
}
