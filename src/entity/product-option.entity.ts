import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductInfoEntity } from './product-info.entity';

@Entity('ct_product_option')
export class ProductOptionEntity {
  @PrimaryGeneratedColumn()
  optionSno: number;

  @Column({ type: 'int' })
  productNo: number;

  @Column({
    type: 'enum',
    enum: ['n', 'y'],
    default: 'n',
    nullable: true,
  })
  siteMemberOnlyFl: 'n' | 'y' | null;

  @Column({
    type: 'enum',
    enum: ['none', 'ys', 'bg', 'sh'],
    default: 'none',
    nullable: true,
  })
  siteCd: string | null;

  @Column({ type: 'varchar', length: 100 })
  optionNm: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  optionPrice: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  salePrice: string;

  @Column({ type: 'int', default: 0, nullable: true })
  optionValue: number | null;

  @Column({ type: 'int', default: 0, nullable: true })
  stockCnt: number | null;

  @Column({
    type: 'enum',
    enum: ['n', 'y'],
    default: 'n',
    nullable: true,
  })
  status: 'n' | 'y' | null;

  @Column({
    type: 'enum',
    enum: ['n', 'y'],
    default: 'n',
    nullable: true,
  })
  appDisplayFl: 'n' | 'y' | null;

  @Column({
    type: 'enum',
    enum: ['n', 'y'],
    default: 'n',
    nullable: true,
  })
  payDisplayFl: 'n' | 'y' | null;

  @Column({ type: 'datetime' })
  regDt: Date;

  @Column({ type: 'datetime' })
  modDt: Date;

  @ManyToOne(() => ProductInfoEntity, (product) => product.optionInfo)
  @JoinColumn({ name: 'productNo', referencedColumnName: 'productNo' })
  product: ProductInfoEntity;
}
